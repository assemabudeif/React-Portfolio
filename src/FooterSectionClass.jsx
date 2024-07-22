import React from "react";
import AppButtonClass from "./AppButtonClass";
import "./FooterSectionClass.css"

class FooterSectionClass extends React.Component {
    render() {
        return (
            <footer className={"row text-white text-start"} style={{
                backgroundColor: "#15120d",
                padding: "25px",
            }}>
                <div className={"col-lg-3 col-sm-6"}>
                    <h4>GET IN TOUCH</h4>
                    <i className="fa-solid fa-envelope" color={"white"}/>
                    &nbsp;
                    <span>assemabudeif@gmail.com</span>
                    <br/>
                    <i className="fa-regular fa-id-card" color={"white"}/>
                    &nbsp;
                    <span>+20 11 255 225 30</span>
                </div>
                <div className={"col-lg-6 col-sm-6 text-center align-content-center align-items-center"}>
                    <AppButtonClass text={"CONTACT ME"}/>
                </div>
                <div className={"col-lg-3 col-sm-6 text-end"}>
                    <a href={"https://wwww.linkedin.com/in/assemabudeif"} target={"_blank"} className={"link-light"}>
                        <i className="fa-brands fa-linkedin" style={{fontSize: "1.5em"}}></i>
                    </a>  &nbsp;&nbsp;
                    <a href={"https://wwww.facebook.com/assemabudeif"} target={"_blank"} className={"link-light"}>
                        <i className="fa-brands fa-facebook-f" style={{fontSize: "1.5em"}}></i>
                    </a>  &nbsp;&nbsp;
                    <a href={"https://wwww.x.com/assemabudeif"} target={"_blank"} className={"link-light"}>
                        <i className="fa-brands fa-twitter" style={{fontSize: "1.5em"}}></i>
                    </a>
                    <br/>
                    <p>Copyright © 2021</p>
                </div>

            </footer>
        );
    }
}

export default FooterSectionClass;