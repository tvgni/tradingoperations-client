'use client';
import BarChart from '@/components/charts/bar';
import LineChart from '@/components/charts/lineChart';
import PieChartComponent from '@/components/charts/pieChart';
import StackedBarChart from '@/components/charts/stackedBar';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import notify from 'devextreme/ui/notify';

export default function dashboarpage() {
  const backButtonOptions = {
    icon: 'back',
    onClick: () => {
      notify('Back button has been clicked!');
    },
  };

  const refreshButtonOptions = {
    icon: 'refresh',
    onClick: () => {
      notify('Refresh button has been clicked!');
    },
  };
  const productTypes = [
    {
      id: 1,
      text: 'All',
    },
    {
      id: 2,
      text: 'Video Players',
    },
    {
      id: 3,
      text: 'Televisions',
    },
    {
      id: 4,
      text: 'Monitors',
    },
    {
      id: 5,
      text: 'Projectors',
    },
  ];

  const selectBoxOptions = {
    width: 140,
    items: { productTypes },
    valueExpr: 'id',
    displayExpr: 'text',
    value: productTypes[0].id,
    inputAttr: { 'aria-label': 'Categories' },
  };

  const renderLabel = () => {
    return (
      <div className="toolbar-label">
        <b>Tom&apos;s Club</b> Products
      </div>
    );
  };

  const addButtonOptions = {
    icon: 'plus',
    onClick: () => {
      notify('Add button has been clicked!');
    },
  };

  const saveButtonOptions = {
    text: 'Save',
    onClick: () => {
      notify('Save option has been clicked!');
    },
  };

  const printButtonOptions = {
    text: 'Print',
    onClick: () => {
      notify('Print option has been clicked!');
    },
  };

  const settingsButtonOptions = {
    text: 'Settings',
    onClick: () => {
      notify('Settings option has been clicked!');
    },
  };

  return (
    <div>
      <h4 className="page-title">Dashboard</h4>

      <div className="grid grid-cols-1 gap-4">
        <Toolbar
          style={{
            background: 'whitesmoke !important',
            marginBottom: '15px',
          }}
        >
          <Item
            location="before"
            widget="dxButton"
            options={backButtonOptions}
          />
          <Item
            location="before"
            widget="dxButton"
            options={refreshButtonOptions}
          />
          <Item location="center" locateInMenu="never" render={renderLabel} />
          <Item
            location="after"
            locateInMenu="auto"
            widget="dxSelectBox"
            options={selectBoxOptions}
          />
          <Item
            location="after"
            locateInMenu="auto"
            widget="dxButton"
            options={addButtonOptions}
          />
          <Item
            locateInMenu="always"
            widget="dxButton"
            options={saveButtonOptions}
          />
          <Item
            locateInMenu="always"
            widget="dxButton"
            options={printButtonOptions}
          />
          <Item
            locateInMenu="always"
            widget="dxButton"
            options={settingsButtonOptions}
          />
        </Toolbar>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <BarChart></BarChart>
        </div>
        <div>
          <StackedBarChart></StackedBarChart>
        </div>
        <div>
          <LineChart></LineChart>
        </div>
        <div>
          <PieChartComponent></PieChartComponent>
        </div>
      </div>
    </div>
  );
}
