// import Login from "./Login";
import SignUp from "./SignUp";

function BackgroundStructure() {
    const image = "https://img.gkbcdn.com/bn/2212/signin-639a88ce2b40c92bfc8cbbef._p1_.jpg";
    const container = {
        width: "100%",
        height: "600px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
    }
    return (
        <>
            <div style={container}>
                {/* <Login/> */}
                <SignUp />
            </div>
        </>
    );
}

export default BackgroundStructure;