import styled from "styled-components";

export const St = {
  Wrapper: styled.div`
    display: flex;
  `,

  ImageContainer: styled.div`
    height: 25rem;
    width: 25rem;

    border: solid 0.5rem red;

    overflow: hidden;
  `,

  Image: styled.img`
    width: 25rem;
  `,

  OptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    /* width: 100%;
    height: 3rem; */

    padding: 0;
    margin: 0;
  `,

  OptionItem: styled.button`
    list-style: none;

    /* height: 1.5rem; */

    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;

    color: black;
    background-color: white;

    font-size: 1rem;

    display: flex;
    align-items: center;

    border: solid 0.2rem red;

    cursor: pointer;
  `,
};
