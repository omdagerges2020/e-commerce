"use client";

import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import { DiAsterisk } from "react-icons/di";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Signup = () => {
  // State for inputs
  const [user, setUser] = useState({
    firstname: "",
    email: "",
    password: "",
    telephone: "",
    lastname: "",
  });
  // state for labels
  const [firstName, setFirstNameLabel] = useState(true);
  const [emailLabel, setEmailLabel] = useState(true);
  const [passLabel, setPassLabel] = useState(true);
  const [telephone, setTelephoneLabel] = useState(true);
  const [lastName, setLastNameLabel] = useState(true);

  const [status, setStatus] = useState("");

  // checkLabels
  const checkLabels = () => {
    setFirstNameLabel(true);
    setEmailLabel(true);
    setPassLabel(true);
    setTelephoneLabel(true);
    setLastNameLabel(true);
  };

  const router = useRouter();

  // regular expression  for email validate
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // regular expression for pass validate
  const regPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // const handleForm = () => {
  //   try {
  //     const res = axios({
  //       method: "post",
  //       url: "https://api.detaylarhome.com/api/user/register",
  //       headers: {
  //         "token": "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
  //         "Content-Type": "application/json",
  //       },
  //       data: user,
  //     });
  //     setStatus(true);
  //     router.push("/login");
  //     console.log(res);
  //     // Swal.fire({
  //     //   title: "Verifying your email",
  //     //   input: "number",
  //     //   inputAttributes: {
  //     //     autocapitalize: "off",
  //     //   },
  //     //   showCancelButton: true,
  //     //   cancelButtonColor: "red",
  //     //   confirmButtonText: "Confirm",
  //     //   confirmButtonColor: "green",
  //     //   showLoaderOnConfirm: false,
  //     //   preConfirm: async (otp) => {
  //     //     try {
  //     //       const res = await axios({
  //     //         method: "post",
  //     //         url: "https://dataapi-tygq.onrender.com/api/v1/users/verify",
  //     //         data: {
  //     //           email: user.email,
  //     //           code: otp,
  //     //         },
  //     //       });
  //     //       if (res.data.message === "user has been verified!") {
  //     //         // window.confirm("Email verification done!");
  //     //         Swal.fire({
  //     //           position: "top-end",
  //     //           icon: "success",
  //     //           title: "Email verification done!",
  //     //           showConfirmButton: false,
  //     //           timer: 1500,
  //     //         });
  //     //         router.push("/login");
  //     //       } else {
  //     //         window.confirm("OTP verification failed.");
  //     //       }
  //     //     } catch (er) {
  //     //       console.log(er);
  //     //       // alert(er.response.data.message + " please enter valid otp");
  //     //       Swal.showValidationMessage(
  //     //         `Verification code wrong. Please enter a valid OTP.`
  //     //       );
  //     //     }
  //     //   },
  //     //   allowOutsideClick: () => !Swal.isLoading(),
  //     // }).then((result) => {
  //     //   if (result.isDismissed) {
  //     //     Swal.fire({
  //     //       position: "top-end",
  //     //       icon: "warning",
  //     //       title: "You have to verify your email!",
  //     //       showConfirmButton: false,
  //     //       timer: 1500,
  //     //     });
  //     //   }
  //     // });
  //   } catch (er) {
  //     console.log(er);
  //     setStatus(false);
  //   }
  // };
  const handleForm = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://api.detaylarhome.com/api/user/register",
        headers: {
          token: "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
          "Content-Type": "application/json",
        },
        data: user,
      });
      setStatus(true);
      Swal.fire({
        icon: "success",
        title: "Registration successful!",
      });
      router.push("/login");
      // console.log(res);
    } catch (error) {
      // console.log(error);
      setStatus(false);
      if (error.response && error.response.status === 400) {
        // Handle the 400 error for existing user
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data["message"],
        });
      } else {
        // Handle other types of errors
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: "Something went wrong, please try again.",
        });
      }
    }
  };

  // validation form
  const validateForm = (e) => {
    e.preventDefault();
    if (user.firstname === "") {
      setFirstNameLabel(false);
    } else if (user.email === "" || !regEmail.test(user.email)) {
      checkLabels();
      setEmailLabel(false);
    } else if (user.telephone === "") {
      checkLabels();
      setTelephoneLabel(false);
    } else if (user.lastname === "") {
      checkLabels();
      setLastNameLabel(false);
    } else if (user.password === "") {
      checkLabels();
      setPassLabel(false);
    } else {
      checkLabels();
      handleForm();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Card
        color="white"
        className="xl:w-fit lg:w-fit md:w-fit w-[100%] p-5 shadow-2xl mt-4 mb-2 flex lg:justify-start lg:items-start md:justify-start md:items-start justify-center items-center"
        shadow={true}
      >
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={(e) => validateForm(e)} className="mt-8 mb-2 ">
          <div className="mb-1 flex flex-col gap-6">
            {/* fisr name input && email input */}
            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4 ">
              <div className="flex flex-col gap-3 lg:w-[50%] md:w-[50%] w-[100%]">
                <div className="relative group">
                  {firstName ? (
                    <Input
                      onChange={(e) =>
                        setUser({ ...user, firstname: e.target.value })
                      }
                      label="first name"
                      icon={
                        <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                      }
                    />
                  ) : (
                    <Input
                      onChange={(e) =>
                        setUser({ ...user, firstname: e.target.value })
                      }
                      label="must enter your name"
                      icon={
                        <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                      }
                      error
                    />
                  )}
                  <span className="absolute left-[40%] top-7 mt-1 px-2 py-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block transform -translate-x-1/2">
                    This field is required
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:w-[50%] md:w-[50%] w-[100%]">
                {/* <div className="relative group">
                  {emailLabel ? (
                    <Input
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      label="email"
                      icon={
                        <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                      }
                    />
                  ) : (
                    <Input
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      label="enter your email"
                      icon={
                        <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                      }
                      error
                    />
                  )}
                  <span className="absolute left-[40%] top-7 mt-1 px-2 py-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block transform -translate-x-1/2">
                    This field is required
                  </span>
                </div> */}
                <div className="flex flex-col gap-3 lg:w-[50%] md:w-[50%] w-[100%]">
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, lastname: e.target.value })
                    }
                    label="last name"
                  />
                </div>
              </div>
            </div>

            {/* phone number input && dateOfBirth input */}
            <div className="flex gap-4 xl:flex-row lg:flex-row md:flex-row flex-col">
              <div className="relative group">
                {emailLabel ? (
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    label="email"
                    icon={
                      <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                    }
                  />
                ) : (
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    label="enter your email"
                    icon={
                      <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                    }
                    error
                  />
                )}
                <span className="absolute left-[40%] top-7 mt-1 px-2 py-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block transform -translate-x-1/2">
                  This field is required
                </span>
              </div>
              <div className="flex flex-col gap-3 lg:w-[50%] md:w-[50%] w-[100%]">
                {telephone ? (
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, telephone: e.target.value })
                    }
                    label="phone number"
                    icon={
                      <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                    }
                  />
                ) : (
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, telephone: e.target.value })
                    }
                    label="enter your phone number"
                    icon={
                      <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                    }
                    error
                  />
                )}
                {/* <Input
                  onChange={(e) => setUser({ ...user, telephone: e.target.value })}
                  label="phone number"
                /> */}
              </div>
              {/* <div className="flex flex-col gap-3 lg:w-[50%] md:w-[50%] w-[100%]">
                <Input
                  onChange={(e) =>
                    setUser({ ...user, lastname: e.target.value })
                  }
                  label="last name"
                />
              </div> */}
            </div>

            {/* password input */}
            <div className="flex gap-4 xl:flex-row lg:flex-row md:flex-row flex-col">
              <div className="flex flex-col gap-3 lg:w-[100%] md:w-[100%] w-[100%]">
                <div className="relative group">
                  {passLabel ? (
                    <Input
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      label="password"
                      icon={
                        <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                      }
                    />
                  ) : (
                    <Input
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      label="must enter your password"
                      icon={
                        <DiAsterisk className="text-red-700 hover:cursor-pointer" />
                      }
                      error
                    />
                  )}
                  <div className="flex flex-col text-xs">
                    <span>-At least 8 characters long</span>
                    <span>-Contains at least one lowercase letter</span>
                    <span>-Contains at least one uppercase letter</span>
                    <span>-Contains at least one number</span>
                    <span>
                      -Contains at least one special character (@$!%*?&)
                    </span>
                  </div>

                  <span className="absolute left-[40%] top-full mt-1 px-2 py-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block transform -translate-x-1/2">
                    This field is required
                  </span>
                </div>
              </div>
            </div>
          </div>
          {status === false ? (
            <div className="text-red-700">User Already exists</div>
          ) : (
            ""
          )}
          <Button type="submit" className="mt-6 bg-black" fullWidth>
            sign up
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link href={"/login"} className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
