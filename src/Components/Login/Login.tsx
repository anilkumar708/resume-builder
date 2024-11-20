import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Stored in local storage
  // localStorage.setItem("username", "anilr@gmail.com");
  // localStorage.setItem("password", "12345");
  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");
  const storeSubmit = (e: any) => {
    if (username === storedUser && password === storedPass) {
      navigate("/profile");
      console.log("logged with localstorage data");
    }
  };

  //Hard coded without protected
  const users = [{ username: "anil@gmail.com", password: "123451" }];
  const submitForm = (e: any) => {
    e.preventDefault();
    const account = users.find((user) =>
      user.username === username && user.password === password
        ? navigate("/profile")
        : console.log("logged with hard coded data")
    );
    if (account) {
      return;
    }
  };

  //Hard coded with protected
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulate an API call
    if (username === "anil@gmail.com" && password === "123451") {
      const token = "sampleToken123"; // This would be returned from your API
      const ttl = 3600000; // 1 hour in milliseconds
      setTokenWithExpiry("token", token, ttl);
      localStorage.setItem("token", token);
      navigate("/profile");
      console.log("logged with protected routes ");
    } else {
      alert("Invalid credentials");
    }
  };

  const setTokenWithExpiry = (key: string, value: string, ttl: number) => {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl, // ttl in milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" textAlign={"center"}>
          Tech Login
        </Typography>
        <InputField
          type="email"
          name="email"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <InputField
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          color="warning"
          type="submit"
          value="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
};
const InputField = styled.input`
  margin: 5px 0px;
  padding: 8px 10px;
  width: 100%;
`;

export default Login;
