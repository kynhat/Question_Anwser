import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Dropdown,
  Button,
  Popconfirm,
  Input,
} from "antd";
import { nextpage } from "../Actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class buttonsubmit extends Component {
  state = {
    size: "large",
  };
  constructor(props) {
    super(props);

    // 'updateloadvideo','document','question','endgame'
    this.state = {
      a: [],
      question:'question'
    };
  }
  onclickanwer() {
    console.log("tesss tatuss-----", this.props.status);
    this.state.a.push(this.props.up,this.props.upeg);
    const { nextpage } = this.props;
    for (var i = 0; i < this.state.a.length; i++) {
      if (  this.props.status=='true') {
      //  this.state.a.push(this.props.upq);
        console.log("ket quass----",this.state.question)
        nextpage(this.state.question);
      }
      nextpage(this.state.a[i]);
      console.log(":teee", this.state.a[i]);
    }
  }
  render() {
    const { size } = this.state;

    return (
      <div >
        <Button
          onClick={(e) => this.onclickanwer()}
          size={size}
          style={{ width: 200,marginTop:50}}
        >
          Next
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ nextpage }, dispatch);

export default connect(null, mapDispatchToProps)(buttonsubmit);
