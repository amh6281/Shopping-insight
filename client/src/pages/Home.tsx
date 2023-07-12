import Chart from "../components/Chart";
import OptionForm from "../components/OptionForm";
import RequiredForm from "../components/RequiredForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { resetChartData, selectChartData } from "../redux/chartDataRedux";
import { getChartData } from "../redux/apiCalls";
import { ChartDataType } from "../constants/chartDataType";
import { resetFormData } from "../redux/formRedux";

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
      console.log(params);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChartReset = () => {
    dispatch(resetChartData());
  };

  const handleFormReset = () => {
    dispatch(resetFormData());
  };

  return (
    <div>
      <RequiredForm handleChange={handleRequiredFormChange} />
      <OptionForm
        handleChange={handleOptionFormChange}
        selectedAges={selectedAges}
        setSelectedAges={setSelectedAges}
      />
      <button onClick={handleClick}>조회</button>
      <button onClick={handleChartReset}>초기화</button>
      <button onClick={handleFormReset}>초기화</button>
      {fetchedChartData && <Chart />}
    </div>
  );
};

export default Home;
