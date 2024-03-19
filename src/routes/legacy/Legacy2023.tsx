import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Legacy2023() {
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

            tl.fromTo(".robot-name", {opacity: 0, scale: 0.5}, { opacity: 1, scale: 1, ease: "power1" }, 0);
            tl.fromTo(".gallery", {y: () => -document.querySelector(".robot-name")!.clientHeight * 4}, { y: 0, ease: "power1" }, 0);
            
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

            <h3 className="my-2 font-neutro-outline font-bold text-xl w-full text-center">Our 2023 Robot</h3>
            <h1 className="mb-4 text-9xl max-md:text-5xl max-mid:text-7xl w-full text-center text-transparent bg-clip-text bg-gradient-to-t from-transparent to-75% to-text robot-name">MAFAVITO</h1>

            <div className="gallery">
                <img src="/IMG_2399.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2378.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2405.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2451.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2506.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2511.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2519.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2528.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2670.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2710.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2718.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2924.JPG" alt="" loading="lazy"></img>
                <img src="/IMG_2746.JPG" alt="" loading="lazy"></img>
            </div>

            <div ref={aboutRef} id="about">
                <h3 className="my-4 font-neutro font-bold text-4xl w-full text-center">About MAFAVITO</h3>
                <div className="w-full h-full flex flex-wrap justify-evenly items-center p-4 my-8">
                    <div className="p-10 w-2/5 max-md:w-full">
                        <div className="text-xl mb-4">
                            <p><b>[NAME: MAFAVITO]</b></p>
                            <p><b>[STATUS: RETIRED]</b></p>
                            <p><b>[WEIGHT: 56KG]</b></p>
                            <p><b>[SIZE: 35" x 45"]</b></p>
                        </div>
                        
                        <p className="text-xl font-sans">MAFAVITO had multiple iterations, however this is its last one, it was built using an andymark KitBot 4 CIM motor tank drivetrain with a 4 CIM motor pulley system to lower and raise the arm's angle. The grabber is powered by a single REV NEO motor with a limit switch to detect wether it has a piece or not. At the begining of the season Mafavito looked a little rough, however torwards the end, the team learned a lot and were able to fix him up and keep on competing!</p>

                        <div className="flex w-full justify-between mt-4 flex-wrap">
                            <a href="https://github.com/Blue-Ignition3526/FRC2023-WORLDS" className="icon px-2">Original robot code</a>
                            <a href="https://github.com/Blue-Ignition3526/FRC2023-OFFSEASON" className="icon px-2">Latest robot code</a>
                            <a href="https://www.thebluealliance.com/team/3526/2023" className="icon px-2">Blue Alliance Page</a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-full my-4">
                        <img src="/IMG_2399.JPG" alt="" loading="lazy" className="object-cover w-96 h-full aspect-square"></img>
                    </div>

                    <div className="min-w-96">
                        <h4 className="text-center m-2 ">The challenge</h4>
                        <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/0zpflsYc4PA?si=hM1_z0W7yuawxS-N" title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}