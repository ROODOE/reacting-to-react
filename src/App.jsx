import React, { useState } from 'react';
import Greeter from './components/greeter.jsx';


const App = () => {
    const [userName, setUserName] = useState('');
    const [loaded, setloaded] = useState(false);

    const handleToggle = () => {
        setloaded(!loaded);
    };


    if (loaded === false) {
       return "Website is Loading...",
        <button onClick={handleToggle}>Toggle</button>
       
    } 
    return (
        <div>
            <h1>Hello There!</h1>
            <Greeter phrase="Hello there" name="Cody"></Greeter>
            <Greeter phrase="Hello there" name="John"></Greeter>
            <Greeter phrase="Hello there" name="Jacob" />
            <input value={userName} onChange={e => setUserName(e.target.value)} />
            <p>You are logging in as {userName}.</p>
        </div>
    )
}

export default App;