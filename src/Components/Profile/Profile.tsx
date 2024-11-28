import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../Services/Store";
import { fetchProfile } from "../../Services/ProfileSlice";
import {
  ProfileDetails,
  BasicDetails,
} from "../../StyledComponents/StyledProfile";
import {
  Info,
  Title,
  SubTitle,
  Text,
  Add,
} from "../../StyledComponents/StyledComponent";

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
    navigate("/profileadd");
  };
  return (
    <>
      <Container>
        <Title>Profile Details</Title>
        <ProfileDetails>
          <Info>
            <BasicDetails>
              <SubTitle>Name:</SubTitle>
              <Text> {userData.name}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Email:</SubTitle>
              <Text> {userData.email}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Mobile Number:</SubTitle>
              <Text> {userData.number}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>DOB:</SubTitle>
              <Text> {userData.date}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Gender:</SubTitle>
              <Text>{userData.gender}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Address:</SubTitle>
              <Text>{userData.address}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Passport:</SubTitle>
              <Text>{userData.passport}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Language:</SubTitle>
              <Text> {userData.language}</Text>
            </BasicDetails>
          </Info>
          <Info>
            <BasicDetails>
              <SubTitle>Base Location:</SubTitle>
              <Text> {userData.location}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Highest Education:</SubTitle>
              <Text>{userData.location}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Last Company:</SubTitle>
              <Text>{userData.location}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Skills:</SubTitle>
              <Text>{userData.skills}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Married:</SubTitle>
              <Text> {userData.married}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Father:</SubTitle>
              <Text> {userData.father}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Mother:</SubTitle>
              <Text> {userData.mother}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Siblings:</SubTitle>
              <Text> {userData.siblings}</Text>
            </BasicDetails>
          </Info>
        </ProfileDetails>
        <Add onClick={handleChange}>Click here to add profile</Add>
      </Container>
    </>
  );
};

export default Profile;
