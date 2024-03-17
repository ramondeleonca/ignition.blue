import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="fixed z-50 top-2 left-4 right-4 h-16 bg-white bg-opacity-25 backdrop-blur-md rounded-xl noise overflow-hidden backdrop-saturate-[2] p-2 px-4" style={{ outline: "1px solid rgba(255, 255, 255, 0.5)"}}>
            <Link to="/" className="unstyled"><img className="h-full aspect-square" src={Math.floor(Math.random() * 100) == 69 ? "/ignito.svg" : "/logo.svg"} alt="Blue Ignition 3526 Logo"></img></Link>
            <div className="absolute w-full h-full top-0 left-0 flex justify-evenly items-center">
                <Link to="/about">About</Link>
                <Link to={`/legacy/${new Date().getUTCFullYear()}`}>{new Date().getUTCFullYear()} season</Link>
                <Link to="/engineering">Engineering</Link>
                <Link to="/team/sponsors">Sponsors</Link>
            </div>
        </nav>
    )
}