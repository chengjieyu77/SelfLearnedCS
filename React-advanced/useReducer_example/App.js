import { useReducer } from "react";

const reducer = (state,action) => {
    if(action.type === "buy_ingrdients") return {money: state.money - 10};
    if(action.type === "sell_a_meal") return {money: state.money + 10};
    return state;
}

function App(){
    const initialState = {money:100};
    const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => diapatch({type:"buy_ingredients"})}>Shopping for veggies!</button>
                <button onClick={() => diapatch({type:"sell_a_meal"})}>Serve a meal to the customer</button>
            </div>
        </div>
    )
}

export default App;