import Post from "../post/Post";

export default function User({item,chosenPost}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={() => {
                <Post/>

            }}>Click
            </button>
        </div>
    )
}