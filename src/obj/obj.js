export default function Simson(props) {
    let {name,pic} = props
    let classFam = 'fam'
    return (
        <div className={classFam}>
            <h2>{name}</h2>
            <img src={pic} />

        </div>
    )

}