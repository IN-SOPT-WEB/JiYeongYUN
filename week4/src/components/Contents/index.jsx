import St from "./style";
import { useLocation, useNavigate } from "react-router-dom";

export default function Contents() {
  const location = useLocation();
  const { data } = location.state;
  const userInfo = data[0];
  const userStar = data[1];
  const navigate = useNavigate();

  function closeContents() {
    navigate(-1);
  }
  return (
    <St.ContentsContainer>
      <St.ContentsBox>
        <St.ProfileImg src={userInfo.avatar_url}></St.ProfileImg>
        <St.UserName>
          {userInfo.name} / {userInfo.login}
        </St.UserName>
        <St.UserUrl href={userInfo.html_url}>🕸{userInfo.html_url}🕸</St.UserUrl>
        <St.UserInfoBox>
          <St.Followers>
            <St.FollowersTitle>Followers</St.FollowersTitle>
            <St.FollowersText>{userInfo.followers}</St.FollowersText>
          </St.Followers>
          <St.Followings>
            <St.FollowingsTitle>Followings</St.FollowingsTitle>
            <St.FollowingsText>{userInfo.following}</St.FollowingsText>
          </St.Followings>
          <St.Stars>
            <St.StarsTitle>Stars</St.StarsTitle>
            <St.StarsText>{userStar.length}</St.StarsText>
          </St.Stars>
        </St.UserInfoBox>
        <St.BtnContainer>
          <St.GoRepoBtn href={userInfo.repos_url[0].html_url}>
            Go Repository
          </St.GoRepoBtn>
        </St.BtnContainer>
        <St.CloseBtn onClick={closeContents}>X</St.CloseBtn>
      </St.ContentsBox>
    </St.ContentsContainer>
  );
}
