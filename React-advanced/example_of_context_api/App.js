import "./App.css";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
    const {user} = useUser();
    return (
        <p>
            Hello <span className="UserName">{user.name}</span>
        </p>
    )
}

const Header = () => {
    return(
        <header>
            <h2>Blog App</h2>
            <LoggedInUser/>
        </header>
    )
}

const Page = () => {
    const {user} = useUser();
    return(
        <div>
            <h2>
                What is sd klfn jdf?
            </h2>
             <P>
                testtesttesttesttesttesttest
                testtesttesttesttesttesttesttest
                testtesttesttesttesttest
                testtesttesttest
             </P>
            <p>
                Written by:{user.name}
            </p>
        </div>
    )
}

function App(){
    return(
        <div className="App">
            <Header/>
            <Page/>
        </div>
    )
}

function Root(){
    return <UserProvider>
        <App/>
    </UserProvider>
}

export default Root;