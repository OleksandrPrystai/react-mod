import './App.css';
import RickAndMorty from "./segment/segment";




function App() {
    return (
        <div className="globalBox">
            <RickAndMorty
            id = {210}
            name = {'Lucy'}
            status = {'Dead'}
            species = {'Human'}
            gender = {'Female'}
            pic = {'https://rickandmortyapi.com/api/character/avatar/210.jpeg'}
            />
            <RickAndMorty
                id = {277}
                name = {' Salesman'}
                status = {'Alive'}
                species = {'Human'}
                gender = {'Male'}
                pic = {'https://rickandmortyapi.com/api/character/avatar/277.jpeg'}
            />
            <RickAndMorty
                id = {439}
                name = {'Veterinary'}
                status = {'Alive'}
                species = {'Human'}
                gender = {'Female'}
                pic = {'https://rickandmortyapi.com/api/character/avatar/439.jpeg'}
            />
            <RickAndMorty
                id = {457}
                name = {'Presenter'}
                status = {'Alive'}
                species = {'Human'}
                gender = {'Male'}
                pic = {'https://rickandmortyapi.com/api/character/avatar/457.jpeg'}
            />
            <RickAndMorty
                id = {644}
                name = {'Old Glorzo'}
                status = {'Dead'}
                species = {'Alien'}
                gender = {'Male'}
                pic = {'https://rickandmortyapi.com/api/character/avatar/644.jpeg'}
            />
            <RickAndMorty
                id = {775}
                name = {'Voiceoverian'}
                status = {'Dead'}
                species = {'Alien'}
                gender = {'unknown'}
                pic = {'https://rickandmortyapi.com/api/character/avatar/775.jpeg'}
            />

        </div>
    );
}

export default App;
