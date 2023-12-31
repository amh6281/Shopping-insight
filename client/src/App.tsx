import { styled } from "styled-components";
import Home from "./pages/Home";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const App = (): JSX.Element => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App;
