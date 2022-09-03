import "./navbar.css";
import { useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from "../../darkThemeContext";
import 'animate.css';
import { LanguageContext } from "../../languageContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const language = useContext(LanguageContext);
    const bosnian = language.state.bosnian;

    return (
        <div
            className="navbar"
            style={{
                backgroundColor: darkMode ? "#222" : "white",
                color: darkMode ? "white" : "black"
            }}
        >
            <div className="navbarLeft">
                {bosnian ? "MojPortfolio." : "MyPortfolio."}
            </div>
            <div className="navbarMiddle">
                <a href="#home" className="navbarText">
                    {bosnian ? "Uvod" : "Intro"}
                </a>
                <a href="#about" className="navbarText">
                    {bosnian ? "O Meni" : "About"}
                </a>
                <a href="#projects" className="navbarText">
                    {bosnian ? "Projekti" : "Projects"}
                </a>
                <a href="#contact" className="navbarText">
                    {bosnian ? "Kontakt" : "Contact"}
                </a>
            </div>
            <div className="navbarRight">
                <MenuIcon
                    className="navbarHamburger"
                    fontSize="large" onClick={() => setOpen(!open)}
                />
                {open && (
                    <div className="navbarRightHiddenMenu"
                        style={{
                            backgroundColor: darkMode ? "#222" : "white",
                            color: darkMode ? "white" : "black"
                        }}>
                        <a href="#home" className="navbarText">
                            {bosnian ? "Uvod" : "Intro"}
                        </a>
                        <a href="#about" className="navbarText">
                            {bosnian ? "O Meni" : "About"}
                        </a>
                        <a href="#projects" className="navbarText">
                            {bosnian ? "Projekti" : "Projects"}
                        </a>
                        <a href="#contact" className="navbarText">
                            {bosnian ? "Kontakt" : "Contact"}
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar