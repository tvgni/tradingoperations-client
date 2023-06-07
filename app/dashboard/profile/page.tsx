'use client';
import React, { useState } from 'react';
import { Button, TextBox, CheckBox, FileUploader } from 'devextreme-react';
import { Margin } from 'devextreme-react/bar-gauge';

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [pass, setPass1] = useState('');
  const [confirmpass, setPass2] = useState('');

  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para guardar los datos del perfil del usuario
    console.log('Nombre:', name);
    console.log('Apellido:', lastname);
    console.log('Telefono:', telefono);
    console.log('Email:', email);
    console.log('Avatar:', avatar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: '0 20px' }}>
        <h2>Perfil de usuario</h2>

        <div className="grid gap-4 grid-cols-3 first-grid-form">
          <div className="img-form-profile">
            <img
              width={140}
              src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png"
            />
          </div>

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
            <TextBox value={email} />
          </div>
          <div className="place-self-start mt-2 margen-top">
            <Button text="Guardar" type="default" useSubmitBehavior={true} />
          </div>
        </div>

        <hr></hr>

        <div className="grid gap-4 grid-cols-3">
          <div>
            <label>Contraseña:</label>
            <TextBox mode="password" value={pass} />
          </div>

          <div>
            <label>Repetir-Contraseña:</label>
            <TextBox mode="password" value={confirmpass} />
          </div>

          <div className="margen-top">
            <Button text="Guardar" type="default" useSubmitBehavior={true} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserProfileForm;
