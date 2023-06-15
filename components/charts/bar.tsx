'use client';
import Chart, { Series } from 'devextreme-react/chart';

export default function BarChart() {
  const dataSource = [
    {
      day: 'Monday',
      oranges: 3,
    },
    {
      day: 'Tuesday',
      oranges: 2,
    },
    {
      day: 'Wednesday',
      oranges: 3,
    },
    {
      day: 'Thursday',
      oranges: 4,
    },
    {
      day: 'Friday',
      oranges: 6,
    },
    {
      day: 'Saturday',
      oranges: 11,
    },
    {
      day: 'Sunday',
      oranges: 4,
    },
  ];

  return (
    <Chart id="chart" dataSource={dataSource}>
      <Series
        valueField="oranges"
        argumentField="day"
        name="My oranges"
        type="bar"
        color="#ffaa66"
      />
    </Chart>
  );
}
