import styled from "styled-components";
import { useState } from "react";
import { deviceList } from "../constants/deviceList";
import { genderList } from "../constants/genderList";
import { ageList } from "../constants/ageList";
import React from "react";

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

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: #53c28b;
  border-radius: 5px;
  color: white;
  border: none;
  font-weight: 500;
`;

const OptionForm = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedAges, setSelectedAges] = useState<string[]>([]);

  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDevice(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const age = event.target.value;
    if (selectedAges.includes(age)) {
      setSelectedAges(
        selectedAges.filter((selectedAge) => selectedAge !== age)
      );
    } else {
      setSelectedAges([...selectedAges, age]);
    }
  };
  console.log(selectedAges);
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
        <Select value={selectedGender} onChange={handleGenderChange}>
          <option value="">gender</option>
          {genderList.map((gender) => (
            <option key={gender.gender} value={gender.gender}>
              {gender.title}
            </option>
          ))}
        </Select>
        <Select value={selectedDevice} onChange={handleDeviceChange}>
          <option value="">Device</option>
          {deviceList.map((device) => (
            <option key={device.device} value={device.device}>
              {device.title}
            </option>
          ))}
        </Select>
        <Button>조회</Button>
      </FormGroup>
    </Container>
  );
};

export default OptionForm;
