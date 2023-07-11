export type ChartDataType = {
  startDate: string;
  endDate: string;
  timeUnit: string;
  category: string;
  keyword: string;
  device: string;
  gender: string;
  ages: string[];
};

export interface InsightResponse {
  startDate: string;
  endDate: string;
  timeUnit: string;
  results: Result[];
}

export interface Data {
  period: string;
  group: string[];
  ratio: number;
}

export interface Result {
  title: string;
  keyword: Array<string>;
  data: Data[];
}
