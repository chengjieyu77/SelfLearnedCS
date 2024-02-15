import {useState} from "react";

export default function App(){
    const restaurantName = useState("Lemon");
    console.log(restaurantName);//['Lemon',f]
    return null;
}

//The console logged value is an array with the state variables value being the first item in the array. The second item in the array is the function that will be used to update the state.