"use client"

import { useState } from "react"
import Image from "next/image"

const MessageRequest = ({
    title,
    placeHolder,
    name,
    titleClassName,
    handleChange,
    valorTextarea,
    height
  }: {
    title: string;
    placeHolder: string;
    name: string;
    titleClassName: string;
    handleChange: ( event : any ) => void;
    valorTextarea: string;
    height: number;
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
                        className={`${isInputSelected ? `outline-2 outline-primaryv transition-colors duration-200` : "outline-none"} w-80 h-${height} border rounded transition-all duration-300 py-2 px-2 whitespace-normal overflow-hidden overflow-ellipsis outline-none flex justify-center bg-gray-700 text-gray-50 p-2 placeholder:text-gray-50`}
                        name={name}
                        id=""
                        placeholder={placeHolder}
                        onChange={handleChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        value={valorTextarea}
                    />
                </div>
        </section>
    </>
    )
}

export default MessageRequest