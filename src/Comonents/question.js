import React, { Component } from "react";
import { checkquestion } from "../Actions";
import Anwers from "./anwers";
import Core from "./endgame";

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
import BTSM from "../Comonents/buttonsubmit";

class question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "fffff",
    };
  }
  state = {
    size: "large",
  };
  onclickquestion = (id) => {
    const { checkquestion } = this.props;

    if (id) {
      checkquestion(id);
    }
  };
  render() {
    const { size } = this.state;
    console.log("tesst item", this.props.data);

    return (
      <div>
        <div className="AQ container borderx ">
          <div className="row">
            <Anwers item={this.props.item.items} />
            <div className="Question border">
              {this.props.data.App.questions.map((number, index) => (
                <tr style={{ textAlign: "center" }}>
                  <Button
                    onClick={(e) => this.onclickquestion(number.id)}
                    size={size}
                    style={{ width: 200 }}
                  >
                    {number.cau}
                  </Button>
                </tr>
              ))}
            </div>
          </div>
          <div className="px-4">
            <BTSM list={this.props.data.lists} upeg={"endgame"} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ checkquestion }, dispatch);

const mapStateToProps = (state) => ({
  data: state.todos,
  item: state.item,
});

export default connect(mapStateToProps, mapDispatchToProps)(question);
