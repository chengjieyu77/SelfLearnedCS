function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>
    function clickHandler(){
        darkModeOn = !darkModeOn;
        if(darkModeOn==true){
            console.log("Dark mode is on")
        }else{
            console.log("Light mode is on")
        }
    }
    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={clickHandler}>
                Click me
            </button>
        </div>
    );
}

export default ModeToggler