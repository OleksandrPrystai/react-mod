import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetTodosPage from "./pages/GetTodosPage";
import GetAlbumsPage from "./pages/GetAlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";


function App() {
    return (
        <div className="App">
            <div className="header">
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/todos'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>

            </div>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/todos'} element={<GetTodosPage/>}/>
                    <Route path={'/albums'} element={<GetAlbumsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>


                </Routes>

            </div>


        </div>
    );
}

export default App;
