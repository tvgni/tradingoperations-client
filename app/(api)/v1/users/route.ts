import { NextResponse } from 'next/server';

export async function GET() {
  const customers = [
    {
      ID: 1,
      Nombre: 'Anika',
      Apellido: 'Ruiz',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 1,
      Estado: 1,
    },
    {
      ID: 2,
      Nombre: 'Andrea',
      Apellido: 'Estrada',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 1,
    },
    {
      ID: 3,
      Nombre: 'Adrian',
      Apellido: 'Estrada',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 4,
      Nombre: 'Alfred',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 1,
      Estado: 2,
    },
    {
      ID: 5,
      Nombre: 'Alfred',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 6,
      Nombre: 'Alfred',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 1,
      Estado: 2,
    },
    {
      ID: 7,
      Nombre: 'Alfred',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 8,
      Nombre: 'Alfred',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 1,
      Estado: 2,
    },
    {
      ID: 9,
      Nombre: 'Alfred',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 10,
      Nombre: 'Alfred',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
  ];

  return NextResponse.json({ data: customers, totalCount: 100 });
}
