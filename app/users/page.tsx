import User from "../../components/User";
import SideNavbar from "../../components/SideBar";
import SearchBar from "@/components/SearchBar2";

export default async function Users() {
  const response = await fetch(`http://localhost:3000/user/getAllUsers`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return (
    <main>
      <header>
        <div className="flex justify-center mt-2">
          <SearchBar className="bg-gray-800 w-24 hover:transition-all duration-1000" />
        </div>
        <SideNavbar page="users" />
      </header>
      <section
        id="__unfollow"
        className="flex justify-center h-screen items-center"
      >
        <article className="divide-y w-217 mt-8 mb-8">
          {data.map((user) => (
            <div className="flex justify-center" key={user.id}>
              <User
                id={user.id}
                imageDir={"/img/Default-Profile-Icon.jpg"}
                userName={user.userName}
                userUrl={`/profile/${user.id}`}
                project={user.projects.length > 0 ? user.projects[0].id : "No projects"}
                projectUrl={user.projects.length > 0 ? `project/${user.projects[0].id}` : null}
              />
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
