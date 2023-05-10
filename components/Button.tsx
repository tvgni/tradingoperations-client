'use client';

import Button from 'devextreme-react/button';
import TextBox from 'devextreme-react/text-box';

function sayHelloWorld() {
  alert('Hello world!');
}

export default function MyButton() {
  return (
    <div>
      <div className="dx-fieldset">
        <div className="dx-field">
          <div className="dx-field-label">City</div>
          <div className="dx-field-value">
            <TextBox
              className=""
              defaultValue="San Diego"
              showClearButton={true}
            />
          </div>
        </div>
        <Button text="hola mundo" onClick={sayHelloWorld} />
      </div>
    </div>
  );
}
