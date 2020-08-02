import React from "react";
import { Form } from "react-final-form";
import { TextField } from "mui-rff";
import { Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { actions as authActions } from "../../services/auth";

function SignInPage() {
  const dispatch = useDispatch();

  function onSubmit(values) {
    dispatch(
      authActions.login({
        email: values.email,
        userProfile: {
          name: "John Doe"
        },
        accessToke: "accessToken"
      })
    );
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: "", password: "" }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Typography>Sign in</Typography>
          <TextField
            type="email"
            label="Email"
            name="email"
            margin="none"
            required={true}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            margin="none"
            required={true}
          />
          <Button type="submit" color="primary" variant="outlined">
            Sign in
          </Button>
        </form>
      )}
    />
  );
}

export default SignInPage;
