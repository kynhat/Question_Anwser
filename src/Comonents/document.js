import React, { Component } from "react";
import { Checkbox, Button } from "antd";
import BTSM from "../Comonents/buttonsubmit";

class document extends Component {
  constructor() {
    super();
    this.state = {
      size: "large",
      status:[]
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    this.state.status.push(e.target.checked)
    this.setState({
      ...this.state.status,
    })

  }
  render() {
    const { size } = this.state;

    return (
      <div>
        <h1 style={{ margin: 50, marginLeft: 550 }}>
          Acknowledge
          <Button
            size={size}
            style={{ margin: 10, left: 160, borderRadius: 5 }}
          >
            Process
          </Button>
        </h1>
    
        <div className="document">
          fdsfdsfdsfsdfds fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds
          sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf
          fdsfdsfdsfsdfds sdfdsfsdfdsf fdsfdsfdsfsdfds sdfdsfsdfdsf sdfdsf
          <div className="_checkbox">
            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
          </div>
        
        </div>
        <div style={{margin:20,marginLeft:850}}>
        <BTSM upq={"question"} status={this.state.status} />

        </div>
      </div>
    );
  }
}

export default document;
