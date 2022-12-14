import "./intro.css";
import Picture from "../../img/newSelfie.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'animate.css';
import { useContext } from "react";
import { ThemeContext } from "../../darkThemeContext";
import { LanguageContext } from "../../languageContext";
import Fade from 'react-reveal/Fade';

const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const language = useContext(LanguageContext);
    const bosnian = language.state.bosnian;

    return (
        <div id="home" className="intro">
            <div className="introLeft">
                <div className="introLeftWrapper">
                    <span className="tagsTop">
                        <span
                            className="tags"
                            style={{
                                color: darkMode ? "#0390fc" : "#a85151"
                            }}
                        >
                            &lt;html&gt;
                        </span>
                        <br />
                        <span
                            className="tags topTag"
                            style={{
                                color: darkMode ? "#0390fc" : "#a85151"
                            }}
                        >
                            &lt;body&gt;
                        </span>
                    </span>
                    <Fade left>
                        {bosnian ? (
                            <h2 className="introIntro"><b>Pozdrav</b>, Moje ime je</h2>
                        ) : (
                            <h2 className="introIntro"><b>Hello</b>, My name is</h2>
                        )}
                        <h1 className="introName">Adnan Smajić</h1>
                        <div className="introTitle">
                            <div className="introTitleWrapper">
                                <div className="introTitleItem">Front-end</div>
                                <div className="introTitleItem">Back-end</div>
                                <div className="introTitleItem">Web Developer</div>
                                <div className="introTitleItem">UI/UX Designer</div>
                            </div>
                        </div>
                        {bosnian ? (
                            <p className="introDesc">
                                <b>Dobrodošli</b> u moj online portfolio!
                            </p>
                        ) : (
                            <p className="introDesc">
                                <b>Welcome</b> to my online portfolio!
                            </p>
                        )}
                    </Fade>
                    <span className="tagsBot">
                        <span
                            className="tags botTag"
                            style={{
                                color: darkMode ? "#0390fc" : "#a85151"
                            }}
                        >
                            &lt;/body&gt;
                        </span>
                        <br />
                        <span
                            className="tags"
                            style={{
                                color: darkMode ? "#0390fc" : "#a85151"
                            }}
                        >
                            &lt;/html&gt;
                        </span>
                    </span>
                </div>
                <ExpandMoreIcon fontSize="large" className="arrow" />
            </div>
            <div className="introRight">
                <div className="introBg"></div>
                <Fade right>
                    <img src={Picture} alt="" className="introImg" />
                </Fade>
            </div>
        </div >
    )
}

export default Intro