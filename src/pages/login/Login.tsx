import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { Toast } from "../../components/Toast";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  // const [error, setError] = useState("");
  const [submition, setSubmition] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(auth);
    if (auth.token) navigate("/profile");
  }, [auth]);

  const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const loginData = {
      username: data.username,
      password: data.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8083/auth/login",
        loginData
      );

      const from =
        location.state?.from?.pathname && response.data.role === "ADMIN"
          ? "/admin"
          : location.state?.from?.pathname;
      setAuth({
        username: response.data.username,
        token: response.data.token,
        role: response.data.role,
      });

      // console.log(response.data.token);

      localStorage.setItem("token", response.data.token);

      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      setSubmition(true);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {submition && (
        <Toast message="Invalid username or password" type="error" />
      )}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <Controller
                name="username"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <input
                      {...field}
                      id="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <input
                      {...field}
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          No account?
          <Link
            to="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export { Login };
