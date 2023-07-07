import styled from "styled-components";

const Form = () => {
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

  return (
    <Container>
      <FormGroup>
        <Label htmlFor="startDate">시작일자:</Label>
        <Input id="startDate" />
        <Label htmlFor="endDate">종료일자:</Label>
        <Input id="endDate" />
        <Label htmlFor="category">카테고리:</Label>
        <Input id="category" />
        <Label htmlFor="keyword">키워드:</Label>
        <Input id="keyword" />
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
