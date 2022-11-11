import styled from "styled-components";

const ContentsContainer = styled.section`
  display: flex;
  justify-content: center;

  flex-grow: 1;

  margin-top: 1rem;
  padding-bottom: 2rem;
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

const ProfileImg = styled.img`
  height: 10rem;
  width: 10rem;

  border-radius: 10rem;
  border: solid 0.2rem white;
`;

const UserName = styled.article`
  font-size: 2rem;
  color: white;
`;

const UserUrl = styled.a`
  color: white;
  margin: 0;

  border: solid 0.1rem white;
  border-radius: 2rem;

  text-decoration: none;

  padding: 0 1rem;
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

const GoRepoBtn = styled.a`
  height: 3rem;
  width: 100%;

  border-radius: 1rem;
  border: none;

  background-color: white;

  font-size: 2rem;
  text-align: center;
  color: black;

  padding-top: 0.5rem;

  text-decoration: none;
`;

const CloseBtn = styled.button`
  background-color: antiquewhite;
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
  CloseBtn,
};

export default St;
