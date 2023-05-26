'use client';

interface People {
  fullName: string;
  age: number;
  country: string;
}
const people = [
  {
    fullName: 'John Doe',
    age: 25,
    country: 'United States',
  },
  {
    fullName: 'Jane Smith',
    age: 30,
    country: 'Canada',
  },
  {
    fullName: 'Maria Rodriguez',
    age: 28,
    country: 'Spain',
  },
] as People[];

export default function BaseComponent({
  children,
  value,
}: {
  children: any;
  value: string;
}) {
  return (
    <div>
      <h3>{value}</h3>
      <br></br>
      <ListPeople people={people} />
      {children}
    </div>
  );
}

function ListPeople({ people }: { people: People[] }) {
  const render = people.map((person, index) => {
    return (
      <div key={index}>
        <p>
          Name: <span>{person.fullName}</span>
        </p>
        <p>
          Age: <span>{person.age}</span>
        </p>
        <p>
          Country: <span>{person.country}</span>
        </p>
      </div>
    );
  });

  return <>{render}</>;
}
