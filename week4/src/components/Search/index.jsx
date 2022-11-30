import St from "./style";
import searchIcon from "../../images/loupe.png";

export default function Search(props) {
  const {
    getData,
    searchHistory,
    getHistoryData,
    isFocused,
    changeFocus,
    historyTarget,
    deleteHistory,
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
            <St.ListContainer>
              <St.HistoryList
                ref={historyTarget}
                onClick={getHistoryData}
                key={index}>
                {item}
              </St.HistoryList>
              <St.HistoryDelete
                onClick={() => {
                  deleteHistory(item);
                }}>
                X
              </St.HistoryDelete>
            </St.ListContainer>
          ))}
        </St.HistoryBox>
      )}
    </St.SearchBarContainer>
  );
}
