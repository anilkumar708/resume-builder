import { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addProfile } from "../../Services/ProfileSlice";
import { AppDispatch } from "../../Services/Store";
import {
  Textarea,
  StyledTextField,
} from "../../StyledComponents/StyledProfile";
import { Add, SubTitle, Title } from "../../StyledComponents/StyledComponent";

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
      <form onClick={handleSubmit}>
        <Title>Add Profile</Title>
        <SubTitle>Family Details</SubTitle>
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

        <SubTitle>Family Details</SubTitle>
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
        <Add type="submit">Submit</Add>
      </form>
    </>
  );
};

export default ProfileAdd;
