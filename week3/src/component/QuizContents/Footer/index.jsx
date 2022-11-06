import { St } from "./style";

export default function Footer(props) {
  const { retryGame } = props;
  return (
    <St.ButtonContainer>
      <St.RetryButton onClick={retryGame}>Retry</St.RetryButton>
    </St.ButtonContainer>
  );
}
