'use client';
import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';

export default function WarnigPopup() {
  return (
    <Popup
      visible={true}
      onHiding={(e) => console.log(e)}
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
          onClick: () => console.log(),
        }}
      />
      <ToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="after"
        options={{ icon: 'Close', text: 'Close', onClick: () => console.log() }}
      />
      <p>Esta seguro que desea enviar el cambio de contraseña</p>
    </Popup>
  );
}
