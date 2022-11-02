import styled from "styled-components";
import MyScore from "./MyScore";
import QuizImage from "./QuizImage";
import Footer from "./Footer";
import { useState } from "react";
import { ImageList } from "../../core/imageList";
import Success from "./Success";
import snoopy from "../../images/snoopy.png";
import Modal from "../Modal";

export default function QuizContents() {
  const LAST_QUIZ = ImageList.length - 1;
  const [stage, setStage] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);

  const checkAnswer = (selected) => {};

  const clickOption = (selected) => {
    if (ImageList[stage].answer === selected) {
      if (stage === LAST_QUIZ) {
        setIsSuccess(true);
      } else {
        setStage((prev) => prev + 1);
        setIsOpen(false);
      }
    } else {
      setIsOpen(true);
    }
  };

  const retryGame = () => {
    setStage(0);
    setIsSuccess(false);
  };

  return !isSuccess ? (
    <>
      <ContentsWrapper>
        <MyScore stage={stage} />
        <QuizImage stage={stage} clickOption={clickOption} />
        <Footer retryGame={retryGame} />
      </ContentsWrapper>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  ) : (
    <>
      <ContentsWrapper>
        <Success />
        <Footer retryGame={retryGame} />
      </ContentsWrapper>
    </>
  );
}

const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${snoopy});
  background-size: 20%;
`;
