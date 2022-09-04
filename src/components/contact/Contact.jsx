import "./contact.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../darkThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LanguageContext } from "../../languageContext";
import Fade from "react-reveal/Fade";

const Contact = () => {
    const formRef = useRef();
    const [startSending, setStartSending] = useState(false);
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const language = useContext(LanguageContext);
    const bosnian = language.state.bosnian;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStartSending(true);
        emailjs.sendForm
            ("service_64qv3ms",
                "template_i7p9sij",
                formRef.current,
                "_iGvRwWb7k8Vv93OH"
            )
            .then((result) => {
                console.log(result.text);
                setStartSending(false);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div id="contact" className="contact">
                <div className="contactBg"></div>
                <div className="contactWrapper">
                    <div className="contactLeft">
                        <Fade left cascade>
                            {bosnian ? (
                                <h1 className="contactTitle">Ovako me možete kontaktirati!</h1>
                            ) : (
                                <h1 className="contactTitle">Feel free to contact me!</h1>
                            )}
                            <div className="contactInfo">
                                <div className="contactInfoItem">
                                    <LocalPhoneIcon fontSize="large" className="contactIcon" />
                                    +387 62 196 104
                                </div>
                                <div className="contactInfoItem">
                                    <EmailIcon fontSize="large" className="contactIcon" />
                                    adnan.smajic4431@hotmail.com
                                </div>
                                <div className="contactInfoItem">
                                    <LocationOnIcon fontSize="large" className="contactIcon" />
                                    Topal Osman-paše Sarajevo 71000
                                </div>
                            </div>
                            <div className="contactIconsContainer">
                                <a className="contactIcon" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <LinkedInIcon fontSize="large" className="socialIcon" />
                                </a>
                                <a className="contactIcon" href="https://github.com/" target="_blank" rel="noreferrer">
                                    <GitHubIcon fontSize="large" className="socialIcon" />
                                </a>
                                <a className="contactIcon" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <FacebookIcon fontSize="large" className="socialIcon" />
                                </a>
                            </div>
                        </Fade>
                    </div>
                    <div className="contactRight">
                        <Fade right cascade>
                            {bosnian ? (
                                <p className="contactDesc">
                                    <b>Želite me kontaktirati?</b> Ispunite obrazac ispod i odgovorit
                                    ću što prije.
                                </p>
                            ) : (
                                <p className="contactDesc">
                                    <b>Want to contact me?</b> Fill the form below and I will reply
                                    as soon as I can.
                                </p>
                            )}
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <input
                                    style={{
                                        backgroundColor: darkMode ? "#333" : "white",
                                        color: darkMode ? "white" : "black"
                                    }}
                                    type="text"
                                    placeholder={bosnian ? "Vaše Ime" : "Your Name"}
                                    name="user_name"
                                />
                                <input
                                    style={{
                                        backgroundColor: darkMode ? "#333" : "white",
                                        color: darkMode ? "white" : "black"
                                    }}
                                    type="text"
                                    placeholder={bosnian ? "Naslov" : "Subject"}
                                    name="user_subject"
                                />
                                <input
                                    style={{
                                        backgroundColor: darkMode ? "#333" : "white",
                                        color: darkMode ? "white" : "black"
                                    }}
                                    type="text"
                                    placeholder={bosnian ? "Vaša Email Adresa" : "Your Email Address"}
                                    name="user_email"
                                />
                                <textarea
                                    style={{
                                        backgroundColor: darkMode ? "#333" : "white",
                                        color: darkMode ? "white" : "black"
                                    }}
                                    rows="5"
                                    placeholder={bosnian ? "Poruka" : "Message"}
                                    name="message"
                                />
                                <button>
                                    {startSending
                                        ? (bosnian ? "Šaljem..." : "Sending...")
                                        : (bosnian ? "Pošalji" : "Submit")
                                    }
                                </button>
                                {done && (
                                    (bosnian
                                        ? (<div className="doneText">
                                            <b>Hvala vam,</b> pisat ću nazad ubrzo!
                                        </div>)
                                        : (<div className="doneText">
                                            <b>Thank you,</b> I'll write back soon!
                                        </div>)
                                    )
                                )}
                            </form>
                        </Fade>
                    </div>
                </div>
            </div>
            <div
                className="contactFooter"
                style={{
                    color: darkMode ? "white" : "black"
                }}
            >
                {bosnian ? (
                    "Dizajnirao Adnan Smajić 2022"
                ) : (
                    "Designed by Adnan Smajić 2022"
                )}
            </div>
        </>
    )
}

export default Contact