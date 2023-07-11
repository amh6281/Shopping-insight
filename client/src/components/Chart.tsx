import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { styled } from "styled-components";
import { ChartDataType, Result } from "../constants/chartDataType";
import { useSelector } from "react-redux";
import { selectChartData } from "../redux/chartDataRedux";
import { RootState } from "../redux/store";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//      10대: 3.66
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 2200,
//     amt: 2200,
//   },

//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 2100,
//     amt: 2100,
//   },

//   {
//     name: "Page D",
//     uv: 4500,
//     pv: 2500,
//     amt: 2500,
//   },
//   {
//     name: "Page E",
//     uv: 3200,
//     pv: 2300,
//     amt: 2300,
//   },
// ];

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Chart = () => {
  const results = useSelector<RootState, Result[]>(
    (state) => state.chartData.results
  );

  const data = results.length > 0 ? results[0].data : [];

  interface TransformedDataItem {
    name: string;
    [group: string]: number | string;
  }

  // data 객체의 구조 변경
  const transformedData: { [period: string]: TransformedDataItem } =
    data.reduce((result, entry) => {
      const { period, ratio, group } = entry;
      if (!result.hasOwnProperty(period)) {
        result[period] = { name: period };
      }
      if (Array.isArray(group)) {
        for (const g of group) {
          result[period][g] = ratio;
        }
      } else {
        result[period][group] = ratio;
      }
      return result;
    }, {} as { [period: string]: TransformedDataItem });

  console.log(Object.values(transformedData));

  return (
    <Container>
      <AreaChart
        width={1000}
        height={400}
        data={Object.values(transformedData)}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="10"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="20"
          stroke="#89e5d1"
          fillOpacity={1}
          fill="url(#colorUv"
        />
        <Area
          type="monotone"
          dataKey="30"
          stroke="#d4f684"
          fillOpacity={1}
          fill="url(#colorUv"
        />
        <Area
          type="monotone"
          dataKey="40"
          stroke="#ff9310"
          fillOpacity={1}
          fill="url(#colorUv"
        />
        <Area
          type="monotone"
          dataKey="50"
          stroke="#fc3d3a"
          fillOpacity={1}
          fill="url(#colorUv"
        />
      </AreaChart>
    </Container>
  );
};

export default Chart;
