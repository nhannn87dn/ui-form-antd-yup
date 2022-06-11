import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import * as yup from "yup";
import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoApple

} from "react-icons/io";

/**
 * https://stackblitz.com/edit/react-97lr5s?file=index.js
 * @param 
 */

    const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const HiFormSchema = yup.object().shape({
    email: yup.string().email('Email  không hợp lệ').required('Email là bắt buộc')
  });
  
  const yupSync = {
    async validator({ field }, value) {
      await HiFormSchema.validateSyncAt(field, { [field]: value });
    },
  };
  

export default function HiForm({ bg_style }) {
  
  
  const [form] = Form.useForm();

  return (
    <div className="devices_mockup hiform" style={bg_style}>
      <div className="wrapper_main">
        <h2 className="title">Hi</h2>
        <div className="wrapper_form">
          <Form
            form={form}
            name="checkemail"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            initialValues = {{
                email: ''
            }}
          >
            <Form.Item name="email" label='{<span></span>}' rules={[yupSync]}>
                <Input name="email" type="email" placeholder="Email" size="large" block="true" />
            </Form.Item>
            <Button type="primary" htmlType="submit" size="large" block="true">
              Continue
            </Button>
            <div className='or'>or</div>
            <div className="social_login">
                <Button type="default" htmlType="submit" size="large" block="true">
                    <IoLogoFacebook /> Continue with Facebook
                </Button>
                <Button type="default" htmlType="submit" size="large" block="true">
                    <IoLogoGoogle /> Continue with Google
                </Button>
                <Button type="default" htmlType="submit" size="large" block="true">
                    <IoLogoApple /> Continue with Apple
                </Button>
            </div>
            <div className="form_footer">
                <p className="notice">Don't have an acount ? <span className="notice_green">Signup</span></p>
                <p className="notice notice_green">Forgot your password?</p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );

}
