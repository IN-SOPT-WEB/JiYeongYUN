import { St } from "./style";
import { ImageList } from "../../../core/imageList";

export default function QuizImage(props) {
  let { stage, clickOption } = props;
  return (
    <>
      <St.ImageContainer>
        <St.Image src={ImageList[stage].img} />
      </St.ImageContainer>
      <St.OptionWrapper>
        {ImageList.map((item, index) => {
          return (
            <St.OptionItem key={index} onClick={() => clickOption(item.answer)}>
              {item.answer}
            </St.OptionItem>
          );
        })}
      </St.OptionWrapper>
    </>
  );
}
