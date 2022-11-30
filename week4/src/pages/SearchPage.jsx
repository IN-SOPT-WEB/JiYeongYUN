import Contents from "../components/Contents";
import Header from "../components/Header/index";
import Search from "../components/Search/index";
import styled from "styled-components";
import bgImg from "../images/gitbg.jpeg";
import { useRef, useState } from "react";
import { getUserInfo, getUserStar } from "../core/api/constants";
import { useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const [searchHistory, setSearchHistory] = useState(new Set());
  const [isFocused, setIsFocused] = useState(false);
  const historyTarget = useRef(null);

  const navigate = useNavigate();

  function changeFocus() {
    setIsFocused(true);
  }

  async function getData(e) {
    if (e.type === "keydown" && e.key === "Enter") {
      const infoData = await getUserInfo(e.target.value);
      const starData = await getUserStar(e.target.value);
      setData([infoData, starData]);
      addHistory(e.target.value);
      navigate(`:${e.target.value}`, {
        state: {
          data: [infoData, starData],
        },
      });
    }
  }

  async function getHistoryData(e) {
    const infoData = await getUserInfo(e.target.innerText);
    const starData = await getUserStar(e.target.innerText);
    setData([infoData, starData]);
    addHistory(e.target.innerText);
    navigate(`:${e.target.innerText}`, {
      state: {
        data: [infoData, starData],
      },
    });
  }

  function addHistory(word) {
    setSearchHistory((prev) => prev.add(word));
  }

  function closeHistoryBox(e) {
    if (e.target === historyTarget.current || isFocused === false) {
      return;
    }
    setIsFocused(false);
  }

  function deleteHistory(word) {
    setSearchHistory((prev) => prev.delete(word));
  }

  return (
    <Wrapper onClick={closeHistoryBox}>
      <Header></Header>
      <Search
        getHistoryData={getHistoryData}
        searchHistory={searchHistory}
        getData={getData}
        isFocused={isFocused}
        changeFocus={changeFocus}
        historyTarget={historyTarget}
        deleteHistory={deleteHistory}></Search>
      {data && <Contents data={data}></Contents>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  height: 100vh;

  background-image: url(${bgImg});
  margin: 0;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
export default App;
