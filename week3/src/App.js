import styled from "styled-components";
import Header from "./component/Header";
import QuizContents from "./component/QuizContents";
import snoopy from "../src/images/snoopy.png";

function App() {
  return (
    <Root>
      <Header />
      <QuizContents />
    </Root>
  );
}

const Root = styled.body`
  background-color: lightcoral;
  background-image: url(${snoopy});
  background-size: 15%;

  height: 100vh;
`;

export default App;
