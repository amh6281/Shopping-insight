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

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `;

  const Title = styled.h2`
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
      <Wrapper>
        <Title>시작일자:</Title>
        <Input />
        <Title>종료일자:</Title>
        <Input />
        <Title>카테고리:</Title>
        <Input />
        <Title>키워드:</Title>
        <Input />
      </Wrapper>
      <Wrapper>
        <Select>
          <option>timeUnit</option>
          <option>일간</option>
          <option>주간</option>
          <option>월간</option>
        </Select>
        <Select>
          <option>age</option>
          <option>10대</option>
          <option>20대</option>
          <option>30대</option>
          <option>40대</option>
          <option>50대</option>
        </Select>
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
      </Wrapper>
    </Container>
  );
};

export default Form;
