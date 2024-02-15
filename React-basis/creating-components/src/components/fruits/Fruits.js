

function Fruits(props) {
    // const [fruits] = React.useState([
    //     {fruitName: 'apple', id: 1},
    //     {fruitName: 'apple', id: 2},
    //     {fruitName: 'plum', id: 3},
    // ]);

    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits