'use client';
import { useState } from 'react';
import { AutoLayout } from 'devextreme-react/diagram';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Editing,
  Lookup,
  FilterRow,
} from 'devextreme-react/data-grid';
import { DropDownButton } from 'devextreme-react/button';
import DropDownBox from 'devextreme-react/drop-down-box';

const columns = ['Nombre', 'Correo', 'Telefono', 'Estado'];

export const customers = [
  {
    ID: 1,
    Nombre: 'Anika',
    Apellido: 'Ruiz',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
  {
    ID: 2,
    Nombre: 'Andrea',
    Apellido: 'Estrada',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 1,
  },
  {
    ID: 2,
    Nombre: 'Adrian',
    Apellido: 'Estrada',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
  {
    ID: 2,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
  {
    ID: 2,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
  {
    ID: 2,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
  {
    ID: 2,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
  {
    ID: 2,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
  {
    ID: 2,
    Nombre: 'Alfred',
    Apellido: 'Canceco',
    Correo: 'Ark@gmail.com',
    Telefono: '8288-9899',
    Estado: 2,
  },
];

const states = [
  { ID: 1, Name: 'Activo' },
  { ID: 2, Name: 'Inactivo' },
  // Agrega más objetos de estado según sea necesario
];

const CustomEditCell = (props) => {
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

function logEvent(events, eventName) {
  return [eventName, ...events];
}

const allowedPageSizes = [2, 4, 8];

export default function UsuariosPage() {
  const [events, setEvents] = useState([]);

  const clearEvents = () => {
    setEvents([]);
  };

  const handleEvent = (eventName) => {
    setEvents((prevEvents) => logEvent(prevEvents, eventName));
  };

  return (
    <div className={'pagecontainer'}>
      <h4 style={{ borderBottom: '1px solid red' }}>Usuarios Page!</h4>

      <DataGrid
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
        {/*<Column
            dataField="Estado"
            caption="State"
            width={125}
            editCellComponent={CustomEditCell}
          />*/}

        <FilterRow visible={true} />

        <Column dataField="Nombre" />

        <Column dataField="Apellido" />

        <Column dataField="Correo" />

        <Column dataField="Telefono" />

        <Column dataField="Estado" caption="Estado" width={125}>
          <Lookup dataSource={states} displayExpr="Name" valueExpr="ID" />
        </Column>

        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
          editCellComponent={CustomEditCell}
        ></Editing>

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

        <Paging defaultPageSize={4} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
        />
      </DataGrid>
    </div>
  );
}
