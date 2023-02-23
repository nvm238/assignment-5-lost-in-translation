import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { storageSave } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../const/storageKeys";

const usernameConfig = {
  required: true,
  minLength: 2,
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (user !== null) {
      navigate("translation");
    }
  }, [user, navigate]);

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return console.log("Username is required.");
    }
    if (errors.username.type === "minLength") {
      return console.log("Username needs to be atleast 2 characters.");
    }
  })();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username"></label>
          <input
            type="text"
            {...register("username", usernameConfig)}
            placeholder="JohnDoe"
          />
          {errorMessage}
        </fieldset>
        <button class="login-button" type="submit" disabled={loading}>
        →
        </button>
      </form>
      {loading && console.log("Logging in...")}
      {apiError && console.log(apiError)}
    </div>
  );
};

export default RegisterForm;
