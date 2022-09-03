import "./productList.css";
import Product from "../product/Product";
import { fullstackProducts, designProducts } from "../../data";
import { useContext, useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { LanguageContext } from "../../languageContext";

const ProductList = () => {
    const [selected, setSelected] = useState("fullstack");
    const [data, setData] = useState([]);

    const language = useContext(LanguageContext);
    const bosnian = language.state.bosnian;

    const list = [
        {
            id: "fullstack",
            title: "Full-stack"
        },
        {
            id: "front-end",
            title: "Front-end"
        }
    ];

    useEffect(() => {
        if (selected === "fullstack") {
            setData(fullstackProducts);
        } else {
            setData(designProducts);
        }
    }, [selected]);

    return (
        <div id="projects" className="pl">
            <div className="plTexts">
                {bosnian ? (
                    <h1 className="plTitle">Pogledajte Neke od Mojih Projekata</h1>
                ) : (
                    <h1 className="plTitle">Take a Look at Some of My Projects</h1>
                )}
                <h2 className="plSubtitle">
                    {bosnian
                        ? ("Da bi testirali full-stack projekte, napravite novi nalog ili se ulogujte koristeći sledeće podatke:")
                        : ("To test full-stack projects either create an account, or feel free to log in with the following credentials:")
                    }
                    <br />
                    <br />
                    <b>John</b>
                    <br />
                    <b>john@gmail.com</b>
                    <br />
                    <b>123456</b>
                    <br />
                </h2>
                <ul>
                    {list.map(item => (
                        <PortfolioList
                            key={item.id}
                            title={item.title}
                            id={item.id}
                            active={selected === item.id}
                            setSelected={setSelected} />
                    ))}
                </ul>
            </div>
            <div className="plList">
                {data.map((product) => (
                    <Product
                        key={product.id}
                        img={product.img}
                        link={product.link}
                        name={product.projectName}
                        gitHub={product.gitHub}
                        icons={product.icon}
                        title1={product.infoTitle1}
                        text1={product.infoText1}
                        title2={product.infoTitle2}
                        text2={product.infoText2}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList