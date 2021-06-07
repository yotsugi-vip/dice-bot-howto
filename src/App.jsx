import React from 'react';
import Header from "./components/Header";
import Howto from "./components/Howto";
import Images from "./components/Images";

const App = () => {
    return (
        <div id="AppContainer">
            <Header />
            <Images />
            <Howto />
        </div>
    )
}

export default App;