import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Avatar, Image } from "antd";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,

} from "react-icons/ai";
import * as yup from "yup";


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

  const LoginFormSchema = yup.object().shape({
    password: yup.string().min(8, 'Password ít nhất 8 ký tự').required('Password là bắt buộc')
  });
  
  const yupSync = {
    async validator({ field }, value) {
      await LoginFormSchema.validateSyncAt(field, { [field]: value });
    },
  };
  

export default function LoginForm({ bg_style }) {
  
  
  const [form] = Form.useForm();
  const avatar  = process.env.PUBLIC_URL + '/statics/img/ayo-ogunseinde-1.jpg';

  return (
    <div className="devices_mockup loginform" style={bg_style}>
      <div className="wrapper_main">
        <h2 className="title">Login</h2>
        <div className="wrapper_form">
          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            initialValues = {{
                password: ''
            }}
          >
            <div className="profiles">
              <Avatar
                size={50}
                src={
                  <Image
                    src={avatar}
                    style={{
                      width: 50,
                    }}
                  />
                }
              />
              <div className="profile_info">
                  <p className="profile_name">Jane Dow</p>
                  <p className="profile_email">jane.doe@gmail.com</p>
              </div>
            </div>
           
             <Form.Item name="password" label='{<span></span>}' rules={[yupSync]}>
             <Input.Password
                  id="password-login"
                  name="password"
                  size="large"
                  placeholder="Password"
                  iconRender={(visible) => (visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />)}
                />
            </Form.Item>
           
            <Button type="primary" htmlType="submit" size="large" block="true">
              Continue
            </Button>
            
            <div className="form_footer">
                <p className="notice notice_green">Forgot your password?</p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );

}
