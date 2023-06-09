'use client';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Editing,
  Lookup,
  Popup,
  SearchPanel,
  Button,
  Scrolling,
} from 'devextreme-react/data-grid';
import { Switch } from 'devextreme-react';
import WarnigPopup from '@/components/warningPopup';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { useEffect, useState } from 'react';

const roles = [
  { ID: 1, Name: 'Administrador' },
  { ID: 2, Name: 'Trader' },
];

const allowedPageSizes = [10, 50, 100];

export default function UsuariosPage() {
  const url = 'http://localhost:3000/v1';
  const dataSource = createStore({
    key: 'ID',
    loadUrl: `${url}/users`,
    // insertUrl: `${url}/InsertOrder`,
    // updateUrl: `${url}/UpdateOrder`,
    // deleteUrl: `${url}/DeleteOrder`,
    onBeforeSend: (method, ajaxOptions) => {
      console.log(method);
      console.log(ajaxOptions);

      ajaxOptions.xhrFields = { withCredentials: true };
    },
  });

  const [passowodPopup, setPassowodPopup] = useState(false);
  useEffect(() => setPassowodPopup(true), []);
  const [sendChangePasswordPopupVisible, setSendChangePasswordPopupVisible] =
    useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const [createEditTitlePopup, setCreateEditTitlePopup] = useState('');

  const handleRequestPassword = (e: any) => {
    setSendChangePasswordPopupVisible(true);
    const itemSelected = { ...e.row.data };
    setItemSelected(itemSelected);
    console.log(itemSelected);
  };
  const handleEvent = (value: any, eventName: string) => {
    setCreateEditTitlePopup('');
    if (eventName === 'EditingStart') {
      setCreateEditTitlePopup('Editar Usuario');
    }
    if (eventName === 'InitNewRow') {
      setCreateEditTitlePopup('Nuevo Usuario');
    }
    console.log(eventName);
    console.log(value);
  };

  return (
    <div>
      <h4 className="page-title">Administracion de Cuentas</h4>
      {passowodPopup ? (
        <WarnigPopup
          visible={sendChangePasswordPopupVisible}
          handleCancel={() => {
            setSendChangePasswordPopupVisible(false);
            setItemSelected(null);
          }}
          handleOk={() => console.log(itemSelected)}
        />
      ) : (
        <></>
      )}

      <DataGrid
        height={'71vh'}
        dataSource={dataSource}
        remoteOperations={true}
        keyExpr="ID"
        columnHidingEnabled={true}
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
        <SearchPanel
          width={300}
          visible={true}
          onTextChange={(c) => console.log(c)}
        />
        <Paging defaultPageSize={10} />
        <Pager
          visible={true}
          allowedPageSizes={allowedPageSizes}
          displayMode="full"
          showPageSizeSelector={true}
          showInfo={true}
          showNavigationButtons={true}
        />
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
            title={createEditTitlePopup}
            showTitle={true}
            width={700}
            height={525}
          />
        </Editing>
      </DataGrid>
    </div>
  );
}
