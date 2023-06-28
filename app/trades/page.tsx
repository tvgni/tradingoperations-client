'use client';
import React, { useState } from 'react';
import { DropDownButton, FileUploader, DataGrid } from 'devextreme-react';
import { Column, Paging, Pager } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';

const MyPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [gridData, setGridData] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  const handleOptionClick = (e) => {
    setSelectedOption(e.itemData);
  };

  const handleFileChange = (e) => {
    //console.log(e.value[0]);
    setUploadedFile(e.value[0]);

    const reader = new FileReader();
    reader.onload = handleFileLoad;
    reader.readAsText(e.value[0]);
  };

  const handleFileUpload = () => {};

  const csvToGrid = () => {
    //console.log(uploadedFile);
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = handleFileLoad;
      reader.readAsText(uploadedFile);
    }
  };

  const [errors, setErrors] = useState([]);

  const handleFileLoad = (event) => {
    const csvData = event.target.result;
    const rows = csvData.split('\n');

    // console.log(rows);

    // Eliminar la primera fila (encabezados de columna) si es necesario
    if (rows.length > 0) {
      rows.shift();
    }

    // Convertir las filas en objetos
    const newGridData = rows.map((row, index) => {
      const [Fecha, Simbolo, Slide, Cantidad, Precio, Executivo] =
        row.split(',');

      const cantidadValidada = parseInt(Cantidad);
      const precioValidado = parseFloat(Precio);
      const fechaValidada = new Date(Fecha);

      // Verificar si los datos cumplen con alguna condición de validación
      if (isNaN(cantidadValidada) || cantidadValidada < 0) {
        // Realizar alguna acción si la cantidad no es válida
        // Por ejemplo, podrías mostrar un mensaje de error o realizar un registro de errores
        console.log(`Error en la fila ${row}: Cantidad inválida`);
        setErrors((prevErrors) => [
          ...prevErrors,
          `Error en la fila ${index + 1} con datos ${row} : Cantidad Invalida`,
        ]);
      }

      if (isNaN(precioValidado) || precioValidado < 0) {
        console.log(`Error en la fila ${row}: Precio inválido`);
        setErrors((prevErrors) => [
          ...prevErrors,
          `Error en la fila ${index + 1} con datos ${row} : Precio Invalido`,
        ]);
      }

      if (isNaN(fechaValidada)) {
        console.log(`Error en la fila ${row}: Fecha inválida`);
        setErrors((prevErrors) => [
          ...prevErrors,
          `Error en la fila ${index + 1} con datos ${row} : Fecha inválida`,
        ]);
        //errors.push(`Error en la fila ${row}: Fecha inválida`);
      }

      return {
        Fecha,
        Simbolo,
        Slide,
        Cantidad: parseInt(Cantidad),
        Precio: parseFloat(Precio),
        Executivo,
      };
    });

    //console.log(newGridData);

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
    // ...
  ];

  const allowedPageSizes = [2, 4, 8];

  return (
    <div>
      <form
        onSubmit={handleFileUpload}
        method="post"
        encType="multipart/form-data"
      >
        <div className="h-50 grid grid-cols-4 gap-1 items-start">
          <div className="col-span-3">
            <div className="grid grid-cols-2 items-start">
              <div className="">
                <DropDownButton
                  text={selectedOption ? selectedOption : 'Seleccionar Broker'}
                  items={['Option 1', 'Option 2', 'Option 3']}
                  onItemClick={handleOptionClick}
                />
              </div>
              <div className="">
                <FileUploader
                  labelText="Seleccionar archivo"
                  accept="*"
                  //uploadMode="useButtons"
                  uploadMode="useForm"
                  onValueChanged={handleFileChange}
                  //onFilesUploaded={csvToGrid}
                  //onOptionChanged={csvToGrid}
                  onProgress={csvToGrid}
                />
              </div>

              <div className="justify-self-start col-span-3">
                <DataGrid dataSource={gridData}>
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
                <Button
                  onClick={csvToGrid}
                  useSubmitBehavior={false}
                  text="Importar"
                />
              </div>

              <div className="justify-self-start col-span-2">
                <h4 className="text-red-700">
                  Detalles de errores encontrados
                </h4>

                {errors.length > 0 && (
                  <ul className="text-red-700">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="row-span-3 w-15">
            <h4>Acerca del formato</h4>
            <p className="text-clip overflow-hidden w-15 text-justify">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p className="text-clip overflow-hidden w-15 text-justify">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p className="text-clip overflow-hidden w-15 text-justify">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p className="text-clip overflow-hidden w-15 text-justify">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyPage;
