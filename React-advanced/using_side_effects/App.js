import React from "react";
import "./App.css";

function App(){
    const [toggle, setToggle] = React.useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    React.useEffect(() => {
        document.title = toggle ? "Welcome to Little Lemon" : "Using the use Effect hook"
    },[]);

    return(
        <div>
            <h1>Using the side effect hook</h1>
            <button onClick={clickHandler}>
                toggle message
            </button>
            {toggle && <h2>Welcome to Little Lemon</h2>}
        </div>
    )
}

export default App;