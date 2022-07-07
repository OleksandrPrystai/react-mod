export default function CommentComponent({item,postLift}) {

    let onClick = () => {
        postLift(item.id);
    }



    return (
        <div>
            <h6>{item.body}</h6>
            <button onClick={onClick}>posts</button>

        </div>
    )
}