import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";



const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-primary-content">
            <aside>
                <img src="../../../public/icons8-books-94.png" alt="" />
                <p className="font-bold">
                    My Book Limited
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 items-center *:text-3xl *:cursor-pointer">
                    <a href="https://github.com/Mdafsarx" target="_blank"><FaGithub className="text-3xl" /></a>
                    <a href="https://www.youtube.com/channel/UCfokMm6sYTLAP1_071QLrEA" target="_blank"><FaYoutube className="text-3xl" /></a>
                    <a href="https://app.netlify.com/user/settings#profile" target="_blank"><SiNetlify className="text-3xl" /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;