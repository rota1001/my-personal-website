import Link from "next/link"
import {Button} from "./ui/button";
import Nav from "./Nav"

import MobileNav from "./MobileNav";


const Header = () => {
    return <header className="py-9 md:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    rota1001<span className="text-accent">.</span>
                </h1>
            </Link>
            {/* {desktop nav} */}
            <div className="hidden md:flex items-center gap-8">
                <Nav/>
                {/* <Link href="/contact">
                    <Button>contact</Button>
                </Link> */}
            </div>
            {/* {mobile nav} */}
            <div className="md:hidden">
                <MobileNav/>
            </div>

        </div>
        </header>;
};
export default Header;