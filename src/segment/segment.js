export default function RickAndMorty(props) {
    let {id,name,status,species,gender,pic} = props
    let globalBox = 'rend'
    return(
        <div className={globalBox}>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={pic} />

        </div>
    )
}