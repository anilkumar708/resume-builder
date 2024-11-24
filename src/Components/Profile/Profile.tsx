import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../Services/Store";
import { fetchProfile } from "../../Services/ProfileSlice";

const Profile = () => {
  const profileData = {
    name: "",
    email: "",
    number: "",
    date: "",
    gender: "",
    address: "",
    pincode: "",
    passport: "",
    state: "",
    location: "",
    summery: "",
    married: "",
    siblings: "",
    father: "",
    mother: "",
    language: "",
    skills: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [userData, setUserData] = useState(profileData);
  const { post, loading, error } = useSelector(
    (state: RootState) => state.postProfile
  );
  console.log("profile data", post);
  // Load data from localStorage when the component mounts
  useEffect(() => {
    dispatch(fetchProfile());
    const storedData = localStorage.getItem("data");
    console.log("check the storeddata", storedData);
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, [dispatch]);
  const handleChange = () => {
    navigate("/profile");
  };
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
              <Title>DOB:</Title>
              <Typography> {userData.date}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Gender:</Title>
              <Typography>{userData.gender}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Address:</Title>
              <Typography>{userData.address}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Passport:</Title>
              <Typography>{userData.passport}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Language:</Title>
              <Typography> {userData.language}</Typography>
            </BasicDetails>
          </Info>
          <Info>
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
              <Title>Married:</Title>
              <Typography> {userData.married}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Father:</Title>
              <Typography> {userData.father}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Mother:</Title>
              <Typography> {userData.mother}</Typography>
            </BasicDetails>
            <BasicDetails>
              <Title>Siblings:</Title>
              <Typography> {userData.siblings}</Typography>
            </BasicDetails>
          </Info>
        </ProfileDetails>
        <Add onClick={handleChange}>Add Details</Add>
      </Container>
    </>
  );
};
const Container = styled.section`
  display: unset; /* Enable flexbox */
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
const Add = styled(Button)`
  background-color: #d8dde1;
  margin-top: 10px;
`;

export default Profile;
