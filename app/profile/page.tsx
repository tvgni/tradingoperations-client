'use client';
import React, { useState } from 'react';
import Form, {
  ButtonItem,
  GroupItem,
  SimpleItem,
  Label,
  CompareRule,
  EmailRule,
  PatternRule,
  RequiredRule,
  StringLengthRule,
} from 'devextreme-react/form';
import Validator from 'devextreme/ui/validator';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { InitializedEventInfo } from 'devextreme/events';
import dxForm from 'devextreme/ui/form';

const UserProfileForm = () => {
  const [profile, setProfile] = useState(null as any);
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const [, setProfileFormInstance] = useState(
    {} as InitializedEventInfo<dxForm>
  );
  const [formInstancePassword, setInstancePassword] = useState(
    {} as InitializedEventInfo<dxForm>
  );

  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { given_name, family_name, phone } = user as any;
  if (profile === null) {
    setProfile({
      firstName: given_name ?? '',
      lastname: family_name ?? '',
      phoneNumber: phone ?? '',
      email: user?.email ?? '',
    });
  }

  const handleSubmitProfile = (e: any) => {
    e.preventDefault();
    // console.log(profile);
    // console.log(password);
  };
  const handleSubmitPassword = async (e: any) => {
    e.preventDefault();
    await fetch('/v1/users/password', {
      method: 'POST',
      body: JSON.stringify(password),
    });
  };

  const imageLoader = () => {
    return user?.picture ?? '';
  };

  const changePasswordMode = (name: string) => {
    const editor = formInstancePassword.component?.getEditor(name);
    editor?.option(
      'mode',
      editor.option('mode') === 'text' ? 'password' : 'text'
    );
  };

  const passwordOptions = {
    mode: 'password',
    onValueChanged: () => {
      const editor =
        formInstancePassword.component?.getEditor('confirmPassword');
      if (editor?.option('value')) {
        const instance = Validator.getInstance(editor.element()) as Validator;
        instance.validate();
      }
    },
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          icon: '/eye.png',
          type: 'default',
          onClick: () => changePasswordMode('password'),
        },
      },
    ],
  };
  const confirmOptions = {
    mode: 'password',
    onValueChanged: ({ value }: { value: string }) => {
      console.log(value);
      setPassword({ ...password, confirmPassword: value });
    },
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          icon: '/eye.png',
          type: 'default',
          onClick: () => changePasswordMode('confirmPassword'),
        },
      },
    ],
  };
  const buttonOptionsProfile = {
    text: 'Guardar',
    type: 'default',
    useSubmitBehavior: true,
  };

  const buttonOptionsPassword = {
    text: 'Guardar',
    type: 'default',
    useSubmitBehavior: true,
  };

  return (
    <div>
      <h4 className="page-title">Mi Perfil</h4>
      <div className="grid gap-4 grid-cols-1 m-25">
        <div className="mx-auto">
          <div className="relative">
            <Image
              className="w-36 h-36 rounded-full"
              loader={imageLoader}
              src="my-prifile.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmitProfile}>
        <Form
          formData={profile}
          readOnly={false}
          showColonAfterLabel={true}
          showValidationSummary={false}
          validationGroup="profileData"
          onInitialized={setProfileFormInstance}
          onFieldDataChanged={(e) => setProfileFormInstance(e)}
        >
          <GroupItem caption="Datos Personales" colCount={2}>
            <SimpleItem dataField="firstName">
              <Label text="Nombre" />
              <RequiredRule />
              <PatternRule
                message="No puede usar digitos en el nombre"
                pattern={/^[^0-9]+$/}
              />
              <StringLengthRule
                min={2}
                message="El nombre debe contener al menos 2 letra"
              />
            </SimpleItem>
            <SimpleItem dataField="lastname">
              <Label text="Apellido" />
              <RequiredRule />
              <PatternRule
                message="No puede usar digitos en el apellido"
                pattern={/^[^0-9]+$/}
              />
              <StringLengthRule
                min={2}
                message="El apellido debe contener al menos 2 letra"
              />
            </SimpleItem>
            <SimpleItem dataField="phoneNumber">
              <Label text="Telefono" />
              <RequiredRule />
              <PatternRule message="Telefono invalido" pattern={/^[0-9]{8}$/} />
            </SimpleItem>
            <SimpleItem dataField="email" editorType="dxTextBox">
              <Label text="Correo" />
              <RequiredRule />
              <EmailRule message="Correo invalido" />
            </SimpleItem>
          </GroupItem>
          <ButtonItem
            horizontalAlignment="right"
            buttonOptions={buttonOptionsProfile}
          />
        </Form>
      </form>
      <form onSubmit={handleSubmitPassword}>
        <Form
          formData={password}
          readOnly={false}
          showColonAfterLabel={true}
          showValidationSummary={false}
          validationGroup="passwordData"
          onInitialized={setInstancePassword}
          onFieldDataChanged={(e) => setInstancePassword(e)}
        >
          <GroupItem caption="Credenciales" colCount={2}>
            <SimpleItem
              dataField="password"
              editorType="dxTextBox"
              editorOptions={passwordOptions}
            >
              <Label text="Contraseña" />
              <RequiredRule />
            </SimpleItem>
            <SimpleItem
              name="confirmPassword"
              editorType="dxTextBox"
              editorOptions={confirmOptions}
            >
              <Label text="Repetir-Contraseña" />
              <RequiredRule message="confirmar contraseña es requerido" />
              <CompareRule
                message="Contraseña y Confirmar contraseña no coinciden"
                comparisonTarget={() => password.password}
              />
            </SimpleItem>
          </GroupItem>
          <ButtonItem
            horizontalAlignment="right"
            buttonOptions={buttonOptionsPassword}
          />
        </Form>
      </form>
    </div>
  );
};

export default UserProfileForm;
