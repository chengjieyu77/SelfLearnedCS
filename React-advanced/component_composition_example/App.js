
const Button = ({children,backgroundcolor}) => {
    return <button style={{backgroundcolor}}>{children}</button>;
};

const Alert = ({children}) => {
    return(
        <>
            <div className="Overlay" />
            <div className="Alert">{children}</div>
        </>
    );
};

const DeleteButton = () => {
    return <Button backgroundcolor="red">Delete</Button>
}

function App(){
    return (
        <div className="App">
            <header>Little Lemon Restaurant</header>
            <Alert>
                <h1>Delete Account</h1>
                <p>
                    Are you sure you want to delete the account?
                </p>
                <DeleteButton />
            </Alert>
        </div>
    )
}

export default App;