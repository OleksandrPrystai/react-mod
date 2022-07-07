import {useEffect, useState} from "react";
import CommentComponent from "./CommentComponent";
import {getComments} from "../services/Posts.api.services";

export default function CommentsComponent({postLift}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(({data}) => setComments([...data]))
    }, [])



    return (
        <div>
            {
                comments.map(value => <CommentComponent
                key={value.id}
                item={value}
                postLift={postLift}
                />)
            }

        </div>
    )
}