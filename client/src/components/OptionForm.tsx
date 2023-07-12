import styled from "styled-components";
import { useState, useEffect } from "react";
import { deviceList } from "../constants/deviceList";
import { genderList } from "../constants/genderList";
import { ageList } from "../constants/ageList";
import React from "react";
import { selectFormData } from "../redux/formRedux";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
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

const OptionForm = ({ handleChange, selectedAges, setSelectedAges }: any) => {
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");

  const formData = useSelector(selectFormData);

  useEffect(() => {
    // 초기 상태 설정
    if (formData.startDate) {
      setSelectedDevice(formData.device);
      setSelectedGender(formData.gender);
      setSelectedAges(formData.ages);
    }
  }, [formData]);

  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    handleChange(
      { target: { name: "device", value } },
      setSelectedDevice(value)
    );
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    handleChange(
      { target: { name: "gender", value } },
      setSelectedGender(value)
    );
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const age = event.target.value;
    if (selectedAges.includes(age)) {
      setSelectedAges(
        selectedAges.filter((selectedAge: string) => selectedAge !== age)
      );
    } else {
      setSelectedAges([...selectedAges, age]);
    }
  };

  return (
    <Container>
      <FormGroup>
        <CheckboxGroup>
          {ageList.map((age) => (
            <React.Fragment key={age.age}>
              <CheckboxLabel
                htmlFor={`age${age.age}`}
              >{`${age.age}대`}</CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                id={`age${age}`}
                value={age.age}
                checked={selectedAges.includes(age.age)}
                onChange={handleAgeChange}
              />
            </React.Fragment>
          ))}
        </CheckboxGroup>

        <Select onChange={handleGenderChange} value={selectedGender}>
          <option value="">성별</option>
          {genderList.map((gender) => (
            <option key={gender.gender} value={gender.gender}>
              {gender.title}
            </option>
          ))}
        </Select>

        <Select onChange={handleDeviceChange} value={selectedDevice}>
          <option value="">device</option>
          {deviceList.map((device) => (
            <option key={device.device} value={device.device}>
              {device.title}
            </option>
          ))}
        </Select>
      </FormGroup>
    </Container>
  );
};

export default OptionForm;
