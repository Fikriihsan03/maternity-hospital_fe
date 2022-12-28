import Navbar from "./Navbar";
import { ReactNode } from "react";
import Footer from "./Footer";

interface IProps{
    children? : ReactNode
}
const Layout = ({children}:IProps) => {
    console.log(children)
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