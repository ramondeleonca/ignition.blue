export default function Index() {
    return (
        <div className="hero relative overflow-hidden">
            <div id="#hero-content" className="absolute w-full h-full z-20 flex items-center justify-center flex-wrap max-lg:flex-col">
                <img src="/wordmark.svg" alt="Blue Ignition Wordmark" className="w-1/2 max-lg:w-5/6 object-contain" />
                <h1 className="text-[7.5vw] max-lg:text-[20vw] font-montserrat font-extrabold leading-none">3526</h1>
            </div>
            <div className="absolute w-full h-full bg-black z-10 bg-opacity-75"></div>
            <video src="/backgroundreel.mp4" autoPlay muted loop className="object-cover w-full h-full"></video>
        </div>
    )
}