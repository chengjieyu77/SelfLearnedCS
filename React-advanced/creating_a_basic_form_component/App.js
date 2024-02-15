import "./App.css";
import {useState }from 'react';
function App(){
    //create local state for text input
    const[name,setName] = useState("");
    const handleSubmit = (e) =>{
        // prevent the default behavior of calling the root of the server and refreshing the page
        e.preventDefault();
        setName("");
        console.log("Form submitted");
    }
    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        {/* in React, for is a reserverd word, you should use htmlFor for the id name */}
                        <label htmlFor="name">
                            Name:
                        </label>
                        {/* the value prop turn the component into a controlled one and onChange to receive all the changes the keystroke and thus update the state of my input
                            
                        */}
                        
                        <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                        {/* disabled allows the submit button to work only when user types some text 
                        If there is no name provided,the submit button is disabled*/}
                        <button disabled={!name}type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default App;