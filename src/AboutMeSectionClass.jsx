import React from "react";
import AppButtonClass from "./AppButtonClass";
import MyResume from './assem_ashraf_flutter_developer.pdf';

class AboutMeSectionClass extends React.Component {
    render() {
        return (
            <section className={"row m-5 p-5"}>
                <h2 className={"col-4 display-3 fw-medium"}
                    style={{
                        color: "#3c3c3c",
                        textShadow: "8px 8px 8px #000000"
                    }}
                >About Me</h2>
                <div className={"col-8"}>
                    <p className={"fs-2"} style={{
                        color: "#7e7e7e",
                    }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo
                    </p>
                    <br/>
                    <a href={MyResume} target={"_blank"}>
                        <AppButtonClass text={"Download Resume"} width={"25%"} height={"100px"}/>
                    </a>
                </div>
            </section>
        );
    }
}

export default AboutMeSectionClass;