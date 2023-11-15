import JoinedUsers from "./JoinedUsers";
import MessageRequest from "./MessageRequest"

const OpenedProject = ({
    id,
    title, 
    description,
    members,
    joined,
    } : {
    id: number
    title : string | number,
    description : string
    members : number,
    joined : number,
}) => {   

    return (
        <section>
            <div className="flex flex-col justify-center items-center w-full mt-2">
                <h1 className="text-3xl font-raleway font-semibold">{title}</h1>
                <h2 className="text-xl">{description}</h2>
            </div>
            <section className="grid grid-col-3 ">
                <div className="grid col-start-3 row-start-2">
                    <JoinedUsers
                        id={id}
                        members={members}
                        joined={joined}
                    />
                </div>
                <div className="flex justify-center flex-col items-center col-start-1 row-start-2 ml-16">
                    <MessageRequest
                        title="Send a Message"
                        name="message"
                        placeHolder="Send a Message"
                        titleClassName="mb-1 px-2"
                    />
                    <button className="flex justify-center items-center px-20 py-2 bg-primaryv rounded-lg h-12 mt-4 hover:bg-primaryv/70">
                        <h1 className="font-semibold">Join</h1>
                    </button>
                </div>
                <div>
                    {/* Posibilidad para poner un link de discord */}
                </div>
            </section>
        </section>
 )}

export default OpenedProject;