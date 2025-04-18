"use client";

import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import ErrorMessage from "../components/ErrorMessage";
import FormContainer from "../components/FormContainer";
import SuccessModal from "../components/SuccessModal";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowModal(true);

        setTimeout(() => {
          window.location.href = "/dashboard?success=true";
        }, 2000);

      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData.error);
        alert(`Registration failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <FormContainer title="Create an account">
      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          pattern="^[A-Za-z]+$"
          title="First name should only contain letters."
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          pattern="^[A-Za-z]+$"
          title="Last name should only contain letters."
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@gmail.com"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Enter a valid email address."
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must be at least 8 characters long and contain at least one letter and one number."
        />
        <ErrorMessage message={passwordError} />
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </form>

      <p className="login-link">
        Already have an account? <a href="/login">Log in</a>
      </p>

      {showModal && <SuccessModal message="Redirecting to login page..." onClose={() => setShowModal(false)} />}
    </FormContainer>
  );
}
