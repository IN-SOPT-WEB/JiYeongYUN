import { St } from "./style";
import { ImageList } from "../../../core/imageList";
import snoopyImg from "../../../images/snoopy.png";

export default function QuizImage(props) {
  let { stage, clickOption, isCorrect, optionList } = props;

  return (
    <St.Wrapper>
      <St.SnoopyImage src={snoopyImg} isCorrect={isCorrect}></St.SnoopyImage>
      <St.ImageContainer>
        <St.Image src={ImageList[stage].img} />
      </St.ImageContainer>
      <St.OptionWrapper>
        {optionList.map((item, index) => {
          return (
            <St.OptionItem key={index} onClick={() => clickOption(item)}>
              {item}
            </St.OptionItem>
          );
        })}
      </St.OptionWrapper>
      <St.SnoopyImage src={snoopyImg} isCorrect={isCorrect}></St.SnoopyImage>
    </St.Wrapper>
  );
}
