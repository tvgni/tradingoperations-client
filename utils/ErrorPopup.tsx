import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';

export default function ErrorPopup({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const emailButtonOptions = {
    text: 'Volver a intentar',
    onClick: reset,
  };

  return (
    <Popup
      className="app-error"
      visible={true}
      // onHiding={popupState}
      dragEnabled={false}
      hideOnOutsideClick={true}
      showCloseButton={false}
      showTitle={true}
      title={error.name}
      // container=".dx-viewport"
      container="#containerElement"
      width={300}
      height={280}
    >
      <Position at="center" my="center" of="" collision="fit" />
      <ToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="after"
        options={emailButtonOptions}
      />
      <p>{error.message}</p>
    </Popup>
  );
}
