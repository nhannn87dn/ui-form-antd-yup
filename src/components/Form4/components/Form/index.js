import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Button, Form, Input, Row, Col } from "antd";
import * as yup from "yup";
import "antd/dist/antd.css";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";

export default function FormAccount() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const SigupFormSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(4, "First Name ít nhất 4 ký tự")
      .required("First Name là bắt buộc"),
    lastname: yup
      .string()
      .min(4, "Last Name ít nhất 4 ký tự")
      .required("Last Name là bắt buộc"),
    email: yup
      .string()
      .email("Email  không hợp lệ")
      .required("Email là bắt buộc"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const yupSync = {
    async validator({ field }, value) {
      await SigupFormSchema.validateSyncAt(field, { [field]: value });
    },
  };

  const suffix_email = (
    <AiOutlineMail
      style={{
        color: "#ABAFB5",
      }}
    />
  );
  const suffix_name = (
    <FaAddressCard
      style={{
        color: "#ABAFB5",
      }}
    />
  );

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.register_box}>
        <p className={styles.sub_title}>Start For Free</p>
        <h1 className={styles.main_title}>Create New Account</h1>
        <p className={styles.notice}>
          Aready A Member? <a href="http://localhost:3000/">Login</a>
        </p>
        <Form
          form={form}
          name="register2"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Row justify="space-between" gutter={[10, 0]}>
            <Col xs={24} md={12}>
              <Form.Item name="firstname" rules={[yupSync]}>
                <Input
                  type="text"
                  placeholder="Fitst Name"
                  suffix={suffix_name}
                  className={styles.my_input}
                  block='true'
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="lastname"
                rules={[yupSync]}
              >
                <Input
                  type="text"
                  placeholder="Last Name"
                  suffix={suffix_name}
                  className={styles.my_input}
                  block='true'
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="email" rules={[yupSync]}>
            <Input type="text" placeholder="Email" suffix={suffix_email}  className={styles.my_input} />
          </Form.Item>
          <Form.Item name="password" rules={[yupSync]}>
            <Input.Password
              className={styles.mypassword}
              placeholder="Password"
              iconRender={visible => (visible ? <AiOutlineEye color="#ABAFB5" /> : <AiOutlineEyeInvisible color="#ABAFB5" />)}
            />
          </Form.Item>

          <Row justify="space-between" gutter={[10, 0]}>
            <Col xs={24} md={12}>
              <Form.Item>
                <Button
                  type="default"
                  htmlType="button"
                  block="true"
                  className={styles.my_btn_default}
                >
                  Changle Method
                </Button>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.my_btn_primary}
                    block="true"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Create Account
                  </Button>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
