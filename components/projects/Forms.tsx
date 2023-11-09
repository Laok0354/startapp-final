"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import MultiSelectInput from "../sign-up/MultiSelectInput";
import Icons from "../sign-up/Icons";
import OptionsMenu from "./OptionsMenu";
import MembersIndicator from "./MemberIndicator";

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
  onChange: (e: React.FormEvent) => void;
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
  name: string | undefined;
  value: string;
  onChange: (e: React.FormEvent) => void;
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
    username: "",
    email: "",
    password: "",
    selectedOptions: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    setFormData({
      username: "",
      email: "",
      password: "",
      selectedOptions: [],
    });
  };

  const handleInputChange = (e: React.FormEvent) => {
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
          name="username"
          title="USERNAME"
          placeHolder="Enter your Username"
          value={formData.username}
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
              name="selectedOptions"
              options={[
                { value: "opcion1", label: "Back-End dev" },
                { value: "opcion2", label: "Front-End dev" },
                { value: "opcion3", label: "Software dev" },
              ]}
              selectedOptions={formData.selectedOptions}
              onSelectedOptionsChange={(selectedOptions) =>
                setFormData({ ...formData, selectedOptions })
              }
            />
          </div>
        </div>
        <div className="mb-3 mt-3">
          <Icons />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-72 mt-4 py-3 bg-primaryv rounded-lg"
        >
          <h4 className="text-xl tracking-wide font-[550]">Sign Up</h4>
        </button>
      </form>
    </section>
  );
};

const LoginForm = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor.
    console.log("Datos del formulario enviados:", formData);

    // Reiniciar el formulario
    if (formRef.current) {
      formRef.current.reset();
    }

    // También puedes reiniciar el estado de formData si es necesario
    setFormData({
      usernameOrEmail: "",
      password: "",
      rememberMe: false,
    });
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
          name="usernameOrEmail"
          title="USERNAME or EMAIL"
          placeHolder="Enter your Username or Email"
          value={formData.usernameOrEmail}
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
            checked={formData.rememberMe}
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
          className="w-72 mt-3 mb-6 py-3 bg-primaryv rounded-lg"
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
  const [projectMembers, setProjectMembers] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name : "",
    description: "",
    collaborators: "",
  });

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({...formData, collaborators: projectMembers});

    console.log(formData)

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleInputChange = (e: React.FormEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="divide-y divide-[#B5B2B2] absolute "
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
                name="name"
                title="Project Name"
                placeHolder="Enter your Project Name"
                value={formData.name}
                className="h-9 w-128 placeholder:text-gray-50 text-gray-50"
                titleClassName="text-xs font-raleway font-light tracking-wide"
                onChange={handleInputChange}
              />
              <Input
                name="description"
                title="Description"
                placeHolder="Enter a brief description"
                value={formData.description}
                className="h-9 w-128 placeholder:text-gray-50 text-gray-50 absolute z-20"
                titleClassName="text-xs font-raleway font-light tracking-wide"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>

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
      <MembersIndicator 
        setProjectMembers={setProjectMembers}
      />
    </section>
  );
};

export { SignUpForm, LoginForm, ProjectForm };
