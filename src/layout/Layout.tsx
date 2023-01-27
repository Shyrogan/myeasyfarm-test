import logo from "../2-logo.png"

export default function Logo(props: React.PropsWithChildren<{}>) {
    return (
        <>
        <img className="fixed w-32 top-4 left-4" src={logo} />
        {props.children}
        </>
    )
}