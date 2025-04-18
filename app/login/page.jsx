import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import FormContainer from "../components/FormContainer";

export default function LoginPage() {
  return (
    <FormContainer title="Welcome Back!">
      <form action="/api/auth/login" method="POST" className="login-form">
        <InputField 
          label="Email"
          type="email"
          name="email"
          placeholder="Email address"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Enter a valid email address."
        />
        <InputField 
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must be at least 8 characters long and contain at least one letter and one number."
        />
        <Button type="submit" variant="primary">Log in</Button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/register">Sign Up</a></p>
    </FormContainer>
  );
}
