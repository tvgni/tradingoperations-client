'use client';
import '../../globals.css';

import React, { useState } from 'react';
import { DropDownButton, FileUploader, DataGrid } from 'devextreme-react';
import { Column, Paging, Pager } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Width } from 'devextreme-react/chart';

const MyPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  //const [selectedOption, setSelectedOption] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [gridData, setGridData] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  const handleOptionClick = (e) => {
    setSelectedOption(e.itemData);
  };

  const handleFileChange = (e) => {
    setUploadedFile(e.file);
  };

  const handleFileUpload = () => {
    // Aquí puedes realizar las operaciones necesarias con el archivo subido
    // Por ejemplo, enviarlo al servidor y obtener los datos para mostrar en el DataGrid
    // Una vez que tengas los datos, actualiza el estado "gridData" con los datos obtenidos

    // Ejemplo de actualización del estado con datos ficticios
    const newGridData = [
      {
        Fecha: 1,
        Simbolo: 'John Doe',
        Slide: 'Test',
        Cantidad: 25,
        Precio: 25,
        Executivo: 'User',
      },
    ];
    setGridData(newGridData);
  };

  const GridData = [
    {
      Fecha: '2023-06-01',
      Simbolo: 'John Doe',
      Slide: 'Test',
      Cantidad: 25,
      Precio: 25,
      Executivo: 'User',
    },
    {
      Fecha: '2023-06-01',
      Simbolo: 'John Doe',
      Slide: 'Test',
      Cantidad: 25,
      Precio: 25,
      Executivo: 'User',
    },
    {
      Fecha: '2023-06-01',
      Simbolo: 'John Doe',
      Slide: 'Test',
      Cantidad: 25,
      Precio: 25,
      Executivo: 'User',
    },
    {
      Fecha: '2023-06-01',
      Simbolo: 'John Doe',
      Slide: 'Test',
      Cantidad: 25,
      Precio: 25,
      Executivo: 'User',
    },
    {
      Fecha: '2023-06-01',
      Simbolo: 'John Doe',
      Slide: 'Test',
      Cantidad: 25,
      Precio: 25,
      Executivo: 'User',
    },
    {
      Fecha: '2023-06-01',
      Simbolo: 'John Doe',
      Slide: 'Test',
      Cantidad: 25,
      Precio: 25,
      Executivo: 'User',
    },
  ];
  const allowedPageSizes = [2, 4, 8];
  return (
    <div className="pagecontainer overflow-y-auto">
      <div className="h-56 grid grid-cols-3 gap-3  items-start">
        <div className="py-4">
          <DropDownButton
            text={selectedOption ? selectedOption : 'Seleccionar Broker'}
            items={['Option 1', 'Option 2', 'Option 3']}
            onItemClick={handleOptionClick}
          />
        </div>
        <div className="py-2">
          <FileUploader
            labelText="Seleccionar archivo"
            accept="*"
            uploadMode="useButtons"
            onValueChanged={handleFileChange}
          />
        </div>
        <div className="py-4 row-span-3 w-15">
          <h4>Acerca del formato</h4>
          <p className="text-clip overflow-hidden w-15 text-justify">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p className="text-clip overflow-hidden text-justify">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br></br>
            It has survived not only five centuries, but also the leap <br></br>
            into electronic typesetting, remaining essentially unchanged. It was
            <br></br>
            popularised in the 1960s with the release of Letraset sheets
            <br></br>
            containing Lorem Ipsum passages, and more recently with desktop
            publishing <br></br>
            software like Aldus PageMaker including versions of Lorem Ipsum.
            <br></br>
          </p>

          <p className="text-clip overflow-hidden">
            Lorem Ipsum has been the industrys standard dummy <br></br>
            text ever since the 1500s, when an unknown printer took a <br></br>
            galley of type and scrambled it to make a type specimen book.{' '}
            <br></br>
            It has survived not only five centuries, but also the leap <br></br>
            into electronic typesetting, remaining essentially unchanged. It was
            <br></br>
            popularised in the 1960s with the release of Letraset sheets
            <br></br>
            containing Lorem Ipsum passages, and more recently with desktop
            publishing <br></br>
            software like Aldus PageMaker including versions of Lorem Ipsum.
            <br></br>
          </p>

          <p className="text-clip overflow-hidden">
            Lorem Ipsum has been the industrys standard dummy <br></br>
            text ever since the 1500s, when an unknown printer took a <br></br>
            galley of type and scrambled it to make a type specimen book.
            <br></br>
            It has survived not only five centuries, but also the leap <br></br>
            into electronic typesetting, remaining essentially unchanged. It was
            <br></br>
            popularised in the 1960s with the release of Letraset sheets
            <br></br>
            containing Lorem Ipsum passages, and more recently with desktop
            publishing <br></br>
            software like Aldus PageMaker including versions of Lorem Ipsum.
            <br></br>
          </p>
        </div>

        <div className="justify-self-start col-span-2">
          <DataGrid dataSource={GridData}>
            <Column dataField="Fecha" caption="Fecha" />
            <Column dataField="Simbolo" caption="Simbolo" />
            <Column dataField="Slide" caption="Slide" />
            <Column dataField="Cantidad" caption="Cantidad" />
            <Column dataField="Precio" caption="Precio" />
            <Column dataField="Executivo" caption="Executivo" />

            <Paging defaultPageSize={4} />
            <Pager
              showPageSizeSelector={true}
              allowedPageSizes={allowedPageSizes}
            />
          </DataGrid>
        </div>
        <div className="justify-self-start col-span-2">
          <Button text="Importar" />
        </div>
        <div className="justify-self-start">
          <h4 className="text-red-700">Detalles de errores encontrados</h4>
          <ul className="text-red-700">
            <li>El Archivo no contiene la columna precio trade trade trade</li>
            <li>
              El Archivo no contiene la columna precio trade trade trade trade
              trade
            </li>
            <li>
              El Archivo no contiene la columna precio
              tradetradetradetradetradetradetradetrade
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
