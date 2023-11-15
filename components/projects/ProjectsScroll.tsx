"use client"

import LikeDislikeButton from "./LikeDislikeButton"
import OpenedProject from "./OpenedProject"
import constants from "./constants"
import { useEffect, useState } from "react"
import Modal from "react-modal";
import { Project, ProjectCollaborators } from ".prisma/client"

Modal.setAppElement("#__next");

function shuffleArray(array: []) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Project = (
    {
    id,
    title, 
    description,
    members,
    joined,
    stateText
    } : {
    id : number,
    title : string | number,
    description : string
    members : number,
    joined : number,
    stateText : string
}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let stateTextColor;

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 999,
        },
            content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            width: "70%",
            height: "70%",
            overflow: "auto",
            background: "#0D1117",
            border: "1px solid #9F00FB",
            padding: "0px",
        },
      };

        if (stateText === "In Progress") {
            stateTextColor = " text-orange";
        } else if (stateText === "Finished") {
            stateTextColor = " text-green";
        } else if (stateText === "Abandoned") {
            stateTextColor = " text-red";
        } else {
            stateTextColor = " text-purple-500";
        }

    return (
    <article>
        <section className="flex align-middle justify-center">
            <div className="py-4 px-4 bg-gray-800 w-40 h-60 rounded-xl flex flex-col justify-between border-2 border-primaryv">
                <div>  
                    <h1 onClick={openModal} className="text-[1rem] font-semibold font-raleway cursor-pointer">{title}</h1>
                    <p className="text-xs text-[#8F8F8F]">{description}</p>
                </div>
                <div className="mt-2">
                    <h3 className="text-sm mb-1 font-semibold text-primaryv">Members: <span className="text-white font-normal">{members}</span></h3>
                    <h3 className="text-sm mb-1 font-semibold text-primaryv">Joined: <span className="text-white font-normal">{joined}</span></h3>
                    <h3 className={`text-sm font-bold mt-4 ${stateTextColor}`}>{stateText}</h3>
                </div>
                <div className="">
                    <div className="flex flex-row justify-end mt-3">
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
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
           <OpenedProject
                id={id}
                title={title}
                description={description}
                members={members}
                joined={joined}
           />
        </Modal>
    </article>
    );
}

const ProjectsScroll = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [error, setError] = useState(null);
  const stateText = ["0","In Progress", "Finished", "Abandoned", "Paused"]

  useEffect(() => {
    const timestamp = Date.now();

    fetch(`http://localhost:3000/project/getAllProjects?t=${timestamp}`, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        shuffleArray(data);
        setProjectsData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  if (error) {
    return <div style={{ color: 'red' }}>{`Couldn't load projects. Error: ${error}`}</div>;
  }

return (
  <section className="overflow-hidden">
    <div className={projectsData.length > 6 ? "max-h-[500px] overflow-y-auto grid grid-cols-4 gap-4 px-2" : "grid grid-cols-4"}>
      {projectsData.map((project: Project & { collaborators: ProjectCollaborators[] }) => {        return (
          <div className="col-span-1" key={project.id}>
            <Project
              id={project.id}
              title={project.name}
              description={project.description}
              members={project.maxMembers}
              joined={project.collaborators.length}
              stateText={stateText[project.statusId]}
            />
          </div>
        );
      })}
    </div>
  </section>
);

};

  
export default ProjectsScroll;