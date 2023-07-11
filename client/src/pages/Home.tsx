import Chart from "../components/Chart";
import OptionForm from "../components/OptionForm";
import RequiredForm from "../components/RequiredForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { selectChartData } from "../redux/chartDataRedux";
import { getChartData } from "../redux/apiCalls";
import { ChartDataType } from "../constants/chartDataType";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const fetchedChartData = useSelector(selectChartData);

  const [requiredFormData, setRequiredFormData] = useState<any>({});
  const [optionFormData, setOptionFormData] = useState<any>({});
  const [selectedAges, setSelectedAges] = useState<string[]>([]);

  const handleRequiredFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setRequiredFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setOptionFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const params = {
        startDate: requiredFormData.startDate,
        endDate: requiredFormData.endDate,
        category: requiredFormData.category,
        keyword: requiredFormData.keyword,
        timeUnit: requiredFormData.timeUnit,
        device: optionFormData.device,
        gender: optionFormData.gender,
        ages: selectedAges,
      };
      dispatch(getChartData(params));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <RequiredForm handleChange={handleRequiredFormChange} />
      <OptionForm
        handleChange={handleRequiredFormChange}
        selectedAges={selectedAges}
        setSelectedAges={setSelectedAges}
      />
      <button onClick={handleClick}>조회</button>
      {fetchedChartData && <Chart />}
    </div>
  );
};

export default Home;
