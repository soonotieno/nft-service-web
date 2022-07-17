import React from "react";
import {Card, Avatar} from "antd"; //Card, Avatar
import "./Post.scss";
import {HeartFilled, UserOutlined} from "@ant-design/icons" //HeartOutlined, HeartFilled, UserOutlined

function Post({post}){
    const {caption, location, photo} = post;
    return (
        <div>
            <Card 
            hoverable cover={<img src={photo} alt={caption} />}
            actions={[<HeartFilled />]}
            >
                <Card.Meta 
                avatar={<Avatar size="large" icon={<UserOutlined />} />} 
                title={location} 
                description={caption} 
                />
            </Card>
            {/* <img src={photo} alt={caption} style={{width:"100px"}}/>
            {caption}, {location} */}
        </div>
        );
}

export default Post;