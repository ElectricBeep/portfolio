import "./about.css";
import Tools from "../../img/tools.png";
import { LanguageContext } from "../../languageContext";
import { useContext } from "react";
import { ThemeContext } from "../../darkThemeContext";
import Blob from "../../img/blob.svg";
import Fade from "react-reveal/Fade";

const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const language = useContext(LanguageContext);
    const bosnian = language.state.bosnian;

    return (
        <div id="about" className="about">
            <div className="aboutLeft">
                <Fade left>
                    <div className="aboutCard" style={{ backgroundColor: darkMode && "#4e524f" }}>
                        <img src={Tools} alt="" className="aboutImg" />
                    </div>
                </Fade>
            </div>
            <Fade right cascade>
                <div className="aboutRight">
                    <h1 className="aboutTitle">
                        {bosnian ? ("O Meni") : ("About Me")}
                    </h1>
                    {bosnian ? (
                        <p className="aboutSub">
                            Moje ime je Adnan Smajić i ja sam samouki, full stack, web developer.
                        </p>
                    ) : (
                        <p className="aboutSub">
                            My name is Adnan Smajić and I am a self-taught,
                            full stack, web developer.
                        </p>
                    )}
                    {bosnian ? (
                        <p className="aboutDesc">
                            Ubrzo nakon što sam završio fakultet, shvatio sam da karijera u
                            polju komunikacija nije nešto što želim pokušati ostvariti. Na
                            prijedlog prijatelja sam se okušao u programiranju,
                            i ubrzo otkrio novu strast - web development. Počeo sam učiti
                            nove vještine na freeCodeCamp websajtu. Nekoliko mjeseci kasnije
                            počeo sam praviti prve stvarne projekte, čije unaprijeđene verzije
                            možete pogledati niže u sekciji Projekti.
                        </p>
                    ) : (
                        <p className="aboutDesc">
                            After graduating from university and obtaining my degree, I realized
                            that a career in communications isn't something I want to pursue.
                            On my friend's recommendation I tried to get into programming,
                            and soon, I discovered my passion - web development. I began my
                            development journey with the freeCodeCamp website. A few months
                            later, I started building my first real-life projects, some of
                            which you can see below in my projects section.
                        </p>
                    )}
                    <div className="aboutBottomSection">
                        {bosnian ? (
                            <p className="aboutBottomSectionText">
                                Na slici lijevo, možete vidjeti listu tegnologija
                                koje sam koristio u izradi svojih projekata.
                            </p>
                        ) : (
                            <p className="aboutBottomSectionText">
                                On the left, you can see a list of
                                technologies I have used to build my projects.
                            </p>
                        )}
                    </div>
                    <div className="aboutBg"></div>
                </div>
            </Fade>
            <img src={Blob} alt="" className="aboutSvg" />
        </div>
    )
}

export default About