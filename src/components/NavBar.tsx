// import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function NavBar() {
    return (
        <nav className="fixed z-50 h-12 top-2 left-4 right-4 bg-white bg-opacity-25 backdrop-blur-md backdrop-brightness-50 rounded-xl noise overflow-hidden backdrop-saturate-[2] p-2 px-4 flex justify-between" style={{ outline: "1px solid rgba(255, 255, 255, 0.5)"}}>
            <Link to="/" className="unstyled z-10"><img className="h-full aspect-square" src={Math.floor(Math.random() * 100) == 69 ? "/ignito.svg" : "/logo.svg"} alt="Blue Ignition 3526 Logo"></img></Link>

            <div className="absolute w-full h-full top-0 left-0 flex justify-evenly items-center max-md:hidden">
                <Link to="/">Home</Link>
                <Link to="/legacy/2024">2024 season</Link>
                <Link to="/engineering/bird">BIRD</Link>
                <Link to="/engineering">Engineering</Link>
                <Link to="/team/sponsors">Sponsors</Link>
            </div>

            <div className="relative right-0 top-0 h-full flex items-center aspect-square md:hidden">
                {/* <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Menu></Menu>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>menu</DropdownMenuLabel>
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                    </DropdownMenuContent>
                </DropdownMenu> */}
            </div>
        </nav>
    )
}