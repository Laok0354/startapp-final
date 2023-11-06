"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import MultiSelectInput from "./sign-up/MultiSelectInput";
import Icons from "./sign-up/Icons";
import OptionsMenu from "./OptionsMenu";
import MembersIndicator from "./MemberIndicator";
import { getAccessToken } from "./getToken";

const Input = ({
  title,
  placeHolder,
  name,
  value,
  className,
  titleClassName,
  onChange,
}: {
  title: string;
  placeHolder: string;
  name: string;
  value: string;
  className: string;
  titleClassName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="my-2">
      <h6 className={titleClassName}>{title}</h6>
      <input
        className={`flex justify-center w-80 h-12 rounded-md bg-gray-800 text-gray-50 p-2 ${className}`}
        type="text"
        name={name}
        value={value}
        id=""
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
};

const PasswordInput = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClick = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="my-2">
      <h6 className="text-xs font-semibold tracking-widest">PASSWORD</h6>
      <div className="flex flex-row relative justify-between">
        <input
          className="flex justify-center mt-1 w-80 h-12 rounded-md bg-gray-800 text-gray-50 p-2 z-0 "
          type={passwordVisible ? "text" : "password"}
          name={name}
          id=""
          placeholder="Enter your Password"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={handleClick}
          className="flex z-10 mt-5 ml-[18rem] absolute"
        >
          <img
            src={
              passwordVisible ? "/svg/ojoCerrado.svg" : "/svg/ojoAbierto.svg"
            }
          />
        </button>
      </div>
    </div>
  );
};

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    skillIds: [] as number[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    setFormData({
      userName: "",
      email: "",
      password: "",
      skillIds: [],
    });
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = "/projects";
      } else {
        alert(data.error);
      }
    } catch (error) {}
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section>
      <form
        className="flex my-2 flex-col justify-center items-center mx-8"
        onSubmit={handleSubmit}
      >
        {/* Componente Input para el username */}
        <Input
          name="userName"
          title="USERNAME"
          placeHolder="Enter your Username"
          value={formData.userName}
          className=""
          titleClassName="text-xs font-semibold tracking-widest font-bebas mb-1"
          onChange={handleInputChange}
        />
        {/* Componente Input para el email */}
        <Input
          name="email"
          title="EMAIL"
          placeHolder="Enter your email"
          value={formData.email}
          className=""
          titleClassName="text-xs font-semibold tracking-widest font-bebas mb-1"
          onChange={handleInputChange}
        />
        {/* Componente PasswordInput */}
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div>
          <div className="mt-2 mb-1">
            <h6 className="text-xs font-semibold tracking-widest font-bebas">
              SKILLS
            </h6>
          </div>
          <div className="bg-gray-800 rounded-md text-gray-200 text-sm w-80 h-12">
            <MultiSelectInput
              isMulti={true}
              name="skillIds"
              options={[
                { value: 1, label: "Back-End dev" },
                { value: 2, label: "Front-End dev" },
                { value: 3, label: "Software dev" },
              ]}
              skillIds={formData.skillIds}
              onSelectedOptionsChange={(skillIds) =>
                setFormData({ ...formData, skillIds })
              }
            />
          </div>
        </div>
        <div className="mb-3 mt-3">
          <Icons />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-72 mt-4 py-3 bg-darker-purple rounded-lg"
        >
          <h4 className="text-xl tracking-wide font-[550]">Sign Up</h4>
        </button>
      </form>
    </section>
  );
};

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    //rememberMe: false,
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.Success);
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;

        document.cookie = `accessToken=${accessToken}; path=/; sameSite=lax`;
        document.cookie = `refreshToken=${refreshToken}; path=/; sameSite=lax`;

        window.location.href = "/projects";
      } else {
        alert(data.error);
      }
    } catch (error) {}
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="flex mt-2 flex-col justify-center align-middle mx-8">
        {/* Componente Input para el nombre de usuario o correo electrónico */}
        <Input
          name="email"
          title="EMAIL"
          placeHolder="Enter your email"
          value={formData.email}
          className=""
          titleClassName="text-xs font-semibold tracking-widest font-bebas mb-1"
          onChange={handleInputChange}
        />
        {/* Componente PasswordInput */}
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <label className="flex items-center align-middle text-sm text-gray-50 ml-10">
          <input
            type="checkbox"
            name="rememberMe"
            //checked={formData.rememberMe}
            onChange={handleInputChange}
            className="mr-1"
          />
          Remember Me
        </label>
        {/* Forgot Password */}
        <h6 className="text-sm text-blue mr-10">
          <Link href="/forgot-password">Forgot Password?</Link>
        </h6>
      </div>
      <div className="mb-3 mt-6">
        <Icons />
      </div>
      <div className="flex justify-center items-center flex-col">
        <button
          type="submit"
          className="w-72 mt-3 mb-6 py-3 bg-darker-purple rounded-lg"
        >
          <h4 className="text-xl tracking-wide font-[550]">Login</h4>
        </button>
      </div>
    </form>
  );
};

const ProjectForm = ({
  handleCreateProject,
}: {
  handleCreateProject: (formData: FormData) => void;
}) => {
  const options = ["Template 1", "Template 2", "Template 3"];
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectMembers, setProjectMembers] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);

    formData.append("projectMembers", projectMembers);
    formData.append("projectName", projectName);
    formData.append("projectDescription", projectDescription);

    console.log(formData);
    try {
      const response = await fetch("http://localhost:3000/project/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
      }
    } catch (error) {}

    if (formRef.current) {
      formRef.current.reset();
    }
    setSelectedOption(options[0]);
    setSelectedTemplate("");
    setProjectName("");
    setProjectDescription("");
    setProjectMembers("");
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="divide-y divide-[#B5B2B2] absolute"
      >
        <section className="grid grid-cols-3 auto-rows-auto divide-x divide-[#B5B2B2]">
          <div className="col-span-1">
            <OptionsMenu
              options={options}
              onSelectOption={setSelectedTemplate}
              handleOptionClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          </div>
          <div className="p-4 ">
            <div>
              <h1 className="text-2xl">
                {selectedOption !== "" ? `New ${selectedOption}` : ""}
              </h1>
            </div>
            <div className="my-2">
              <Input
                name="projectName"
                title="Project Name"
                placeHolder="Enter your Project Name"
                value={projectName}
                className="h-9 w-128 placeholder:text-gray-50 text-gray-50"
                titleClassName="text-xs font-raleway font-light tracking-wide"
                onChange={(e) => setProjectName(e.target.value)}
              />
              <Input
                name="projectDescription"
                title="Description"
                placeHolder="Enter a brief description"
                value={projectDescription}
                className="h-9 w-128 placeholder:text-gray-50 text-gray-50 absolute z-20"
                titleClassName="text-xs font-raleway font-light tracking-wide"
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Include a hidden input to store selectedOption */}
        <input type="hidden" name="selectedOption" value={selectedOption} />

        <div className="w-full flex items-center justify-center">
          <button
            className="bg-green-500 text-white p-2 bg-purple-500 w-36 rounded-md mt-6"
            type="submit"
          >
            Create Project
          </button>
        </div>
      </form>
      <MembersIndicator setProjectMembers={setProjectMembers} />
    </section>
  );
};
export { SignUpForm, LoginForm, ProjectForm };
