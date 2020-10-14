import React, { useEffect } from 'react';
import Header from './Component/Header';
import "./App.css"
import Sidebar from "./Component/Sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from "./Component/Chat"
import Login from './Component/Login';
import { useStateValue } from './Component/StateManager/StateProvider';
function App() {
    const [{ user }, dispatch] = useStateValue()
    useEffect(() => {


    }, [])
    return (
        <div className="app">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                        <>
                            <Header />
                            <div className="app__body">
                                <Sidebar />
                                <Switch>
                                    <Route path="/room/:roomId">
                                        <Chat />
                                    </Route>
                                    <Route path="/">
                                        <h1>WElCome Screen</h1>

                                    </Route>
                                </Switch>
                            </div>
                        </>
                    )}

            </Router>

        </div>
    );
}

export default App;
