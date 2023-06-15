'use client';

import Chart, {
  CommonSeriesSettings,
  Export,
  Legend,
  Series,
  Title,
  Tooltip,
  ValueAxis,
} from 'devextreme-react/chart';

export default function StackedBarChart() {
  const customizeTooltip = (arg: any) => {
    return {
      text: `${arg.seriesName} years: ${arg.valueText}`,
    };
  };

  const dataSource = [
    {
      state: 'Germany',
      young: 5.3,
      middle: 26,
      older: 8,
    },
    {
      state: 'Japan',
      young: 6.45,
      middle: 30.5,
      older: 11.22,
    },
    {
      state: 'Russia',
      young: 12.56,
      middle: 45.5,
      older: 6.5,
    },
    {
      state: 'USA',
      young: 32,
      middle: 87,
      older: 15,
    },
  ];

  return (
    <Chart id="chart" title="Male Age Structure" dataSource={dataSource}>
      <CommonSeriesSettings argumentField="state" type="stackedBar" />
      <Series valueField="young" name="0-14" />
      <Series valueField="middle" name="15-64" />
      <Series valueField="older" name="65 and older" />
      <ValueAxis position="right">
        <Title text="millions" />
      </ValueAxis>
      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
        itemTextPosition="top"
      />
      <Export enabled={true} />
      <Tooltip
        enabled={true}
        location="edge"
        customizeTooltip={customizeTooltip}
      />
    </Chart>
  );
}
