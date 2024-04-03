export default function notound() {
    return(
    <div className="hero-mid flex items-center justify-center">
        <div className="flex-col pt-10">
            <div className="h-60"></div>
            <h3 className="text-sm">What you're looking for doesn't exist</h3>
            <h1 className="text-9xl w-full text-center">404</h1>
            <h2 className="text-center">page not found</h2>
            <div className="m-auto w-1/4 my-5 hover:-translate-y-1 transition ease-in-ease-out">
                <a className="unstyled text-sans font-bold rounded-md bg-background outline outline-1 outline-white text-center rounded p-2 text-lg max-md:text-sm icon m-auto" href="/">Go Home</a>
            </div>
            <div className="h-48"></div>
        </div>
    </div>
    )
}