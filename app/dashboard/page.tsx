import BarChart from '@/components/charts/bar';
import LineChart from '@/components/charts/lineChart';
import PieChartComponent from '@/components/charts/pieChart';
import StackedBarChart from '@/components/charts/stackedBar';

export default function dashboarpage() {
  return (
    <div>
      <h4 className="page-title">Dashboard</h4>

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
