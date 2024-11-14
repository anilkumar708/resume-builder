import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Box,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Profile = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    gender: "",
    address: "",
    pincode: "",
    passport: "",
    state: "",
    married: "",
    siblings: "",
    father: "",
    mother: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FOrm submitted", data);
    setData({
      name: "",
      email: "",
      number: "",
      date: "",
      gender: "",
      address: "",
      pincode: "",
      passport: "",
      state: "",
      married: "",
      siblings: "",
      father: "",
      mother: "",
    });
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
        <FormControl sx={{ margin: "8px", width: "31%" }}>
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
        <FormControl sx={{ margin: "8px", width: "31%" }}>
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
          label="State/Dist"
          name="state"
          value={data.state}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          type="number"
          label="Pincode"
          name="pincode"
          value={data.pincode}
          onChange={handleChange}
          variant="outlined"
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
        <FormControl sx={{ margin: "8px", width: "31%" }}>
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
        <FormControl sx={{ margin: "8px", width: "31%" }}>
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
  width: 80%;
  margin: auto;
`;
const StyledTextField = styled(TextField)`
  width: 31%;
  margin: 8px;
`;

export default Profile;
