import React from "react";
import {ProgressBar} from "react-bootstrap";

class AppProgressBarClass extends React.Component {
    constructor(props) {
        super();

    }

    render() {
        return <>
            <ProgressBar now={this.props.pregress}
                         animated label={this.props.label}
                         variant={"success"}
                         style={{
                             height: "40px",
                             width: "80%",
                         }}/>
            <br/>
        </>
    }
}

export default AppProgressBarClass;