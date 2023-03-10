import Navbar from "./Navbar";
import { ReactNode } from "react";

interface IProps{
    children? : ReactNode
}
const Layout = ({children}:IProps) => {
    return ( 
    <div className="w-[90%] mx-auto">
        <nav>
            <Navbar/>
        </nav>
        <section>
            {children}
        </section>
        {/* <Footer/> */}
    </div> 
    );
}
 
export default Layout;