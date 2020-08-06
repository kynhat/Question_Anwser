import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { loginform } from "../Actions";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
const INPUT_TYPE = {
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
};

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 10 },
};

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this._onUpdateItem = this._onUpdateItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  _onUpdateItem(changeObject, type) {
    if (type == INPUT_TYPE.EMAIL) {
      this.setState({
        email: changeObject.target.value,
      });
    }
    if (type == INPUT_TYPE.PASSWORD) {
      this.setState({
        password: changeObject.target.value,
      });
    }
  }
  handleInput() {
    const { loginform, data } = this.props;
    console.log("Tesst data", data);
    if (loginform) {
      loginform(this.state.email, this.state.password);
    }
  }
  render() {
    return (
      <div className="login ">
        <Form
          {...layout}
          style={{ margin: 100, marginLeft: 20 }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="text"
              value={this.state.email}
              onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.EMAIL)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              type="text"
              value={this.state.password}
              onChange={(e) => this._onUpdateItem(e, INPUT_TYPE.PASSWORD)}
            />
          </Form.Item>

          <Form.Item {...tailLayout} name="email" valuePropName="checked">
            <Checkbox>Send to email</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout} name="pdf" valuePropName="checked">
            <Checkbox>export to PDF</Checkbox>
          </Form.Item>
          <button className="add-todo" onClick={this.handleInput}>
            Add Todo
          </button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loginform }, dispatch);

const mapStateToProps = (state) => ({
  data: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(login);
