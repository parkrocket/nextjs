import NavBar from './NavBar';

export default function LayOut({ children }) {
    return (
        <>
            <NavBar></NavBar>
            <div>{children}</div>
        </>
    );
}
