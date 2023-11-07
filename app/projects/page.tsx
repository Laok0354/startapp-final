import ProjectsScroll from "../../components/projects/ProjectsScroll";
import SuggestedUsers from "../../components/projects/SuggestedUsers";
import CreateProject from "@/components/projects/CreateProject";
import SearchBar from "../../components/SearchBar";

export default function Projects() {
    return (
        <article id="__next">
            <header>
                <SearchBar/>
                <h1 className="text-2xl font-semibold font-raleway my-4">Projects</h1>
            </header>
            <section className="flex flex-row justify-around flex-grow align-top">
                <div>
                    <ProjectsScroll/>
                </div>
                <div className="" id="__next">
                    <SuggestedUsers/>
                    <CreateProject/>
                </div>
            </section>
        </article>
    );
}
