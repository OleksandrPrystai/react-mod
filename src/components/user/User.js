import './userStyle.css'

export default function User(props) {
    let {user, choseUser} = props
    return (
        <div
            className='userStyle'>{user.id}{' '}{user.name}
            <button onClick={() => {
                choseUser(user);
            }}>details
            </button>
        </div>
    )
}