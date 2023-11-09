import Hearts from "./Hearts";
import LikeDislikeButton from "./LikeDislikeButton";
import constants from "./constants";

const Project = ({
  title,
  description,
  members,
  joined,
  state,
  likes,
}: {
  title: string | number;
  description: string;
  members: number;
  joined: number;
  state: string;
  likes: number;
}) => {
  let stateText;
  if (state === "In Progress") {
    stateText = " text-orange";
  } else if (state === "Finished") {
    stateText = " text-green";
  } else if (state === "Abandoned") {
    stateText = " text-red";
  } else {
    stateText = " text-purple-500";
  }
  return (
    // Project
    <section className="flex align-middle justify-center">
      <div className="py-4 px-4 bg-gray-700 w-40 h-60 rounded-xl flex flex-col justify-between">
        {/* Titulo y Descripcion */}
        <div>
          <h1 className="text-[1rem] font-semibold font-raleway">{title}</h1>
          <p className="text-xs text-[#8F8F8F]">{description}</p>
        </div>
        <div className="">
          {/* Members, Joined and State of the Project */}
          <h3 className="text-sm">Members: {members}</h3>
          <h3 className="text-sm mb-1">Joined: {joined}</h3>
          <h3 className={`text-sm font-bold${stateText}`}>{state}</h3>
        </div>
        <div className="">
          {/* Likeness */}
          <Hearts porcentaje={likes} />
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
};

const ProjectsScroll = async () => {
  const timestamp = Date.now();
  const response = await fetch(`http://localhost:3000/project/getAllProjects?t=${timestamp}`,{
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  },
});
  const data = await response.json();
  console.log(data);
  const projectState = ["In Progress", "Finished", "Abandoned"];
  return (
    <section className="overflow-hidden">
      <div
        className={
          data.length > 6
            ? "max-h-[500px] overflow-y-auto grid grid-cols-4 gap-4 px-2"
            : "grid grid-cols-4"
        }
      >
        {data.map((project) => (
          <div className="col-span-1">
            <Project
              key={project.id}
              title={project.name}
              description={project.description}
              members={Math.round(Math.random() * 8 + 2)}
              joined={Math.round(Math.random() * 20)}
              state={projectState[Math.round(Math.random() * 2)]}
              likes={Math.round(Math.random() * 100)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsScroll;
