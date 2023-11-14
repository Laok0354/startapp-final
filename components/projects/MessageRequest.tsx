"use client"

import { useState } from "react"
import Image from "next/image"

const MessageRequest = ({
    title,
    placeHolder,
    name,
    className,
    titleClassName,
    onChange,
  }: {
    title: string;
    placeHolder: string;
    name: string;
    className: string;
    titleClassName: string;
    onChange: (e: React.FormEvent) => void;
  }) =>{
    const [isInputSelected, setIsInputSelected] = useState(false);

    const handleInputFocus = () => {
        setIsInputSelected(true);
    }

    const handleInputBlur = () => {
        setIsInputSelected(false);
    }
    return(
        <>
            <section>
                <div className="my-2">
                    <h6 className={titleClassName}>{title}</h6>
                    <textarea
                        className={`${isInputSelected ? "outline-2 outline-primaryv transition-colors duration-200" : "outline-none"} absolute w-80 border rounded py-2 px-2 pr-12 whitespace-normal overflow-hidden overflow-ellipsis outline-none flex justify-center h-24 bg-gray-700 text-gray-50 p-2 placeholder:text-gray-50 ${className}`}
                        name={name}
                        id=""
                        placeholder={placeHolder}
                        onChange={onChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    <div className="absolute w-fit h-fit bg-primaryv rounded-md mt-2 ml-[17rem]">
                        <button className= "flex justify-center items-center text-gray-700 font-bold p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
        </section>
    </>
    )
}

export default MessageRequest