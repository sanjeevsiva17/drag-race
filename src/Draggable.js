import React, { Component } from "react"
import Draggable from "react-draggable"

export default class Drag extends Component {
    handleStart = (e) => { 
        e.stopPropagation(); 
    }
    
    render = () => {
        return (
            // <div className="container">
                <Draggable bounds="parent" onStart={this.handleStart}
                >
                    <div
                        style={{
                            width: this.props.width || "200px",
                            border: "1px solid red"
                        }}
                        className="draggable"
                    >
                        <div style={{ background: "yellow" }}> Title</div>
                        <div
                            style={{
                                height: this.props.height || "30 px",
                                background: this.props.bg || "red"
                            }}
                        >
                            {this.props.children && this.props.children}
                        </div>
                    </div>
                </Draggable>

            // </div>
        )
    }
}