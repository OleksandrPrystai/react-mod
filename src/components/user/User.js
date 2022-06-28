export default function User({item,postLift}) {

    let onClick = () => {
        postLift(item.id);

    }

    return (
        <div>
            {item.name}
            <button onClick={onClick}>posts</button>

        </div>
    )
}