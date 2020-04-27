import React, { Component } from "react"
import Draggable from "react-draggable"

export default class Drag extends Component {
    handleStart = (e) => { 
        e.stopPropagation(); 
    }
    
    render = () => {
        return (
                <Draggable bounds="parent" onStart={this.handleStart}
                >
                    <div
                        style={{
                            width: this.props.width || "200px",
                            border: "1px solid red"
                        }}
                        
                    >
                        <div className="draggable" style={{ background: "yellow" }}> Title</div>
                        <div
                            style={{
                                height: this.props.height || "30 px",
                                background: this.props.bg || "red"
                            }}
                            onMouseDown={this.handleStart}

                        >
                            {this.props.children && this.props.children}
                        </div>
                    </div>
                </Draggable>

        )
    }
}