import styled from "styled-components";
import gitLogo from "../../images/github.png";

const ContentsContainer = styled.section`
  display: flex;
  justify-content: center;

  flex-grow: 1;

  margin-top: 1rem;
`;

const ContentsBox = styled.article`
  width: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding-top: 1rem;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 3rem;
`;

const ProfileImg = styled.div`
  height: 10rem;
  width: 10rem;

  border-radius: 10rem;

  background-image: url(${gitLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
`;

const UserName = styled.article`
  font-size: 2rem;
  color: white;
`;

const UserUrl = styled.p`
  color: white;
  margin: 0;

  border: solid 0.1rem white;
  border-radius: 2rem;
`;

const UserInfoBox = styled.div`
  height: 5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Followers = styled.article`
  display: flex;
  align-items: center;
  color: white;
`;

const FollowersTitle = styled.h2`
  margin: 0;
  margin-right: 1rem;
  font-size: 2rem;
`;
const FollowersText = styled.strong`
  font-size: 1.5rem;
`;

const Followings = styled.article`
  display: flex;
  align-items: center;
  color: white;
`;

const FollowingsTitle = styled.h2`
  margin: 0;
  margin-right: 1rem;
  font-size: 2rem;
`;

const FollowingsText = styled.strong`
  font-size: 1.5rem;
`;

const Stars = styled.article`
  display: flex;
  align-items: center;
  color: white;
`;

const StarsTitle = styled.h2`
  margin: 0;
  margin-right: 1rem;
  font-size: 2rem;
`;
const StarsText = styled.strong`
  font-size: 1.5rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;

  margin-top: 1rem;
`;

const GoRepoBtn = styled.button`
  height: 3rem;
  width: 100%;

  border-radius: 1rem;
  border: none;

  background-color: white;

  font-size: 2rem;
`;
const St = {
  ContentsContainer,
  ContentsBox,
  ProfileImg,
  UserName,
  UserUrl,
  UserInfoBox,
  Followers,
  FollowersText,
  FollowersTitle,
  Followings,
  FollowingsTitle,
  FollowingsText,
  Stars,
  StarsTitle,
  StarsText,
  BtnContainer,
  GoRepoBtn,
};

export default St;
