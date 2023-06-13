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
  RequiredRule,
  EmailRule,
  PatternRule,
} from 'devextreme-react/data-grid';
import { Switch } from 'devextreme-react';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { useCallback } from 'react';
import { confirm } from 'devextreme/ui/dialog';

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
    insertUrl: `${url}/users`,
    updateUrl: `${url}/users`,
    deleteUrl: `${url}/users`,
    onBeforeSend: (method, ajaxOptions) => {
      if (ajaxOptions.method === 'POST') {
        ajaxOptions.data = ajaxOptions.data.values;
      }
      if (ajaxOptions.method === 'PUT') {
        ajaxOptions.data = JSON.stringify({
          id: ajaxOptions.data.key,
          data: ajaxOptions.data.values,
        });
      }
      if (ajaxOptions.method === 'DELETE') {
        ajaxOptions.url = `${ajaxOptions.url}?id=${ajaxOptions.data.key}`;
      }
    },
  });

  const handleRequestPassword = useCallback((e: any) => {
    const itemSelected = { ...e.row.data };

    let result = confirm(
      `<i>Seguro que desea enviar una solicitud de cambio de contraseña al correo ${itemSelected.Correo}?</i>`,
      'Contraseña'
    );
    result.then((dialogResult) => {
      if (dialogResult) {
        console.log(itemSelected);
      }
    });
  }, []);

  return (
    <div>
      <h4 className="page-title">Administracion de Cuentas</h4>

      <DataGrid
        height={'71vh'}
        dataSource={dataSource}
        remoteOperations={true}
        keyExpr="ID"
        columnAutoWidth={true}
        columnHidingEnabled={true}
        showBorders={true}
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
        <Column dataField="Nombre">
          <RequiredRule />
        </Column>
        <Column dataField="Apellido">
          <RequiredRule />
        </Column>
        <Column dataField="Correo">
          <RequiredRule />
          <EmailRule />
        </Column>
        <Column dataField="Telefono" width={100}>
          <PatternRule message="Telefono invalido" pattern={/^[0-9]{8}$/} />
        </Column>
        <Column dataField="Role" caption="Role" width={135}>
          <RequiredRule />
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
            title="Cuenta de usuario"
            showTitle={true}
            width={700}
            height={525}
          />
        </Editing>
      </DataGrid>
    </div>
  );
}
