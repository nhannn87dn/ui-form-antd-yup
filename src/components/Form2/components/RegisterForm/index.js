import React, { useEffect, useState } from "react";
import styles from "./register.module.css";
import { Button, Form, Input, Row, Col, Checkbox } from "antd";
import * as yup from "yup";
import 'antd/dist/antd.css';

function RegisterForm() {
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

  const LoginFormSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(4, "First Name ít nhất 4 ký tự")
      .required("First Name là bắt buộc"),
    lastname: yup
      .string()
      .min(4, "Last Name ít nhất 4 ký tự")
      .required("Last Name là bắt buộc"),
    phone: yup
      .string()
      .min(10, "Phone Number ít nhất 10 ký tự")
      .required("Phone Number là bắt buộc"),
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
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    agreement: yup.string().required("Agreement is required"),
  });

  const yupSync = {
    async validator({ field }, value) {
      await LoginFormSchema.validateSyncAt(field, { [field]: value });
    },
  };

  return (
    <div className={styles.login_box_wrapper}>
      <div className={styles.login_box}>
        <h2 className={styles.form_title}>Register</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
          numquam quisquam saepe sint repellendus ducimus praesentium dolores
          aliquid incidunt aperiam, voluptatibus maiores, pariatur officia.
        </p>
        <Form
          form={form}
          name="register"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Row justify="space-between" gutter={[10, 0]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="firstname" label="Fitst Name" rules={[yupSync]}>
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="lastname" label="Last Name" rules={[yupSync]}>
                <Input type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={[10, 0]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="phone" label="Phone Number" rules={[yupSync]}>
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="email" label="Email" rules={[yupSync]}>
                <Input type="text" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={[10, 0]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="password" label="Password" rules={[yupSync]}>
                <Input.Password />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                name="passwordConfirmation"
                label="Password Confirm"
                rules={[yupSync]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="subcriber" valuePropName="checked">
            <Checkbox name="subcriber" value={1}>
              Yes i want to receice email promotion
            </Checkbox>
          </Form.Item>
          <Form.Item name="agreement" valuePropName="checked" rules={[yupSync]}>
            <Checkbox value={1} name="agreement">
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Create Account
              </Button>
            )}
          </Form.Item>
          <Form.Item>
            <strong>
              Aready have Account? <a href="">Login</a>
            </strong>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;
