import LikeDislikeButton from "./LikeDislikeButton"
import constants from "./constants"

const Project = (
    {
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
    return (
        <section className="flex align-middle justify-center">
            <div className="py-4 px-4 bg-gray-800 w-40 h-60 rounded-xl flex flex-col justify-between border-2 border-primaryv">
                <div>  
                    <h1 className="text-[1rem] font-semibold font-raleway">{title}</h1>
                    <p className="text-xs text-[#8F8F8F]">{description}</p>
                </div>
                <div className="">
                    <h3 className="text-sm mb-3 font-semibold text-primaryv">Members: <span className="text-white font-normal">{members}</span></h3>
                    <h3 className="text-sm mb-1 font-semibold text-primaryv">Joined: <span className="text-white font-normal">{joined}</span></h3>
                </div>
                <div className="">
                    <div className="flex flex-row justify-end mt-3 ">
                        <LikeDislikeButton
                            filled={constants.likeFilledPath}
                            notFilled={constants.likeNotFilledPath}
                            filledDislike={constants.dislikeFilledPath}
                            notFilledDislike={constants.dislikeNotFilledPath}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const ProjectsScroll = () => {
    let amountProjects = 12;
    let projectNumber = 0;
    let amountMembers = 0;
    return (
        <section className="overflow-hidden">
            <div className={amountProjects > 6 ? "max-h-[500px] overflow-y-auto grid grid-cols-4 gap-4 px-2" : "grid grid-cols-4"}>
                {[...Array(amountProjects)].map((_, index) => (
                    <div className="col-span-1">
                        <Project
                            key={index}
                            title={`Project ${projectNumber += 1}`}
                            description="Lorem ipsum dolor sit."
                            members={amountMembers = Math.round(Math.random() * 8 + 2)}
                            joined={amountMembers - 1}
                        />
                    </div>
                ))}
            </div>
        </section>
        );
    };

export default ProjectsScroll;