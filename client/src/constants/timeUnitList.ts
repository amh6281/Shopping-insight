interface TimeUnit {
  unit: string;
  title: string;
}

export const timeUnitList: TimeUnit[] = [
  {
    unit: "date",
    title: "일간",
  },
  {
    unit: "week",
    title: "주간",
  },
  {
    unit: "month",
    title: "월간",
  },
];
