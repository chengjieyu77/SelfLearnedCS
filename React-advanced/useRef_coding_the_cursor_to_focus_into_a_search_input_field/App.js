import React from "react";

function App(){
    const formInputRef = React.useRef(null);
    const focusInput = () =>{
        formInputRef.current.focus();
    }
    //React will create the input elements DOM node and render it on the screen. This DOM node is assigned as the value of the current property of the ref object. This makes it possible to access the input DOM node and all its properties and values using the syntax formInputRef.current
    return(
        <>
            <h1>Using useRef to access underlying DOM</h1>
            <input ref={formInputRef} type="text"/>
            <button onClick={focusInput}>Focus input</button>
        </>
    )
}

export default App;