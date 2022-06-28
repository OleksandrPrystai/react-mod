import Posts from "../posts/Posts";

export default function User({item}){
    return(
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>{

            }}>Click</button>
        </div>
    )
}