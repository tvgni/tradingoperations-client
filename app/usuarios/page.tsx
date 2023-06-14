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
  Label,
} from 'devextreme-react/data-grid';
import { Switch, Tooltip } from 'devextreme-react';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { useCallback } from 'react';
import { confirm } from 'devextreme/ui/dialog';

const roles = [
  { ID: 'Admin', Name: 'Administrador' },
  { ID: 'Trader', Name: 'Trader' },
];

const allowedPageSizes = [10, 50, 100];

export default function UsuariosPage() {
  const url = 'http://localhost:3000/v1';
  const dataSource = createStore({
    key: 'user_id',
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

  const handleRequestPassword = useCallback(async (e: any) => {
    const itemSelected = { ...e.row.data };

    let result = await confirm(
      `<i>Seguro que desea enviar una solicitud de cambio de contraseña al correo ${itemSelected.Correo}?</i>`,
      'Contraseña'
    );
    if (result) {
      await fetch('/v1/users/email', {
        method: 'POST',
        body: JSON.stringify({ email: itemSelected.email }),
      });
    }
  }, []);

  return (
    <div>
      <h4 className="page-title">Administracion de Cuentas</h4>

      <DataGrid
        height={'71vh'}
        dataSource={dataSource}
        remoteOperations={true}
        keyExpr="user_id"
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
        <Column dataField="given_name" caption="Nombre">
          <RequiredRule />
        </Column>
        <Column dataField="family_name" caption="Apellido">
          <RequiredRule />
        </Column>
        <Column dataField="email" caption="Correo">
          <RequiredRule />
          <EmailRule />
        </Column>
        <Column
          dataField="phone_number"
          caption="Telefono"
          editorOptions={{
            mask: '\\+\\(5\\0\\5) X0000000',
            useMaskedValue: true,
            maskRules: { X: /[2-9]/ },
          }}
        ></Column>
        <Column dataField="role" caption="Role">
          <RequiredRule />
          <Lookup dataSource={roles} displayExpr="Name" valueExpr="ID" />
        </Column>
        <Column
          dataField="blocked"
          caption="Estado"
          dataType="boolean"
          cellRender={(item) => {
            const data = item.data.invited
              ? {
                  text: 'Pendiente',
                  tooltip: 'Cuenta pendiente de regristro',
                }
              : item.value
              ? {
                  text: 'Deshabilitado',
                  tooltip: 'Cuenta deshabilitada',
                }
              : {
                  text: 'Activo',
                  tooltip: 'Cuenta activa',
                };

            return (
              <div>
                <span id={`tooltip${item.rowIndex}`}>{data.text}</span>

                <Tooltip
                  target={`#tooltip${item.rowIndex}`}
                  showEvent="mouseenter"
                  hideEvent="mouseleave"
                  hideOnOutsideClick={false}
                >
                  <div>{data.tooltip}</div>
                </Tooltip>
              </div>
            );
          }}
          editCellRender={({ value, setValue }) => {
            return (
              <Switch
                defaultValue={value === undefined ? false : !value}
                onValueChange={(status) => setValue(!status)}
              />
            );
          }}
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
