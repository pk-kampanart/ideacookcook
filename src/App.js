import React,{Component} from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";
import Food from "./page/food";
import ChefProfile from "./page/chef-profile";
import Result from "./page/result";

import List from "./List";

function App (){
    

    return (
        <Router>
        <div>  
            <Switch>
                <Route component={ChefProfile} exact path="/Profile/:id"/>
                <Route component={Result} exact path="/result/:id"/>
                <Route component={props =><Food {...props} myName={"eiei"} myPic={""} myID={"g2gfnWS9W2dfqlA31DhlC5LwttR2"}/>} exact path="/menu/:id"/>

            </Switch>
        </div>
        </Router>
    );
}


export default App;