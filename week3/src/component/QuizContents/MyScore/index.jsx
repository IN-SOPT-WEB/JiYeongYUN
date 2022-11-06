import { St } from "./style";

export default function MyScore(props) {
  const { stage } = props;
  return (
    <St.ScoreContainer>
      <St.ScoreText>{stage}</St.ScoreText>
    </St.ScoreContainer>
  );
}
