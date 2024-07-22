import React from "react";
import heroBackground from './hero_background.png';
import AppButtonClass from "./AppButtonClass";

class HeroSectionClass extends React.Component {
    render() {
        return (
            <header>
                <dev className={"position-relative text-center"}>
                    <img src={heroBackground} width={"100%"}/>
                    <div className={"position-absolute top-0 translate-middle text-white"} style={{
                        left: "20%",
                    }}>
                        <h1 className={"display-1"}>Katie Reed</h1>
                        <br/>
                        <p className={"display-6 "}>Web Developer & Designer</p>
                        <br/>
                        <br/>
                        <br/>
                        <AppButtonClass text={"Contact Me"} width={"50%"}/>
                    </div>

                </dev>

            </header>

        );
    }
}

export default HeroSectionClass;