import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Input } from "antd";
import logoImg from "../src/assets/images/Icon.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import FormItemLabel from "antd/es/form/FormItemLabel";
import { FaPlus } from "react-icons/fa";
const Home = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div>
      <Row className="list_container">
        <Col className="list_box" offset={7} span={10}>
          <div className="logo_img">
            <img src={logoImg} alt="" />
          </div>
          <div className="list_title">
            <h1>List of Taks</h1>
            <p>Facilite sua ida ao supermercado!</p>
          </div>
          <div>
            <Form
              form={form}
              name="horizontal_login"
              layout="inline"
              onFinish={onFinish}
            >
              <Form.Item
                name="item"
                rules={[
                  {
                    required: true,
                    message: "Please input your item!",
                  },
                ]}
              >
                <Input
                  className="listInput"
                  placeholder="Item"
                />
              </Form.Item>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input your description!",
                  },
                ]}
              >
                <Input
                className="listInput"
                  placeholder="Description"
                />
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
                  <button
                  className="btn"
                    htmlType="submit"
                    disabled={
                      !clientReady ||
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    <FaPlus size={20} color="white"/>
                  </button>
                )}
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
