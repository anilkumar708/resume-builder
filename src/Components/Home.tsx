import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const profileData = {
    name: "",
    email: "",
    number: "",
    date: "",
    gender: "",
    address: "",
    passport: "",
    location: "",
    summery: "",
    married: "",
    siblings: "",
    father: "",
    mother: "",
    language: "",
    skills: "",
  };
  const [userData, setUserData] = useState(profileData);
  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    console.log("check the storeddata", storedData);
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <Container>
        <Typography variant="h6">Profile Information</Typography>
        <ProfileDetails>
          <Info>
            <BasicDetails>
              <Title>Name:</Title>
              <Typography> {userData.name}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Email:</Title>
              <Typography> {userData.email}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Mobile Number:</Title>
              <Typography> {userData.number}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Base Location:</Title>
              <Typography> {userData.location}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Highest Education:</Title>
              <Typography>{userData.location}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Last Company:</Title>
              <Typography>{userData.location}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Skills:</Title>
              <Typography>{userData.skills}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Language:</Title>
              <Typography> {userData.language}</Typography>
            </BasicDetails>
          </Info>
          <Info>
            <Summery>
              <Title>Profile Summery:</Title>
              <Typography>{userData.summery}</Typography>
            </Summery>
          </Info>
        </ProfileDetails>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: unset;
  width: 100%;
`;
const ProfileDetails = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const Info = styled.aside`
  border: 1px solid black;
  width: 80%;
  padding: 10px;
`;
const Summery = styled.div`
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid lightblue;
`;
const BasicDetails = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid lightblue;
  &:nth-child(odd) {
    background-color: #f1f1f1;
  }
`;
const Title = styled(Typography)`
  font-size: 16px;
  padding-right: 5px;
  font-weight: 600;
`;

export default Home;
