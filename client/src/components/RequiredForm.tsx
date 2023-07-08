import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { categoryList } from "../constants/categoryList";
import { timeUnitList } from "../constants/timeUnitList";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  margin-right: 20px;
  color: black;
  border-radius: 3px;
  padding: 10px;
`;

const Select = styled.select`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  border-radius: 0.25em;
`;

const RequiredForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate.toISOString().slice(0, 10));

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [keyword, setKeyword] = useState<string>("");

  const [selectedTimeUnit, setSelectedTimeUnit] = useState<string>("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleTimeUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTimeUnit(event.target.value);
  };

  return (
    <Container>
      <FormGroup>
        <Label htmlFor="startDate">시작일자:</Label>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date("2017-08-01")}
        />
        <Label htmlFor="endDate">종료일자:</Label>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          maxDate={new Date()}
        />
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">카테고리 선택</option>
          {categoryList.map((category) => (
            <option key={category.cat_id} value={category.cat_id}>
              {category.title}
            </option>
          ))}
        </Select>

        <Label htmlFor="keyword">키워드:</Label>
        <Input id="keyword" onChange={handleKeywordChange} />

        <Select value={selectedTimeUnit} onChange={handleTimeUnitChange}>
          <option value="">timeUnit</option>
          {timeUnitList.map((timeUnit) => (
            <option key={timeUnit.unit} value={timeUnit.unit}>
              {timeUnit.title}
            </option>
          ))}
        </Select>
      </FormGroup>
    </Container>
  );
};

export default RequiredForm;
