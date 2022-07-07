import CommentsComponent from "../components/CommentsComponent";
import {useState} from "react";
import {getPosts} from "../services/Posts.api.services";
import PostsComponent from "../components/PostsComponent";


export default function CommentsPage() {

    let [posts, setPosts] = useState([])
    const postLift = (id) => {
        getPosts(id).then(({data}) => setPosts(data))
    }

    return (
        <div>
            <div><PostsComponent posts={posts}/></div>
            <div><CommentsComponent postLift={postLift}/></div>


        </div>
    )
}