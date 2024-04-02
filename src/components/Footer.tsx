import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import instagramAnimation from "react-useanimations/lib/instagram";
import githubAnimation from "react-useanimations/lib/github";
import THE_FLAME_MUST_KEEP_BURNING from "./../assets/THE_FLAME_MUST_KEEP_BURNING.svg";

export default function Footer() {
    return (
        <footer className="p-8 max-md:p-2 pb-2">
            <div className="flex items-start justify-between max-lg:flex-col max-lg:items-center">
                <img src={THE_FLAME_MUST_KEEP_BURNING} className="w-1/3 p-2 max-lg:hidden" alt="THE FLAME MUST KEEP BURNING" />
                <div className="w-1/2 max-lg:w-full flex flex-col items-end">
                    <div className="w-full flex justify-evenly max-md:justify-between items-end px-2">
                        <div className="flex flex-col">
                            <h2 className="text-2xl max-md:text-base pb-2">OUR LEGACY</h2>
                            <Link className="text-lg max-md:text-sm icon" to="/legacy/2024">2024</Link>
                            <Link className="text-lg max-md:text-sm icon" to="/legacy/2023">2023</Link>
                            <Link className="text-lg max-md:text-sm icon" to="/legacy/2022">2022</Link>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-2xl max-md:text-base pb-2">OUR TEAM</h2>
                            <Link className="text-lg max-md:text-sm icon" to="/">Home</Link>
                            <Link className="text-lg max-md:text-sm icon" to="/team/alumni">Alumni</Link>
                            <Link className="text-lg max-md:text-sm icon" to="/team/sponsors">Sponsors</Link>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-2xl max-md:text-base pb-2">ENGINEERING</h2>
                            <Link className="text-lg max-md:text-sm icon" to="/engineering/bird">BIRD</Link>
                            <Link className="text-lg max-md:text-sm icon" to="/engineering/programming">Programming</Link>
                            <Link className="text-lg max-md:text-sm icon" to="/engineering/mechanical">Mechanical</Link>
                        </div>
                    </div>

                    <div className="flex justify-around w-1/4 mt-4 mr-16">
                        <a className="unstyled hover:scale-110 transition-transform" href="https://www.instagram.com/ignitionblue/" target="_blank"><UseAnimations animation={instagramAnimation} speed={1.5} size={40} strokeColor="white" reversed></UseAnimations></a>
                        <a className="unstyled hover:scale-110 transition-transform" href="https://github.com/Blue-Ignition3526/" target="_blank"><UseAnimations animation={githubAnimation} speed={1.5} size={40} strokeColor="white" reversed></UseAnimations></a>
                        <a className="unstyled hover:scale-110 transition-transform" href="https://www.tiktok.com/@ignitionblue/" target="_blank"><img src="/tiktok.svg" className="aspect-square object-contain w-10"></img></a>
                    </div>
                </div>
                <img src={THE_FLAME_MUST_KEEP_BURNING} className="w-3/4 p-2 lg:hidden" alt="THE FLAME MUST KEEP BURNING" />
            </div>
            <p className="text-center p-2">&copy; Blue Ignition 3526, {new Date().getUTCFullYear()}</p>
        </footer>
    )
}