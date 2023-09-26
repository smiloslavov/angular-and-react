import Image from "next/image";
import { logo } from "./banner.module.css";

const Banner = ({ children }) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img 
                    src="./GloboLogo.png"
                    className={logo}
                    alt="logo" />
            </div>
            <div>
                { children }
            </div>
        </header>
    );
}

export default Banner;