import styled from "styled-components";
import MyScore from "./MyScore";
import QuizImage from "./QuizImage";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { ImageList, optionList } from "../../core/imageList";
import Success from "./Success";
import Modal from "../Modal";

export default function QuizContents() {
  const LAST_QUIZ = ImageList.length - 1;
  const [stage, setStage] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    optionList.sort(() => Math.random() - 0.5);
  }, [isSuccess]);

  const clickOption = (selected) => {
    if (ImageList[stage].answer === selected) {
      if (stage === LAST_QUIZ) {
        setIsSuccess(true);
      } else {
        setIsCorrect(true);
        setStage((prev) => prev + 1);
      }
    } else {
      setIsOpen(true);
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCorrect(false);
    }, 2000);
  }, [stage]);

  const retryGame = () => {
    setStage(0);
    setIsSuccess(false);
  };

  return !isSuccess ? (
    <>
      <ContentsWrapper>
        <MyScore stage={stage} />
        <QuizImage
          stage={stage}
          clickOption={clickOption}
          isCorrect={isCorrect}
          optionList={optionList}
        />
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
`;
