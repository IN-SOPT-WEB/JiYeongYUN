import Contents from "./components/Contents";
import Header from "./components/Header/index";
import Search from "./components/Search/index";
import styled from "styled-components";
import bgImg from "./images/gitbg.jpeg";
import { useRef, useState } from "react";
import { getUserInfo, getUserStar } from "./core/api/constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  // const [data, setData] = useState(null);
  // const [searchHistory, setSearchHistory] = useState(new Set());
  // const [isFocused, setIsFocused] = useState(false);
  // function changeFocus() {
  //   setIsFocused(true);
  // }

  // const historyTarget = useRef(null);

  // async function getData(e) {
  //   if (e.type === "keydown" && e.key === "Enter") {
  //     const infoData = await getUserInfo(e.target.value);
  //     const starData = await getUserStar(e.target.value);
  //     setData([infoData, starData]);
  //     addHistory(e.target.value);
  //   }
  // }

  // async function getHistoryData(e) {
  //   const infoData = await getUserInfo(e.target.innerText);
  //   const starData = await getUserStar(e.target.innerText);
  //   setData([infoData, starData]);
  //   addHistory(e.target.innerText);
  // }

  // function addHistory(word) {
  //   setSearchHistory((prev) => prev.add(word));
  // }

  // function closeHistoryBox(e) {
  //   if (e.target === historyTarget.current || isFocused === false) {
  //     return;
  //   }
  //   setIsFocused(false);
  // }

  // function deleteHistory(word) {
  //   setSearchHistory((prev) => prev.delete(word));
  // }

  return (
    // <Wrapper onClick={closeHistoryBox}>
    //   <Header></Header>
    //   <Search
    //     getHistoryData={getHistoryData}
    //     searchHistory={searchHistory}
    //     getData={getData}
    //     isFocused={isFocused}
    //     changeFocus={changeFocus}
    //     historyTarget={historyTarget}
    //     deleteHistory={deleteHistory}></Search>
    //   {data && <Contents data={data}></Contents>}
    // </Wrapper>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/search" element={<SearchPage />}>
          <Route path=":username" element={<Contents />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
