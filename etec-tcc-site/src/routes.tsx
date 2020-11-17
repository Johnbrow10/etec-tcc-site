import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MapImoveis from './pages/MapImoveis';
import Imoveis from './pages/Imoveis';

function Routes(){
            return(
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/map" component={MapImoveis}></Route>
                        <Route path="/imoveis/:id" component={Imoveis}></Route>
                    </Switch>

                </BrowserRouter>
            )

}

export default Routes;