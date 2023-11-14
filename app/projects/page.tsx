import ProjectsScroll from "../../components/projects/ProjectsScroll";
import SuggestedUsers from "../../components/projects/SuggestedUsers";
import CreateProject from "@/components/projects/CreateProject";
import SearchBar from "../../components/SearchBar2"; 

export default function Projects() {
  return (
    <article id="__next" className="">
      <header className="ml-[5.7rem] mt-6">
        <h1 className="text-2xl font-semibold font-raleway my-4">Projects</h1>
        <SearchBar className='bg-gray-800 w-24 hover:transition-all duration-1000'/> 
      </header>
      <section className="flex flex-row justify-around flex-grow align-top">
        <div className="mt-4 ">
          <ProjectsScroll />
        </div>
        <div className="">
          <SuggestedUsers />
          <CreateProject />
        </div>
      </section>
    </article>
  );
}
