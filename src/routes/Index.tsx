import { DotLottiePlayer } from "@dotlottie/react-player";
import gsap from "gsap";
import { useEffect } from "react";

export default function Index() {
    const images = [
        "/mafavito/IMG_2399.JPG",
        "/mafavito/IMG_2378.JPG",
        "/mafavito/IMG_2405.JPG",
        "/mafavito/IMG_2451.JPG",
        "/mafavito/IMG_2506.JPG",
        "/mafavito/IMG_2511.JPG",
        "/mafavito/IMG_2519.JPG",
        "/mafavito/IMG_2528.JPG",
        "/mafavito/IMG_2670.JPG",
        "/mafavito/IMG_2710.JPG",
        "/mafavito/IMG_2718.JPG",
        "/mafavito/IMG_2924.JPG",
        "/mafavito/IMG_2746.JPG",
    ]

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
                    pin: true
                },
            });

            tl1.fromTo(".ready-to-ignite-text", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, 0);
            
            const images = document.querySelectorAll(".ready-to-ignite-image");
            for (let i = 0; i < images.length; i += 2) {
                tl1.fromTo(images[i], { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1 }, i);
                tl1.fromTo(images[i + 1], { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1 }, i + 1);
            }
        });

        return () => ctx.revert();
    }, []);

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
                    <div className="absolute w-full h-full top-0 left-0 -z-10">
                        {images.map((image, i, arr) => <img key={i} src={image} className={`absolute w-full h-full top-0 left-0 object-cover ready-to-ignite-image ready-to-ignite-image-${i} z-${arr.length - i}`} alt=""></img>)}
                    </div>
                </div>
                <h1 className="ready-to-ignite-text text-transparent bg-clip-text bg-gradient-to-t from-transparent to-75% to-text text-[7vw] text-wrap text-center relative z-30">READY TO IGNITE?</h1>
            </div>
        </>
    )
}