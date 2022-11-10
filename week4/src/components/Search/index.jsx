import St from "./style";
import searchIcon from "../../images/loupe.png";
export default function Contents() {
  return (
    <St.SearchBarContainer>
      <St.SearchBar>
        <St.SearchIcon src={searchIcon}></St.SearchIcon>
        <St.SearchInput placeholder="who?"></St.SearchInput>
      </St.SearchBar>
    </St.SearchBarContainer>
  );
}
