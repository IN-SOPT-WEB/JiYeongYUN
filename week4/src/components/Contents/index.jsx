import St from "./style";

export default function Contents() {
  return (
    <St.ContentsContainer>
      <St.ContentsBox>
        <St.ProfileImg></St.ProfileImg>
        <St.UserName>yunjiyeong / NaveOWO</St.UserName>
        <St.UserUrl>🕸where?🕸</St.UserUrl>
        <St.UserInfoBox>
          <St.Followers>
            <St.FollowersTitle>Followers</St.FollowersTitle>
            <St.FollowersText>56</St.FollowersText>
          </St.Followers>
          <St.Followings>
            <St.FollowingsTitle>Followings</St.FollowingsTitle>
            <St.FollowingsText>56</St.FollowingsText>
          </St.Followings>
          <St.Stars>
            <St.StarsTitle>Stars</St.StarsTitle>
            <St.StarsText>56</St.StarsText>
          </St.Stars>
        </St.UserInfoBox>
        <St.BtnContainer>
          <St.GoRepoBtn>Go Repository</St.GoRepoBtn>
        </St.BtnContainer>
      </St.ContentsBox>
    </St.ContentsContainer>
  );
}
