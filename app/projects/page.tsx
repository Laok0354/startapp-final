import ProjectsScroll from "../../components/projects/ProjectsScroll";
import SuggestedUsers from "../../components/projects/SuggestedUsers";
import CreateProject from "@/components/projects/CreateProject";
import SearchBar from "../../components/SearchBar2"; 
import SideNavbar from "@/components/SideBar";

export default function Projects() {
  return (
    <article id="__next" className="">
      <header className="">
        <SideNavbar page="Projects" />
      </header>
      <section className="flex flex-row justify-around items-center flex-grow mt-32">
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
