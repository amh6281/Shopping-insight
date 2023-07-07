import { styled } from "styled-components";
import Home from "./pages/Home";

const App = (): JSX.Element => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
  `;

  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App;
