import styled from "styled-components";

const SearchBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  height: 3rem;
  width: 40%;

  background-color: white;

  border-radius: 2rem;

  display: flex;
  align-items: center;
`;

const SearchIcon = styled.img`
  height: 1rem;
  width: 1rem;

  margin-left: 2rem;
`;

const SearchInput = styled.input`
  height: 2rem;
  width: 80%;

  font-size: 1rem;

  border: none;

  margin-left: 0.5rem;

  :focus {
    outline: none;
  }
`;

const HistoryBox = styled.ul`
  width: 35%;

  background-color: white;

  margin: 0;
  padding: 0;

  border: solid 0.1rem lightgray;
  border-top: none;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: solid 0.1rem lightgray;
`;

const HistoryList = styled.li`
  height: 2rem;

  list-style: none;

  padding: 0.5rem 0 0 1rem;
`;

const HistoryDelete = styled.button`
  height: 60%;

  background-color: transparent;

  border: none;

  color: gray;
`;

const St = {
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  SearchInput,
  HistoryBox,
  ListContainer,
  HistoryList,
  HistoryDelete,
};

export default St;
