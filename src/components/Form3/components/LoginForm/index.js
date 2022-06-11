import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Button, Form, Input, Checkbox, Divider, Row, Col } from "antd";
import * as yup from "yup";
import "antd/dist/antd.css";

function LoginForm() {
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
    email: yup.string("Enter your Email/Phone Number")
    .required("Email/Phone Number is required")
    .test('test-name', 'Enter Valid Phone/Email', 
      function(value) {
        const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const phoneRegex = /^0\d{9}$/; // Change this regex based on requirement
        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);
        if (!isValidEmail && !isValidPhone ){
          return false;
        }
        return true;
      }),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
  });

  const yupSync = {
    async validator({ field }, value) {
      await LoginFormSchema.validateSyncAt(field, { [field]: value });
    },
  };

  return (
    <div className={styles.login__wrapper}>
      <div className={styles.login_form}>
        <img
          height={50}
          src={process.env.PUBLIC_URL + "/statics/img/grovia-logo.svg"}
        />
        <h2 className={styles.title_form}>Login</h2>
        <h3 className={styles.subtitle_form}>Login to your account</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Divider />
        <Form
          form={form}
          name="register_form"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          initialValues={{ remember: true }}
        >

        <Form.Item
                label="Username"
                name="email"
                rules={[yupSync]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[yupSync]}
              >
                <Input.Password />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
              </Col>
              <Col span={12}><a href="" style={{float: 'right'}}>Reset Password ?</a></Col>
              </Row>
            
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                className={styles.my_btn_primary}
                block='true'
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Sign In
              </Button>
            )}
          </Form.Item>
          <Form.Item>
            <strong>
              Don't have an Account yet? <a href="">Register now !</a>
            </strong>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
