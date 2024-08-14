import React, { useEffect, useState } from "react";
import "./index.css";
import { useAuth } from "../../../utility/global/auth/authProvider";

interface IUserForm {
  email: string;
  password: string;
}

export const Login = () => {
  const { login } = useAuth();
  const [userForm, setUserForm] = useState<IUserForm>({
    email: "",
    password: "",
  });

  useEffect(() => {}, [userForm]);

  return (
    <div>
      Login{userForm.email}
      <input
        type="text"
        placeholder="Enter email"
        value={userForm.email}
        onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={userForm.password}
        onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
      />
      <button
        onClick={(e) => {
          login(userForm);
        }}
      >
        Login
      </button>
    </div>
  );
};
