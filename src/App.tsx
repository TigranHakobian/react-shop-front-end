import React from 'react';
import Home from "./components/Home/Home";
import shopingCart from "./components/ShopingCart/ShopingCart"
import AboutUs from "./components/AboutUs"


import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/shopingCart" component={shopingCart} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
