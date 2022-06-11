import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import * as yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,

} from "react-icons/ai";
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
    name: yup.string().min(4, 'Tên ít nhất 4 ký tự').required('Tên là bắt buộc'),
    password: yup.string().min(8, 'Password ít nhất 8 ký tự').required('Password là bắt buộc')
  });
  
  const yupSync = {
    async validator({ field }, value) {
      await HiFormSchema.validateSyncAt(field, { [field]: value });
    },
  };
  

export default function SigupForm({ bg_style }) {
  
  
  const [form] = Form.useForm();

  return (
    <div className="devices_mockup sigupform" style={bg_style}>
      <div className="wrapper_main">
        <h2  className="title">Signup</h2>
        <div className="wrapper_form">
          <Form
            form={form}
            name="singup"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            initialValues = {{
                name: '',
                password: ''
            }}
          > 
            <div className="form_text">
                <p className="notice">Looks like you don't have an account. Let's create a new account for <strong>jane.doe@gmail.com</strong> </p>
            </div>
            <Form.Item name="name" label='{<span></span>}' rules={[yupSync]}>
                <Input name="name" type="text" placeholder="Name" size="large" block="true" />
            </Form.Item>
            <Form.Item name="password" label='{<span></span>}' rules={[yupSync]}>
             <Input.Password
                  id="password-sigup"
                  name="password"
                  size="large"
                  placeholder="Password"
                  iconRender={(visible) => (visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />)}
                />
            </Form.Item>
            <div className="form_footer">
                <p className="notice">By selecting Agree and continue below, I agree to <span className="notice_green">Terms of Service and Privace Policy</span></p>
            </div>
            <Button type="primary" htmlType="submit" size="large" block="true">
              Agre and Continue
            </Button>
            
            
          </Form>
        </div>
      </div>
    </div>
  );

}
