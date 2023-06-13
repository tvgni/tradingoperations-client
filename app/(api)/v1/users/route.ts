import { NextResponse } from 'next/server';

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skip = searchParams.get('skip');
  const take = Number(searchParams.get('take'));

  const doplicate = take / 10;

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
      Nombre: 'Juan',
      Apellido: 'Alberto',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 4,
      Nombre: 'Jesus',
      Apellido: 'Canceco',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 1,
      Estado: 2,
    },
    {
      ID: 5,
      Nombre: 'Bismark',
      Apellido: 'Canales',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 6,
      Nombre: 'Josue',
      Apellido: 'Maldonado',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 1,
      Estado: 2,
    },
    {
      ID: 7,
      Nombre: 'Skarlet',
      Apellido: 'Martinez',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 8,
      Nombre: 'Huber',
      Apellido: 'Gonzalez',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 1,
      Estado: 2,
    },
    {
      ID: 9,
      Nombre: 'Henry',
      Apellido: 'Dolores',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
    {
      ID: 10,
      Nombre: 'Karen',
      Apellido: 'Paredes',
      Correo: 'Ark@gmail.com',
      Telefono: '8288-9899',
      Role: 2,
      Estado: 2,
    },
  ];

  let totalDuplicate: any[] = [];
  for (let index = 0; index < doplicate; index++) {
    totalDuplicate = [...totalDuplicate, ...customers];
  }
  return NextResponse.json({
    data: shuffleArray(totalDuplicate),
    totalCount: 100,
  });
}

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);

  return NextResponse.json({});
}

export async function PUT(request: Request) {
  const res = await request.json();
  console.log(res);

  return NextResponse.json(res);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  console.log(id);
  return NextResponse.json({});
}
