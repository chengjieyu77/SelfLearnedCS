function DessertsList(props) {
  // Implement the component here.
  const data = props.data;
  const filteredCal = data.filter(dessert => dessert.calories <500);
  const sortedCal = filteredCal.sort((desserta,dessertb) => desserta.calories - dessertb.calories);
  const formatItems = sortedCal.map(dessert =>{
    return(
      <li>${dessert.name} - ${dessert.calories}cal</li>
    )
  })

  return(
    <div>
        <ul>
            {formatItems}
        </ul>
    </div>
    
  );
}

export default DessertsList;

// const DessertsList = (props) => {
//   const lowCaloriesDesserts = props.data
//     .filter((dessert) => {
//       return dessert.calories < 500;
//     })
//     .sort((a, b) => { 
//       return a.calories - b.calories; 
//     })
//     .map((dessert) => { 
//       return ( 
//         <li>
//           {dessert.name} - {dessert.calories} cal 
//         </li> 
//       ); 
//     }); 
//   return <ul>{lowCaloriesDesserts}</ul>; 
 
//  }
//  export default DessertsList; 
