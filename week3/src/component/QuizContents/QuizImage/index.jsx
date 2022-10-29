import { St } from "./style";
import { ImageList, optionList } from "../../../core/imageList";
import { useEffect } from "react";

export default function QuizImage(props) {
  let { stage, clickOption } = props;

  useEffect(() => {
    optionList.sort(() => Math.random() - 0.5);
  }, [stage]);

  return (
    <St.Wrapper>
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
    </St.Wrapper>
  );
}
