import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import BiH from "../../img/bih.png";
import USA from "../../img/usa.png";
import { useContext } from "react";
import { ThemeContext } from "../../darkThemeContext";
import { LanguageContext } from "../../languageContext";
import Fade from "react-reveal/Fade";

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);

    const handleThemeClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    const hanndleLanguageClick = () => {
        language.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className="toggleWrapper">
            <Fade right>
                <div
                    className="toggle"
                    style={{ backgroundColor: theme.state.darkMode ? "#333" : "#E4E4E4" }}
                >
                    <img src={Sun} alt="" className="toggleIcon" />
                    <img src={Moon} alt="" className="toggleIcon" />
                    <div
                        className="toggleButton"
                        onClick={handleThemeClick}
                        style={{ left: theme.state.darkMode ? 0 : 25 }}
                    ></div>
                </div>
                <div
                    className="toggleLanguage"
                    style={{ backgroundColor: theme.state.darkMode ? "#333" : "#E4E4E4" }}
                >
                    <img src={USA} alt="" className="toggleIcon" />
                    <img src={BiH} alt="" className="toggleIcon" />
                    <div
                        className="toggleButton"
                        onClick={hanndleLanguageClick}
                        style={{ left: language.state.bosnian ? 0 : 25 }}
                    ></div>
                </div>
            </Fade>
        </div>
    )
}

export default Toggle