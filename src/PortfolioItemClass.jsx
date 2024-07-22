import React from "react";

class PortfolioItemClass extends React.Component {
    render() {
        return (
            <div style={{
                width: '30em',
                height: '20em',
                backgroundColor: this.props.color,
                textAlign: "center",
                verticalAlign: "middle",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                color: "white",
                margin: "1em",
                boxShadow: "5px 10px 25px " + this.props.color,
            }}>
                <h2>
                    {this.props.title}
                </h2>
            </div>
        );
    }
}

export default PortfolioItemClass;