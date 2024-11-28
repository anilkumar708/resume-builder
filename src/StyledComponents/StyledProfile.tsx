import styled from "@emotion/styled";
import { Button, TextField, TextareaAutosize, Typography } from "@mui/material";

export const Container = styled.section`
  display: unset; /* Enable flexbox */
  width: 100%;
`;
export const ProfileDetails = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
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

export const StyledTextField = styled(TextField)`
  width: 32%;
  margin: 6px;
  align: left;
`;
export const Textarea = styled(TextareaAutosize)`
  box-sizing: border-box;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 17px 12px;
  border-radius: 4px;
  line-height: 20px;
  width: 65.2%;
  margin: 6px;
`;
