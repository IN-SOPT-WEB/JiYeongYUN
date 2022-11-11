import St from "./style";
import searchIcon from "../../images/loupe.png";
import { useState } from "react";

export default function Search(props) {
  const {
    getData,
    searchHistory,
    getHistoryData,
    isFocused,
    changeFocus,
    historyTarget,
  } = props;

  return (
    <St.SearchBarContainer>
      <St.SearchBar>
        <St.SearchIcon src={searchIcon}></St.SearchIcon>
        <St.SearchInput
          placeholder="Github Name"
          onKeyDown={getData}
          onClick={changeFocus}
          ref={historyTarget}></St.SearchInput>
      </St.SearchBar>
      {isFocused && (
        <St.HistoryBox>
          {[...searchHistory].map((item, index) => (
            <St.HistoryList
              ref={historyTarget}
              onClick={getHistoryData}
              key={index}>
              {item}
            </St.HistoryList>
          ))}
        </St.HistoryBox>
      )}
    </St.SearchBarContainer>
  );
}
