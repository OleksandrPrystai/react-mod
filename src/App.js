import './App.css';
import Users from "./components/users/Users";
import {getPosts} from "./services";
import {useState} from "react";
import Posts from "./components/posts/Posts";



function App() {

    let [posts, setPosts] = useState([])
    const postLift = (id) => {
        getPosts(id).then(({data}) => setPosts([...data]))
    }

    return (
        <div>

            <div><Users postLift={postLift}/></div>
            <div><Posts posts={posts}/></div>
        </div>
    );
}

export default App;
