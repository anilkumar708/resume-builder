import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

//Home Component
export const Container = styled.section`
  display: unset;
  width: 100%;
`;
export const ProfileDetails = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const Info = styled.aside`
  border: 1px solid black;
  width: 80%;
  padding: 10px;
  margin-bottom: 5px;
`;
export const Summery = styled.div`
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid lightblue;
`;
export const BasicDetails = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid lightblue;
  &:nth-child(odd) {
    background-color: #f1f1f1;
  }
`;
export const Title = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
`;

export const SubTitle = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
`;
export const Text = styled(Typography)`
  font-size: 16px;
`;

//Login Component
export const InputField = styled.input`
  margin: 5px 0px;
  padding: 8px 10px;
  width: 100%;
`;

export const Add = styled(Button)`
  background-color: #ddf0ff;
  margin-top: 10px;
  width: 100%;
  border: 1px solid black;
  color: black;
`;
