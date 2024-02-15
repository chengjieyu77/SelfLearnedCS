import { useRef } from "react";
function TextInputWithFocusButton(){
    //When you invoke the useRef hook, it will return a ref object. The ref object has a property named current.
    const inputEl = useRef(0);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return(
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

export default TextInputWithFocusButton