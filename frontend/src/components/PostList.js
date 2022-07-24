import React, {useEffect, useState} from "react";
import Axios from "axios"
import Post from "./Post";
import { useAppContext } from "store";

const apiUrl = "http://localhost:8000/api/posts/"

function PostList(){
    const { store: { jwtToken } } = useAppContext(); // Context API 를 활용해서 모든 컨포넌트에서 (JWT 토큰) 정보 공유
    const [postList, setPostList] = useState([]);

    useEffect( () => {
        Axios.get(apiUrl)
        .then(response => {
            const { data } = response;
            console.log("loaded response:", response);
            setPostList(data)
        })
        .catch(error => {
            // error.response
        })
        console.log("mounted")
    }, []);

    return (
        <div>
            {postList.map(
                post => {
                    return <Post post={post} key={post.id} />
                }
            )}
        </div>
    );
}

export default PostList;