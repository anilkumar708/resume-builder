import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BasicDetails,
  Title,
  Summery,
  Info,
  ProfileDetails,
  Container,
} from "../StyledComponents/StyledComponent";

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

export default Home;
