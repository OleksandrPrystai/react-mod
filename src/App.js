import './App.css';
import Simson from "./obj/obj";

function App() {
    return (
        <div className="globalBox">
            <Simson
                name={'Bart'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <Simson
                name={'Liza'}
                pic={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}
            />
            <Simson
                name={'Homer'}
                pic={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <Simson
                name={'Marge'}
                pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <Simson
                name={'Maggie'}
                pic={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
            />

        </div>
    );
}

export default App;
