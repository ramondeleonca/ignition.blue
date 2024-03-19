import { DotLottiePlayer } from "@dotlottie/react-player";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Index() {
    const images = [
        "/IMG_2399.JPG",
        "/IMG_2378.JPG",
        "/IMG_2405.JPG",
        "/IMG_2451.JPG",
        "/IMG_2506.JPG",
        "/IMG_2511.JPG",
        "/IMG_2519.JPG",
        "/IMG_2528.JPG",
        "/IMG_2670.JPG",
        "/IMG_2710.JPG",
        "/IMG_2718.JPG",
        "/IMG_2924.JPG",
        "/IMG_2746.JPG"
    ];

    const [image, setImage] = useState(images[0]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".scroll-animation", {
                y: -50,
                opacity: 0,
                scrollTrigger: {
                    scroller: "body",
                    trigger: "#hero-content",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            const tl1 = gsap.timeline({
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".ready-to-ignite-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                    markers: true,
                    onUpdate: (self) => setImage(images[Math.floor(self.progress * images.length)])
                },
            });

            tl1.fromTo(".ready-to-ignite-text", { scale: 0.15, opacity: 0.15 }, { scale: 1, opacity: 1 }, 0);
        });

        return () => ctx.revert();
    }, [images]);

    return (
        <>
            <div className="hero relative overflow-hidden">
                <div id="#hero-content" className="absolute w-full h-full z-20 flex items-center justify-center flex-wrap max-lg:flex-col">
                    <img src="/wordmark.svg" alt="Blue Ignition Wordmark" className="w-1/2 max-lg:w-5/6 object-contain" />
                    <h1 className="text-[7.5vw] max-lg:text-[20vw] font-montserrat font-extrabold leading-none">3526</h1>
                    <DotLottiePlayer src="/scroll.lottie" autoplay loop className="absolute bottom-6 left-auto right-auto scroll-animation z-30"></DotLottiePlayer>
                </div>
                <div className="absolute w-full h-full bg-black z-10 bg-opacity-75"></div>
                <video src="/backgroundreel.mp4" autoPlay muted loop className="object-cover w-full h-full"></video>
            </div>

            <div className="hero relative overflow-hidden ready-to-ignite-section flex items-center justify-center flex-wrap">
                <div className="absolute w-full h-full top-0 left-0">
                    <div className="absolute w-full h-full bg-black z-10 bg-opacity-75"></div>
                    <img src={image} className="object-cover" alt="" />
                </div>
                <h1 className="ready-to-ignite-text text-transparent bg-clip-text bg-gradient-to-t from-transparent to-75% to-text text-[7vw] text-wrap text-center relative z-30">READY TO IGNITE?</h1>
            </div>
        </>
    )
}