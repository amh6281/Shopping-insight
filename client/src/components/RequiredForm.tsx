import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { categoryList } from "../constants/categoryList";
import { timeUnitList } from "../constants/timeUnitList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ChartDataType } from "../constants/chartDataType";
import { selectFormData } from "../redux/formRedux";

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

const RequiredForm = ({ handleChange }: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [timeUnit, setTimeUnit] = useState("");

  const formData = useSelector(selectFormData);

  useEffect(() => {
    // 초기 상태 설정
    setStartDate(new Date(formData.startDate));
    setEndDate(new Date(formData.endDate));
    setCategory(formData.category);
    setKeyword(formData.keyword);
    setTimeUnit(formData.timeUnit);
  }, [formData]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    handleChange({ target: { name: "category", value } });
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleChange({ target: { name: "keyword", value } });
  };

  const handleTimeUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    handleChange({ target: { name: "timeUnit", value } });
  };

  return (
    <Container>
      <FormGroup>
        <Label htmlFor="startDate">시작일자:</Label>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          onChange={(date: Date) =>
            handleChange(
              {
                target: {
                  name: "startDate",
                  value: date.toISOString().slice(0, 10),
                },
              },
              setStartDate(date)
            )
          }
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date("2017-08-01")}
        />
        <Label htmlFor="endDate">종료일자:</Label>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={endDate}
          onChange={(date: Date) =>
            handleChange(
              {
                target: {
                  name: "endDate",
                  value: date.toISOString().slice(0, 10),
                },
              },
              setEndDate(date)
            )
          }
          selectsEnd
          maxDate={new Date()}
        />

        <Select onChange={handleCategoryChange} value={category}>
          <option value="">카테고리 선택</option>
          {categoryList.map((category) => (
            <option key={category.cat_id} value={category.cat_id}>
              {category.title}
            </option>
          ))}
        </Select>

        <Label htmlFor="keyword">키워드:</Label>
        <Input
          id="keyword"
          onChange={handleKeywordChange}
          placeholder={keyword ? keyword : "키워드"}
        />

        <Select onChange={handleTimeUnitChange} value={timeUnit}>
          <option value="">카테고리 선택</option>
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
