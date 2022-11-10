import styled from "styled-components";

const SearchBarContainer = styled.section`
  display: flex;
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
  border: none;
  height: 2rem;

  font-size: 1rem;

  width: 80%;
  margin-left: 0.5rem;

  :focus {
    outline: none;
  }
`;

const St = { SearchBarContainer, SearchBar, SearchIcon, SearchInput };

export default St;
