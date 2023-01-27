import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <>
        <div className="flex w-screen min-h-screen h-screen justify-center place-items-center align-middle">
            <Link to="/app">
            <button className="bg-primary outline outline-secondary outline-2
              px-4 py-3 rounded-lg hover:outline-4 transition-all">
                <p className="font-semibold text-xl">Start</p>
              </button>
            </Link>
        </div>
        </>
    )
}