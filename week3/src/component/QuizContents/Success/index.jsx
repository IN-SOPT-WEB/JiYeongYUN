import { St } from "./style";
import successImg from "../../../images/success.jpeg";

export default function Success() {
  return (
    <>
      <St.SuccessImg src={successImg}></St.SuccessImg>
      <St.SuccessText>당신은 이제 주함 마스터</St.SuccessText>
    </>
  );
}
