import React, {useState} from "react";
import { useNavigate  } from "react-router-dom";
import { Card, Form, Input, Button, notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons"
import Axios from "axios";
import { useAppContext } from "store";
import { setToken } from "store";

function Login(){
    const navigate = useNavigate();
    const { dispatch } = useAppContext();
    const [fieldErrors, setFieldErrors] = useState({});

    const onFinish = values => {
        async function fn() {
            const{username, password} = values;
    
            setFieldErrors({});
            
            const data = { username, password};
            try {
                const response = await Axios.post("http://localhost:8000/accounts/token/", data);
                const { 
                    data:{token: jwtToken} 
                }= response;

                dispatch(setToken(jwtToken));

                notification.open({
                    message:"로그인 성공",
                    icon:<SmileOutlined style={{ color: "#108ee9" }}/>
                });
                // navigate("/accounts/login");  // TODO: 이동주소
            }
            catch(error) {
                if (error.response){
                    notification.open({
                        message:"로그인 실패",
                        description: "아이디/암호를 확인해주세요.",
                        icon:<FrownOutlined style={{ color: "#ff3333" }}/>
                    });
    
                    const{data: fieldErrorMessages} = error.response;
                    setFieldErrors(
                        Object.entries(fieldErrorMessages).reduce(
                            (acc, [fieldName, errors]) => {
                            acc[fieldName] = {
                                validateStatus: "error",
                                help: errors.join(" "),
                            };
                            return acc;
                        }, 
                        {}
                        )    
                    );
                }
            }
    
        }
        fn();
    };
    return (
    <Card title="로그인">
        <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
                { required: true, message: 'Please input your username!' },
                { min: 5, message: "5글자 이상 입력해 주세요."}
                
            ]}
            hasFeedback
            {...fieldErrors.username}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                { required: true, message: 'Please input your password!' },
                { min: 4, message: "4글자 이상 입력해 주세요."}
            ]}
            {...fieldErrors.username}
            {...fieldErrors.non_field_errors}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
        </Form>
    </Card>

  );
}

export default Login;