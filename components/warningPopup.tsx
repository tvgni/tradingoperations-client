'use client';
import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';

export default function WarnigPopup({
  visible,
  handleCancel: handleCancel,
  handleOk: handleOk,
}: {
  visible: boolean;
  handleCancel: () => void;
  handleOk: (e: any) => void;
}) {
  return (
    <Popup
      visible={visible}
      onHiding={handleCancel}
      dragEnabled={false}
      hideOnOutsideClick={true}
      showCloseButton={false}
      showTitle={false}
      container=".dx-viewport"
      width={300}
      height="auto"
    >
      <Position
        at="center"
        my="center"
        // of={this.state.positionOf}
        collision="fit"
      />

      <ToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="before"
        options={{
          icon: 'email',
          text: 'enviar',
          onClick: handleOk,
        }}
      />
      <ToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="after"
        options={{ icon: 'Close', text: 'Cancelar', onClick: handleCancel }}
      />
      <p>Esta seguro que desea enviar uan solicitud de cambio de contraseña</p>
    </Popup>
  );
}
