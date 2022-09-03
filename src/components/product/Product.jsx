import "./product.css";
import { SiNextdotjs, SiExpress, SiNodedotjs, SiReact } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiOutlineInfoCircle, AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../../darkThemeContext";

const Product = ({ img, link, name, gitHub, icons, title1, text1, title2, text2 }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="p">
            <div className="pProjectName">
                <div className="pProjectNameText">{name}</div>
                <div className="pProjectIcons">
                    <div className="pProjectIconsHoverMenu">
                        <AiOutlineInfoCircle className="pProjectIcon" />
                        <div
                            style={{
                                backgroundColor: darkMode ? "rgba(34, 34, 34, 0.95)" : "rgba(255, 255, 255, 0.9)",
                                color: darkMode ? "white" : "black"
                            }}
                            className="pProjectInfoContainer"
                        >
                            <div className="pProjectInfoTexts">
                                <h3>{title1}</h3>
                                <div>{text1}</div>
                                <h3>{title2}</h3>
                                <div>{text2}</div>
                            </div>
                        </div>
                    </div>
                    <a className="pIcon" href={gitHub} target="_blank" rel="noreferrer">
                        <AiFillGithub className="pProjectIcon" />
                    </a>
                </div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="pAnimation">
                    <img src={img} alt="" className="pImg" />
                </div>
            </a>
            <div className="toolsContainer">
                <div className="toolsContent">
                    <p className="toolsContentText">Built with:</p>
                    <div className="toolsContentIcons">
                        {(icons === "react")
                            ?
                            <SiReact className="toolIconReact" />
                            :
                            (icons === "next")
                                ?
                                <SiNextdotjs className="toolIconNext" />
                                :
                                <>
                                    <DiMongodb className="toolIconMongo" />
                                    <SiExpress className="toolIconExpress" />
                                    <SiReact className="toolIconReact" />
                                    <SiNodedotjs className="toolIconNode" />
                                </>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Product