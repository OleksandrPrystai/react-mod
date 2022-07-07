import {useEffect, useState} from "react";
import AlbumsComponent from "../components/AlbumsComponent";
import {getAlbums} from "../services/Posts.api.services";

export default function GetAlbumsPage() {

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
       getAlbums().then(({data}) => setAlbums([...data]))
    }, [])



    return (
        <div>
            {
                albums.map(value => <AlbumsComponent
                key={value.id}
                item={value}
                />)
            }

        </div>
    )
}