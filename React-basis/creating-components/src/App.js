import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Apples from './components/props_and_children/Apples';
import Pears from './components/props_and_children/Pears';
import Bag from './components/props_and_children/Bag';
import Card from './components/multiple_components/Card';
import ModeToggler from './components/user_events/ModeToggler';
import NumberGuessing from './components/number_guessing/NumberGuessing';
import Child from './components/child_and_data/Child';
import { useState } from 'react';
import InputComponent from './components/using_hooks/InputComponent';
import RegisterForm from './components/using_hooks/RegisterForm';
import TextInputWithFocusButton from './components/using_hooks/TextInputWithFocusButton'
import MealsProvider from './providers/MealsProvider';
import Counter from './components/healthy_eating_app/Counter';
import MealsList from './components/healthy_eating_app/MealsList';

// //Example of props and children
// function App(){
//   <Bag> 
//     <Apples color="yellow" number="5" />
//     <Pears friend="Peter" />
//   </Bag>,
// }


// //Example of multiple components
// function App(){
//   <div className='App'>
//     <h1>Task: Add three Card elements</h1>
//     <Card h2="First card's h2" h3 = "First card's h3"/>
//     <Card h2="Second card's h2" h3 = "Second card's h3"/>
//     <Card h2="Third card's h2" h3 = "Third card's h3"/>
//   </div>
// }

// //Example of event handling
// function App() {
//   return (
    
//   <ModeToggler/>
  
//   );
// }

// //a simple number-guessing game.
// function App(){
//   return (
//     <NumberGuessing/>
//   );
// }

// //An example of data in Child and Parent
// function App(){
//   const date =  new Date();

//   return(
//     <div>
//       <h1>Insert the Child component</h1>
//         <Child message={date.toLocaleTimeString()}/>
//     </div>
//   )
  
// }

// //examples of using hooks
// function App(){
//     // return(
//     //     <InputComponent/>
//     // )
//     // return(
//     //     <RegisterForm/>
//     // )
//     return(
//         <TextInputWithFocusButton/>
//     )
// }

// //healthy eating app managing states
// //example of using context API 
// function App(){
//     return(
//         <div className="App">
//             <MealsProvider>
//                 
//                 <MealsList />
//                  <Counter />
//             </MealsProvider>
            
//         </div>
//     )
// }

////example of using useReducer
// import {useReducer} from 'react';

// const reducer = (state, action) =>{
//     if (action.type === 'ride') return {money: state.money + 10};
//     if(action.type === 'fuel') return {money: state.money -50};
//     return new Error();
// }

// 
// function App(){
//     const initialState = {money:100};
//     const[state,dispatch] = useReducer(reducer, initialState);

//     return(
//         <div className='App'>
//                 <h1>Wallet: {state.money}</h1>
//                 <div>
//                     <button onClick={() => dispatch({type:'ride'})}>A new coustomer!</button>
//                     <button onClick={() => dispatch({type:'fuel'})}>Refill the tank!</button>
//                 </div>
//         </div>
//     )
// }

// //Managing state in React Task Lab .fruits
// import Fruits from "./components/fruits/Fruits";
// import FruitsCounter from "./components//fruits/FruitsCounter";
// import React from "react";

// function App() {
//   const [fruits] = React.useState([
//         {fruitName: 'apple', id: 1},
//         {fruitName: 'apple', id: 2},
//         {fruitName: 'plum', id: 3},
//   ]);
//   return (
//     <div className="App">
//       <h1>Where should the state go?</h1>
//       <Fruits fruits={fruits}/>
//       <FruitsCounter nums={fruits.length}/>
//     </div>
//   );
// }

//example of how to use navigation in react app
import {Routes, Route,Link} from 'react-router-dom';
import Homepage from './components/the_navbar/Homepage';
import AboutMe from './components/the_navbar/AboutMe';
import Contact from './components/creating_a_route/Contact';

function App(){
  return(
    <div className='App'>
      <nav className='nav'> 
        <Link to="/" className="nav-items">Homepage</Link>
        <Link to="/about-me" className="nav-items">AboutMe</Link>
        <Link to="/contact" className="nav-items">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  )
}




export default App;
