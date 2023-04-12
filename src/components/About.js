import { Outlet } from "react-router-dom";
const About=()=>{
    return(
        <div>
            <h1>About us</h1>
            <p>This is React for you.</p>
            <Outlet/>
        </div>
    );
}
export default About;