'use client';
import React, { useState } from 'react';
import { Button, TextBox, CheckBox, FileUploader } from 'devextreme-react';

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para guardar los datos del perfil del usuario
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Subscripción:', subscribe);
    console.log('Avatar:', avatar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: '0 20px' }}>
        <h2>Perfil de usuario</h2>
        <div>
          <label>Avatar:</label>
          <FileUploader
            selectButtonText="Seleccionar imagen"
            labelText=""
            accept="image/*"
            uploadMode="useForm"
            onValueChanged={setAvatar}
          />
        </div>
        <div>
          <label>Nombre:</label>
          <TextBox value={name} onValueChanged={setName} />
        </div>
        <div>
          <label>Email:</label>
          <TextBox value={email} onValueChanged={setEmail} />
        </div>
        <div>
          <label>Suscribirse:</label>
          <CheckBox value={subscribe} onValueChanged={setSubscribe} />
        </div>
        <Button text="Guardar" type="success" useSubmitBehavior={true} />
      </div>
    </form>
  );
};

export default UserProfileForm;
