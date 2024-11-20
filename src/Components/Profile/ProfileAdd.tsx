import { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../../Services/ProfileSlice";
import { AppDispatch, RootState } from "../../Services/Store";

const ProfileAdd = () => {
  const ProfileData = {
    name: "",
    email: "",
    number: "",
    date: "",
    gender: "",
    address: "",
    passport: "",
    location: "",
    language: "",
    skills: "",
    summery: "",
    married: "",
    siblings: "",
    father: "",
    mother: "",
  };
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<any>(ProfileData);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addProfile(data));
    // localStorage.setItem("data", JSON.stringify(data)); // Store data in localStorage
    console.log("Form submitted", data);
    setData(ProfileData);
  };

  return (
    <>
      <Container>
        <Typography variant="h6">Person Details</Typography>
        <StyledTextField
          type="text"
          name="name"
          label="Name"
          value={data.name}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          type="email"
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          type="number"
          name="number"
          label="Number"
          value={data.number}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          variant="outlined"
        />
        <FormControl sx={{ margin: "6px", width: "32%" }}>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            labelId="gender"
            name="gender"
            value={data.gender}
            onChange={handleChange}
            label="Gender"
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"transgender"}>Transgender</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ margin: "6px", width: "32%" }}>
          <InputLabel id="passport">Passport</InputLabel>
          <Select
            labelId="passport"
            name="passport"
            value={data.passport}
            onChange={handleChange}
            label="Passport"
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
        {/* if yes passport number */}
        <StyledTextField
          type="text"
          label="Address"
          name="address"
          value={data.address}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          type="text"
          label="Base Location"
          name="location"
          value={data.location}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          type="text"
          label="Language"
          name="language"
          value={data.language}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          type="text"
          label="Skills"
          name="skills"
          value={data.skills}
          onChange={handleChange}
          variant="outlined"
        />
        <Textarea
          aria-label="Summery"
          name="summery"
          value={data.summery}
          onChange={handleChange}
          placeholder="Profile summery"
        />

        <Typography variant="h6">Family Details</Typography>
        <StyledTextField
          label="Father"
          name="father"
          value={data.father}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          label="Mother"
          name="mother"
          value={data.mother}
          onChange={handleChange}
          variant="outlined"
        />
        <FormControl sx={{ margin: "6px", width: "32%" }}>
          <InputLabel id="married">Married</InputLabel>
          <Select
            labelId="married"
            name="married"
            value={data.married}
            onChange={handleChange}
            label="Married"
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
        {/* if yes spouse name */}
        <FormControl sx={{ margin: "6px", width: "32%" }}>
          <InputLabel id="siblings">Siblings</InputLabel>
          <Select
            labelId="siblings"
            name="siblings"
            value={data.siblings}
            onChange={handleChange}
            label="Siblings"
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
        {/* if yes provide names */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: unset; /* Enable flexbox */
  width: 100%;
`;
const StyledTextField = styled(TextField)`
  width: 32%;
  margin: 6px;
  align: left;
`;
const Textarea = styled(TextareaAutosize)`
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
export default ProfileAdd;
