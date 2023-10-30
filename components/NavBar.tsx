import Link from "next/link"

const links = [{
  label: "Home",
  route: "/"
}, {
  label: "Sign Up",
  route: "/signup"
}, {
    label: "Login",
    route: "/login"
}, {
    label: "Projects",
    route: "/projects"
}]

const NavBar = () => {
    return(
        <nav className='flex justify-center my-2'>
            <ul className='flex flex-row p-6 border rounded-md'>
                {links.map(({ label, route }) => (
                    <li key={route} className='flex  mx-4'>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;