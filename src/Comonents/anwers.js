import React, { Component } from "react";
import { checkanwer, finish,coreanwser } from "../Actions";
import {
  Layout,
  Menu,
  Breadcrumb,
  Dropdown,
  Button,
  Popconfirm,
  Input,
} from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Question from "./question";
class anwers extends Component {
  state = {
    size: "large",
  };
  constructor() {
    super();
    this.state = {
      ketquadung: [],
      list: [],
    };
  }
  onclickanwer = (dapan) => {
    // console.log("dap an ne",dapan)

    const { checkanwer, finish,coreanwser } = this.props;
    const KQ = this.props.todos.Answer.ketquadung;
    const { ketquadung } = this.state;
    const { list } = this.state;
    console.log("ket qua duoc chon", list);
    ketquadung.push(dapan);
    this.setState({
      ketquadung: [...ketquadung],
    });
    if (dapan === KQ[0]) {
      console.log("KQ", KQ[0]);
      list.push(dapan);
      this.setState({
        list: [...list],
      });
    } else if (dapan === KQ[1]) {
      const { list } = this.state;
      console.log("KQ", KQ[1]);
      list.push(dapan);
      this.setState({
        list: [...list],
      });
    } else if (dapan === KQ[2]) {
      const { list } = this.state;
      console.log("KQ", KQ[2]);
      list.push(dapan);
      this.setState({
        list: [...list],
      });
      console.log("list3", list);
    } else if (dapan === KQ[3]) {
      const { list } = this.state;
      console.log("KQ", KQ[3]);
      list.push(dapan);
      this.setState({
        list: [...list],
      });
     
    }
    finish(list);
    coreanwser(list);
  };
  render() {
    const { size } = this.state;
    return (
      <div className="Answer border">
        <div style={{ width: 10 }}></div>
        {this.props.item &&
          this.props.item[0].dapan.map((item) => (
            <tr style={{ textAlign: "center" }}>
              <Button
                onClick={(e) => this.onclickanwer(item)}
                size={size}
                style={{ width: 200 }}
              >
                {item}
              </Button>
            </tr>
          ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ checkanwer, finish,coreanwser}, dispatch);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(anwers);
