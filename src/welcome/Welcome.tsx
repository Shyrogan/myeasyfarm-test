import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <>
        <div className="flex flex-col gap-10 w-screen min-h-screen h-screen justify-center place-items-center align-middle">
            <h1 className="text-3xl font-semibold">Welcome to MyEasyFarm's interactive map!</h1>
            <Link className="bg-primary outline outline-secondary outline-2
              px-4 py-3 rounded-lg hover:outline-4 font-semibold text-xl transition-all" to="/app">
              Start
            </Link>
        </div>
        </>
    )
}