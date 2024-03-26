import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Legacy2024() {
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                id: "reveal",
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".wrapper",
                    start: "top center",
                    end: "top -=500",
                    scrub: 0.5
                }
            });

            tl.fromTo(".robot-name", {opacity: 0, scale: 0.25}, { opacity: 1, scale: 1, ease: "power1" }, 0);
            // tl.fromTo(".gallery", {y: () => -document.querySelector(".robot-name")!.clientHeight * 3}, { y: 0, ease: "power1" }, 0);
            
            // TODO: Fix missaligned trigger
            gsap.to(".fab", {
                scale: 0.5,
                duration: 0.5,
                opacity: 0,
                ease: "back.inOut",
                pointerEvents: "none",
                id: "fab",
                scrollTrigger: {
                    scroller: "body",
                    trigger: "#about",
                    start: "top center",
                    toggleActions: "play reverse, play reverse"
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="wrapper pt-[50vh]">
            <div className="fab rounded-full aspect-square w-16 fixed bg-white bottom-16 right-8 overflow-hidden z-20">
                <a href="#about" className="unstyled w-full h-full flex items-center justify-center">
                    <ArrowDown color="black" size={24}></ArrowDown>
                </a>
            </div>

            <h3 className="my-2 font-neutro-outline font-bold text-xl w-full text-center">Our 2024 Robot</h3>
            <h1 className="mb-4 text-9xl max-md:text-5xl max-mid:text-7xl w-full text-center text-transparent bg-clip-text bg-gradient-to-t from-transparent to-75% to-text robot-name">BLUE</h1>

            <div className="gallery">
                <div className="hero-mid">
                    <h1>No photos here yet</h1>
                </div>
            </div>

            <div ref={aboutRef} id="about">
                <h3 className="my-4 font-neutro font-bold text-4xl w-full text-center">About BLUE</h3>
                <div className="w-full h-full flex flex-wrap justify-evenly items-center p-4 my-8">
                    <div className="p-10 w-2/5 max-md:w-full">
                        <div className="text-xl mb-4 outline outtline-1 outline-white w-fit p-4 rounded-md bg-stone-800">
                            <p><b>[NAME: BLUE]</b></p>
                            <p><b>[STATUS: IN SERVICE]</b></p>
                            <p><b>[WEIGHT: 46KG]</b></p>
                            <p><b>[SIZE: 0.58m x 0.59m]</b></p>
                        </div>
                        
                        <p className="text-xl font-sans">BLUE is our most advanced (dino-)robot yet. It uses a 4-wheel MK4 NEO driven Swerve drivetrain with a low reduction for speedy movement, featuring a motion-profiled intake capable of intaking notes in a fraction of a second, signaling to the driver with a CANdle and LED strips on its fast-actuated climbers, thanks to it's Limelight 2+ we can use vision odometry for super precise autonomous driving</p>

                        <div className="flex w-full justify-between mt-4 flex-wrap">
                            <a href="https://github.com/Blue-Ignition3526/FRC-2024-CODE" className="icon px-2">Robot code</a>
                            <a href="https://github.com/Blue-Ignition3526/SWERVE-DRIVE" className="icon px-2">Drivetrain code / whitepaper</a>
                            <a href="https://www.thebluealliance.com/team/3526/2024" className="icon px-2">Blue Alliance Page</a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-full my-4">
                        <img src="/BLUE.jpg" alt="" loading="lazy" className="object-cover w-96 h-full aspect-square"></img>
                    </div>

                    <div className="min-w-96">
                        <h4 className="text-center m-2 ">The challenge</h4>
                        <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/9keeDyFxzY4" title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}