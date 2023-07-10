import Chart from "../components/Chart";
import OptionForm from "../components/OptionForm";
import RequiredForm from "../components/RequiredForm";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [chartData, setChartData] = useState<any[]>([]);
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
      const response = await axios.post("http://localhost:8800/api/shopping", {
        startDate: requiredFormData.startDate,
        endDate: requiredFormData.endDate,
        category: requiredFormData.category,
        keyword: requiredFormData.keyword,
        timeUnit: requiredFormData.timeUnit,
        device: optionFormData.device,
        gender: optionFormData.gender,
        age: selectedAges,
      });
      setChartData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(chartData);
  return (
    <div>
      <RequiredForm handleChange={handleRequiredFormChange} />
      <OptionForm
        handleChange={handleRequiredFormChange}
        selectedAges={selectedAges}
        setSelectedAges={setSelectedAges}
      />
      <button onClick={handleClick}>조회</button>
      {open && <Chart />}
    </div>
  );
};

export default Home;
