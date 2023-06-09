'use client';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Editing,
  Lookup,
  Popup,
  SearchPanel,
  Scrolling,
  Button,
} from 'devextreme-react/data-grid';
import { Switch } from 'devextreme-react';
import WarnigPopup from '@/components/warningPopup';

export const customers = [
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
  {
    ID: 11,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Role: 2,
    Estado: 2,
  },
  {
    ID: 12,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Role: 2,
    Estado: 2,
  },
  {
    ID: 13,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Role: 2,
    Estado: 2,
  },
  {
    ID: 14,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Role: 2,
    Estado: 2,
  },
  {
    ID: 15,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Role: 2,
    Estado: 2,
  },
];

const roles = [
  { ID: 1, Name: 'Administrador' },
  { ID: 2, Name: 'Trader' },
];

const allowedPageSizes = [10, 50, 100];

export default function UsuariosPage() {
  const handleEvent = (value: any, eventName: string) => {
    console.log(eventName);
    console.log(value);
  };

  const handleRequestPassword = (e: any) => {
    const item = { ...e.row.data };
    console.log(item);
  };

  return (
    <div>
      <h4 className="page-title">Administracion de Cuentas</h4>

      <DataGrid
        height={'71vh'}
        dataSource={customers}
        keyExpr="ID"
        //defaultColumns={columns}
        showBorders={true}
        onEditingStart={(value) => handleEvent(value, 'EditingStart')}
        onInitNewRow={(value) => handleEvent(value, 'InitNewRow')}
        onRowInserting={(value) => handleEvent(value, 'RowInserting')}
        onRowInserted={(value) => handleEvent(value, 'RowInserted')}
        onRowUpdating={(value) => handleEvent(value, 'RowUpdating')}
        onRowUpdated={(value) => handleEvent(value, 'RowUpdated')}
        onRowRemoving={(value) => handleEvent(value, 'RowRemoving')}
        onRowRemoved={(value) => handleEvent(value, 'RowRemoved')}
        onSaving={(value) => handleEvent(value, 'Saving')}
        onSaved={(value) => handleEvent(value, 'Saved')}
        onEditCanceling={(value) => handleEvent(value, 'EditCanceling')}
        onEditCanceled={(value) => handleEvent(value, 'EditCanceled')}
      >
        <SearchPanel width={300} visible={true} />
        <Paging defaultPageSize={10} />
        <Pager
          visible={true}
          allowedPageSizes={allowedPageSizes}
          displayMode="full"
          showPageSizeSelector={true}
          showInfo={true}
          showNavigationButtons={true}
        />
        <Scrolling mode="virtual" />

        <Column dataField="Nombre" />
        <Column dataField="Apellido" />
        <Column dataField="Correo" />
        <Column dataField="Telefono" width={100} />
        <Column dataField="Role" caption="Role" width={135}>
          <Lookup dataSource={roles} displayExpr="Name" valueExpr="ID" />
        </Column>
        <Column
          dataField="Estado"
          width={125}
          dataType="number"
          cellRender={({ value }) => (value === 1 ? 'Activo' : 'Deshabilitado')}
          editCellRender={({ value, setValue }) => (
            <Switch
              defaultValue={value === 1}
              onValueChange={(value) => setValue(value ? 1 : 2)}
            />
          )}
        ></Column>
        <Column type="buttons" width={110}>
          <Button name="edit" />
          <Button name="delete" />
          <Button
            hint="Cambiar contrasena"
            icon="email"
            onClick={handleRequestPassword}
          />
        </Column>

        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        >
          <Popup
            title="Editar Cuenta"
            showTitle={true}
            width={700}
            height={525}
          />
        </Editing>
      </DataGrid>
    </div>
  );
}
