'use client';

import Button from 'devextreme-react/button';
import TextBox from 'devextreme-react/text-box';

function sayHelloWorld() {
   alert('Hello world!')
}

export default function MyButton() {
   return (
       <div>
           <div className="dx-field">
               <div className="dx-field-label">City</div>
               <TextBox className="dx-field-value" defaultValue="San Diego" />
           </div>
           <Button text="hola mundo" onClick={sayHelloWorld} />
      </div>
   )
};