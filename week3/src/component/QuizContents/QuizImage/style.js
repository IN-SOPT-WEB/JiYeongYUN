import styled from "styled-components";

export const St = {
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
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 3rem;

    padding: 0;
    margin: 0;

    background-color: pink;
  `,

  OptionItem: styled.button`
    list-style: none;

    /* height: 1.5rem; */

    margin: 0 1rem;
    padding: 0 1rem;

    background-color: pink;
    color: white;

    font-size: 0.8rem;

    display: flex;
    align-items: center;

    border: solid 0.2rem white;

    cursor: pointer;
  `,
};
