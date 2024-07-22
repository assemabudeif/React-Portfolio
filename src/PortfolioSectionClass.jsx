import React from "react";
import PortfolioItemClass from "./PortfolioItemClass";

class PortfolioSectionClass extends React.Component {
    portfolioItems = [
        {
            title: "WEB DESIGN",
            color: "#959188",
        },
        {
            title: "MOBILE DESIGN",
            color: "#404040",
        },
        {
            title: "LOGO DESIGN",
            color: "#959188",
        },
        {
            title: "WEB APPLICATION DEVELOPMENT",
            color: "#404040",
        },
        {
            title: "MOBILE APPLICATION DEVELOPMENT",
            color: "#959188",
        },
        {
            title: "BWA DEVELOPMENT",
            color: "#404040",
        },
    ];

    constructor(props) {
        super();
    }

    render() {
        return (
            <section style={{
                padding: "8%",
                textAlign: "start"
            }}>
                <h2 className={
                    "display-3 fw-medium"
                }
                    style={{
                        textShadow: "10px 8px 8px #000000"
                    }}
                >
                    Portfolio
                </h2>
                <br/>
                <br/>
                <br/>
                <div className={"text-white d-flex flex-wrap flex-lg-row justify-content-center"}>
                    {
                        this.portfolioItems.map((item) => {
                            return (
                                <PortfolioItemClass title={item.title} color={item.color}/>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default PortfolioSectionClass;