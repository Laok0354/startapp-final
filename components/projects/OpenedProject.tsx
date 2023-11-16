"use client"

import JoinedUsers from "./JoinedUsers";
import MessageRequest from "./MessageRequest"
import { useState } from "react";

const OpenedProject = ({
    title, 
    description,
    members,
    joined,
    closeModal
    } : {
    title : string | number,
    description : string
    members : number,
    joined : number,
    closeModal : () => void
}) => {
    const [valorTextarea, setValorTextarea] = useState('');
    const [height, setHeight] = useState(10);
    const [formData, setFormData] = useState({
        message: "",
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValorTextarea(event.target.value);
        handleKeyPress(valorTextarea);
        setFormData({ ...formData, [name]: value });
    };

    const handleKeyPress = (valorTextarea : string) => {
        if (valorTextarea.length > 100) {
            setHeight(32);
        }
        else if (valorTextarea.length > 40) {
            setHeight(16);
        }
        else{
            setHeight(10);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        closeModal();
    }
  
    return (
        <section>
            <div className="flex flex-col justify-center items-center w-full mt-2">
                <h1 className="text-3xl font-raleway font-semibold">{title}</h1>
                <h2 className="text-xl">{description}</h2>
            </div>
            <section className="grid grid-col-3 ">
                <div className="grid col-start-3 row-start-2 ">
                    <JoinedUsers
                        members={members}
                        joined={joined}
                    />
                </div>
                <div className="flex justify-center flex-col items-center col-start-1 row-start-2 ml-16">
                    <form 
                        action="" 
                        className="flex flex-col justify-center items-center"
                        onSubmit={handleSubmit}
                    >
                        <MessageRequest
                            title="Send a Message"
                            name="message"
                            placeHolder="Send a Message"
                            titleClassName="mb-1 px-2"
                            valorTextarea={formData.message}
                            handleChange={handleChange}
                            height={height}
                        />
                        <button type="submit" className="flex justify-center items-center w-48 py-2 bg-primaryv rounded-lg h-12 mt-4 hover:bg-primaryv/70">
                            <h1 className="font-semibold">Join</h1>
                        </button>
                    </form>
                </div>
                <div>
                    {/* Posibilidad para poner un link de discord */}
                </div>
            </section>
        </section>
 )}

export default OpenedProject;