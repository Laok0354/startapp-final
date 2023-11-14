import JoinedUsers from "./JoinedUsers";
import MessageRequest from "./MessageRequest"

const OpenedProject = ({
    title, 
    description,
    members,
    joined,
    } : {
    title : string | number,
    description : string
    members : number,
    joined : number,
}) => {   
    const onChange = () => {
        console.log("")
    }

    return (
        <section>
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-raleway font-semibold">{title}</h1>
                <h2 className="text-xl">{description}</h2>
            </div>
            <section className="grid grid-col-3 gap-x-36">
                <div className="grid col-start-3 row-start-2">
                    <JoinedUsers/>
                    <h3>Vacantes: {members - joined}</h3>
                </div>
                <div className="grid col-start-1 row-start-2 ml-16">
                    <MessageRequest
                        title="Message"
                        name="message"
                        placeHolder="Send a Message"
                        className=""
                        titleClassName=""
                        onChange={onChange}
                    />
                    <button>
                        <h1>Join</h1>
                    </button>
                </div>
                <div>
                    {/* Posibilidad para poner un link de discord */}
                </div>
            </section>
        </section>
 )}

export default OpenedProject;