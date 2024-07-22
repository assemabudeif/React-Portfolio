import React from "react";
import AppProgressBarClass from "./AppProgressBarClass";

class SkillsSectionClass extends React.Component {
    skillsItems = [
        {
            title: "HTML",
            progress: 90,
        },
        {
            title: "CSS",
            progress: 90,
        },
        {
            title: "JavaScript",
            progress: 70,
        },
        {
            title: "React",
            progress: 70,
        },
        {
            title: "Photoshop",
            progress: 90,
        },
        {
            title: "Adobe XD",
            progress: 70,
        },
        {
            title: "Node.js",
            progress: 60,
        },
        {
            title: "WordPress",
            progress: 50,
        },
    ];

    render() {
        return (
            <section className={"text-white"} style={{
                backgroundColor: "#3d3d3d",
                padding: "8%",
                textAlign: "center"
            }}>
                <h2 className={"display-3"}
                    style={{
                        textShadow: "8px 8px 5px #fff"

                    }}
                >
                    Skills
                </h2>
                <br/>
                <br/>
                <p style={{
                    fontSize: "1.5em",
                    color: "#aeaeae"
                }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <br/>
                <br/>
                <br/>
                <div className={"row"}>
                    <div className={"col-lg-6 col-sm-12"}>
                        <h3>
                            MY FOCUS
                        </h3>
                        <hr width={"30%"} style={{
                            backgroundColor: "white",
                            color: "white",
                            height: "2px",
                            align: "center",
                            margin: "auto",
                        }}/>
                        <br/>
                        <div style={{
                            margin: "auto",
                            width: "27%",
                        }}>
                            <ul className={"list-unstyled text-start fs-5"}>
                                <li>
                                    UI/UX Design
                                </li>
                                <li>
                                    Responsive Design
                                </li>
                                <li>
                                    Web Design
                                </li>
                                <li>
                                    Mobile App Design
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={"col-lg-6 col-sm-12"}>
                        {
                            this.skillsItems.map((item) => {
                                return (
                                    <AppProgressBarClass label={item.title} pregress={item.progress}/>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        );
    }
}

export default SkillsSectionClass;