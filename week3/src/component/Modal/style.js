import styled from "styled-components";

export const St = {
  ModalContainer: styled.section`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    height: 100vh;
    width: 100%;

    background-color: rgb(0, 0, 0, 0.8);
  `,

  ModalBox: styled.article`
    height: 25rem;
    width: 25rem;

    background-color: beige;

    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
