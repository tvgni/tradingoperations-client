'use client';
import React, { useState } from 'react';
import { Button, TextBox } from 'devextreme-react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [pass, setPass1] = useState('');
  const [confirmpass, setPass2] = useState('');
  const [avatar, setAvatar] = useState(null);

  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  setEmail(user?.email);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para guardar los datos del perfil del usuario
    console.log('Nombre:', name);
    console.log('Apellido:', lastname);
    console.log('Telefono:', telefono);
    console.log('Email:', email);
    console.log('Avatar:', avatar);
  };

  const imageLoader = () => {
    return user?.picture ?? '';
  };

  return (
    <div>
      <h4 className="page-title">Mi Perfil</h4>
      <form onSubmit={handleSubmit}>
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
        <div>
          <div
            className="grid gap-4 grid-cols-2"
            style={{ margin: '24px 0 24px 0px' }}
          >
            <div>
              <label>Nombre:</label>
              <TextBox value={name} />
            </div>
            <div>
              <label>Apellido:</label>
              <TextBox value={lastname} />
            </div>
            <div>
              <label>Telefono:</label>
              <TextBox value={telefono} />
            </div>
            <div>
              <label>Email:</label>
              <TextBox value={email ?? ''} />
            </div>
          </div>

          <div
            className="grid gap-4 grid-cols-1"
            style={{ margin: '24px 0 24px 0px' }}
          >
            <div className="place-self-end mt-2 ">
              <Button text="Guardar" type="default" useSubmitBehavior={true} />
            </div>
          </div>

          <hr></hr>

          <div
            className="grid gap-4 grid-cols-2"
            style={{ margin: '24px 0 24px 0px' }}
          >
            <div>
              <label>Contraseña:</label>
              <TextBox mode="password" value={pass} />
            </div>

            <div>
              <label>Repetir-Contraseña:</label>
              <TextBox mode="password" value={confirmpass} />
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1">
            <div className="place-self-end mt-2 ">
              <Button text="Guardar" type="default" useSubmitBehavior={true} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
