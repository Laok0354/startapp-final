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
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>
            <div>
                <JoinedUsers/>
                <h3>Vacantes: {members - joined}</h3>
            </div>
            <div>
                <MessageRequest
                    title="Message"
                    name="message"
                    placeHolder="Send a Message"
                    className=""
                    titleClassName=""
                    onChange={onChange}
                />
            </div>
            <div>
                {/* Posibilidad para poner un link de discord */}
            </div>
        </section>
 )}

export default OpenedProject;