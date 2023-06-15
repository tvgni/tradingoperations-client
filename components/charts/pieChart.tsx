'use client';

import PieChart, {
  Connector,
  Export,
  Label,
  Series,
  Size,
} from 'devextreme-react/pie-chart';

export default function PieChartComponent() {
  const areas = [
    {
      country: 'Russia',
      area: 12,
    },
    {
      country: 'Canada',
      area: 7,
    },
    {
      country: 'USA',
      area: 7,
    },
    {
      country: 'China',
      area: 7,
    },
    {
      country: 'Brazil',
      area: 6,
    },
    {
      country: 'Australia',
      area: 5,
    },
    {
      country: 'India',
      area: 2,
    },
    {
      country: 'Others',
      area: 55,
    },
  ];

  const pointClickHandler = (e: any) => {
    toggleVisibility(e.target);
  };

  const legendClickHandler = (e: any) => {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    toggleVisibility(item);
  };

  const toggleVisibility = (item: any) => {
    item.isVisible() ? item.hide() : item.show();
  };

  return (
    <PieChart
      id="pie"
      dataSource={areas}
      palette="Bright"
      title="Area of Countries"
      onPointClick={pointClickHandler}
      onLegendClick={legendClickHandler}
    >
      <Series argumentField="country" valueField="area">
        <Label visible={true}>
          <Connector visible={true} width={1} />
        </Label>
      </Series>

      <Size width={500} />
      <Export enabled={true} />
    </PieChart>
  );
}
