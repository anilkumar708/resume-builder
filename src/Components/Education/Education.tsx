import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  BasicDetails,
  Info,
  ProfileDetails,
  Title,
  SubTitle,
  Text,
  Add,
} from "../../StyledComponents/StyledComponent";

const Education = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/educationadd");
  };
  return (
    <>
      <Container>
        <Title>Education Details</Title>
        <ProfileDetails>
          <Info>
            <SubTitle style={{ textAlign: "center" }}>SSC</SubTitle>
            <BasicDetails>
              <SubTitle>Name:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Place:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Percentage:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Date:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
          </Info>
          <Info>
            <SubTitle style={{ textAlign: "center" }}>PUC</SubTitle>
            <BasicDetails>
              <SubTitle>Name:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Place:</SubTitle>
              <Text>{}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Percentage:</SubTitle>
              <Text>{}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Date:</SubTitle>
              <Text>{}</Text>
            </BasicDetails>
          </Info>
        </ProfileDetails>
        <ProfileDetails>
          <Info>
            <SubTitle style={{ textAlign: "center" }}>Graduate</SubTitle>
            <BasicDetails>
              <SubTitle>Name:</SubTitle>
              <Text>{}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Place:</SubTitle>
              <Text>{}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Percentage:</SubTitle>
              <Text>{}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Date:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
          </Info>
          <Info>
            <SubTitle style={{ textAlign: "center" }}>Post G</SubTitle>
            <BasicDetails>
              <SubTitle>Name:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Place:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Percentage:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
            <BasicDetails>
              <SubTitle>Date:</SubTitle>
              <Text> {}</Text>
            </BasicDetails>
          </Info>
        </ProfileDetails>
        <Add onClick={handleChange}>Click here to add education</Add>
      </Container>
    </>
  );
};

export default Education;
