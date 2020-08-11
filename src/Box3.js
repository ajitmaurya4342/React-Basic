import React from 'react'

class Box3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
            colorName1: ""
        };
        this.sendData = this.sendData.bind(this)
    }

    sendData = () => {
        this.props.changeColor(this.state.colorName1);
    };

    static getDerivedStateFromProps(props, state) {

        return {
            color: props.color
        };
    }

    render() {
        return (<div className = "div2"
            style = {
                {
                    background: `${this.state.color}`
                }
            } > {
                this.state.color
            } <input type = "text"
            value = {
                this.state.colorName1
            }
            onChange = {
                (e) => this.setState({
                    colorName1: e.target.value
                })
            }
            /> <button onClick = {
                this.sendData
            } > Submit < /button>

            </div>
        );


    }
}

export default Box3;