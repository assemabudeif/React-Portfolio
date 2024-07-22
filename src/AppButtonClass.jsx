import React from 'react';
import {Button} from "react-bootstrap";

class AppButtonClass extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Button style={{
                backgroundColor: "#13100b",
                color: "#ffffff",
                borderColor: "#ffffff",
                borderRadius: "1px",
                fontSize: "25px",
                width: this.props.width,
                height: this.props.height ?? "70px",
            }}>{this.props.text}</Button>
        );
    }
}

export default AppButtonClass;