import Contents from "./components/Contents";
import Header from "./components/Header/index";
import Search from "./components/Search/index";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <Search></Search>
      <Contents></Contents>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;
export default App;
