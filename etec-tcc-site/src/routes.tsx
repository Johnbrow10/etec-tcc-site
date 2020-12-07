import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MapImoveis from './pages/MapImoveis';
import Imoveis from './pages/Imoveis';
import ListImoveis from './pages/List';

function Routes(){
            return(
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/map" component={MapImoveis}></Route>
                        <Route path="/imovel/:id" component={Imoveis}></Route>
                        <Route path="/list" component={ListImoveis}></Route>
                    </Switch>

                </BrowserRouter>
            )

}

export default Routes;