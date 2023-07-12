import Chart from "../components/Chart";
import OptionForm from "../components/OptionForm";
import RequiredForm from "../components/RequiredForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { resetChartData, selectChartData } from "../redux/chartDataRedux";
import { getChartData } from "../redux/apiCalls";
import { resetFormData } from "../redux/formRedux";
import { styled } from "styled-components";

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

const Button = styled.button`
  width: 110px;
  padding: 10px;
  cursor: pointer;
  background-color: #53c28b;
  border: none;
  border-radius: 5px;
  color: #eee;
`;

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
      <BtnWrapper>
        <Button onClick={handleClick}>조회</Button>
        <Button onClick={handleChartReset}>차트 초기화</Button>
        <Button onClick={handleFormReset}>입력값 초기화</Button>
      </BtnWrapper>
      {fetchedChartData && <Chart />}
    </div>
  );
};

export default Home;
