import logo from "../2-logo.png"

export default function Logo(props: React.PropsWithChildren<{}>) {
    return (
        <>
        <img className="fixed w-32 top-4 left-4 z-50 bg-white p-4 rounded-lg" src={logo} />
        {props.children}
        </>
    )
}