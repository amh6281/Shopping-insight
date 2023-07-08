import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { categoryList } from "../categoryList";

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

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
`;

const CheckboxInput = styled.input`
  margin-right: 15px;
`;

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: #53c28b;
  border-radius: 5px;
  color: white;
  border: none;
  font-weight: 500;
`;

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(startDate.toISOString().slice(0, 10));

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [keyword, setKeyword] = useState<string>("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
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
      </FormGroup>
      <FormGroup>
        <Select>
          <option>timeUnit</option>
          <option>일간</option>
          <option>주간</option>
          <option>월간</option>
        </Select>
        <CheckboxGroup>
          <CheckboxLabel htmlFor="age10">10대</CheckboxLabel>
          <CheckboxInput type="checkbox" id="age10" />
          <CheckboxLabel htmlFor="age20">20대</CheckboxLabel>
          <CheckboxInput type="checkbox" id="age20" />
          <CheckboxLabel htmlFor="age30">30대</CheckboxLabel>
          <CheckboxInput type="checkbox" id="age30" />
          <CheckboxLabel htmlFor="age40">40대</CheckboxLabel>
          <CheckboxInput type="checkbox" id="age40" />
          <CheckboxLabel htmlFor="age50">50대</CheckboxLabel>
          <CheckboxInput type="checkbox" id="age50" />
        </CheckboxGroup>
        <Select>
          <option>gender</option>
          <option>m</option>
          <option>f</option>
        </Select>
        <Select>
          <option>device</option>
          <option>pc</option>
          <option>mo</option>
        </Select>
        <Button>조회</Button>
      </FormGroup>
    </Container>
  );
};

export default Form;
