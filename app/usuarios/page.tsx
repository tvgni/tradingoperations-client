'use client';
import { useState } from 'react';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Editing,
  Lookup,
  Popup,
  Form,
  Item,
  SearchPanel,
  Scrolling,
} from 'devextreme-react/data-grid';
import DropDownBox from 'devextreme-react/drop-down-box';
import { Switch } from 'devextreme-react';

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
  { ID: 1, Name: 'Administradores' },
  { ID: 2, Name: 'Traders' },
];

const states = [
  { ID: 1, Name: 'Activo' },
  { ID: 2, Name: 'Inactivo' },
  // Agrega más objetos de estado según sea necesario
];

const CustomEditCell = (props: any) => {
  const { value, onValueChange } = props;

  return (
    <DropDownBox
      value={value}
      dataSource={states}
      displayExpr="Name"
      valueExpr="ID"
      onValueChanged={onValueChange}
    />
  );
};

const customizeEditingToolbar = (toolbarOptions: any) => {
  toolbarOptions.items.unshift({
    widget: 'dxButton',
    location: 'before',
    options: {
      text: 'Opción personalizada',
      onClick: () => handleCustomOptionClick(),
    },
  });
};

const handleCustomOptionClick = () => {
  // Lógica para manejar el clic en la opción personalizada
  console.log('Opción personalizada');
};

function logEvent(events, eventName) {
  return [eventName, ...events];
}

const allowedPageSizes = [10, 50, 100];

export default function UsuariosPage() {
  const [events, setEvents] = useState([]);

  const clearEvents = () => {
    setEvents([]);
  };

  const handleEvent = (eventName) => {
    setEvents((prevEvents) => logEvent(prevEvents, eventName));
  };

  const handleChangePassword = (e) => {
    // Lógica para cambiar la contraseña del usuario
    console.log('Cambiar contraseña del usuario con ID:', e.data.id);
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
        onEditingStart={() => handleEvent('EditingStart')}
        onInitNewRow={() => handleEvent('InitNewRow')}
        onRowInserting={() => handleEvent('RowInserting')}
        onRowInserted={() => handleEvent('RowInserted')}
        onRowUpdating={() => handleEvent('RowUpdating')}
        onRowUpdated={() => handleEvent('RowUpdated')}
        onRowRemoving={() => handleEvent('RowRemoving')}
        onRowRemoved={() => handleEvent('RowRemoved')}
        onSaving={() => handleEvent('Saving')}
        onSaved={() => handleEvent('Saved')}
        onEditCanceling={() => handleEvent('EditCanceling')}
        onEditCanceled={() => handleEvent('EditCanceled')}
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

        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
          editCellComponent={CustomEditCell}
          customizeToolbar={customizeEditingToolbar}
        >
          <Popup
            title="Editar Cuenta"
            showTitle={true}
            width={700}
            height={525}
          />
        </Editing>

        {/*<Editing mode="popup" allowUpdating={true} allowDeleting={true} allowAdding={true} popupRender={(popup) => (
                  <DropDownButton
                    text="Edit"
                    items={[
                      { text: 'Edit', onClick: () => popup?.option('visible', false) },
                      { text: 'Delete', onClick: () => popup?.option('visible', false) },
                    ]}
                  />
                )} />

                  </Editing>*/}

        {/*<Editing mode="popup" allowUpdating={true} allowDeleting={true} allowAdding={true} popupRender={(popup) => (
              <DropDownButton
                text="Edit"
                items={[
                  { text: 'Edit', onClick: () => popup?.option('visible', false) },
                  { text: 'Delete', onClick: () => popup?.option('visible', false) },
                ]}
              />
            )} />*/}
      </DataGrid>
    </div>
  );
}
