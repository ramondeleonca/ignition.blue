import { Link } from "react-router-dom";
import THE_FLAME_MUST_KEEP_BURNING from "./../assets/THE_FLAME_MUST_KEEP_BURNING.svg";

export default function Footer() {
    return (
        <footer className="p-8 pb-2">
            <div className="flex items-start justify-between max-lg:flex-col max-lg:items-center">
                <img src={THE_FLAME_MUST_KEEP_BURNING} className="w-1/3 p-2 max-lg:hidden" alt="THE FLAME MUST KEEP BURNING" />
                <div className="flex w-1/2 justify-evenly max-lg:w-full">
                    <div className="flex flex-col">
                        <h2 className="text-2xl pb-2">OUR LEGACY</h2>
                        <Link className="text-lg" to="/legacy/2024">2024</Link>
                        <Link className="text-lg" to="/legacy/2023">2023</Link>
                        <Link className="text-lg" to="/legacy/2022">2022</Link>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-2xl pb-2">OUR TEAM</h2>
                        <Link className="text-lg" to="/team">Team</Link>
                        <Link className="text-lg" to="/team/alumni">Alumni</Link>
                        <Link className="text-lg" to="/team/sponsors">Sponsors</Link>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-2xl pb-2">ENGINEERING</h2>
                        <Link className="text-lg" to="/engineering/programming">Programming</Link>
                        <Link className="text-lg" to="/engineering/electronics">Electronics</Link>
                        <Link className="text-lg" to="/engineering/mechanical">Mechanical</Link>
                    </div>
                </div>
                <img src={THE_FLAME_MUST_KEEP_BURNING} className="w-3/4 p-2 lg:hidden" alt="THE FLAME MUST KEEP BURNING" />
            </div>
            <p className="text-center p-2">&copy; Blue Ignition 3526, {new Date().getUTCFullYear()}</p>
        </footer>
    )
}