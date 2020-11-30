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
<<<<<<< HEAD
                        <Route path="/imovel" component={Imoveis}></Route>
=======
                        <Route path="/imovel/:id" component={Imoveis}></Route>
>>>>>>> 05a522ad3ba63dde78f4271aa9b546c8f1b28868
                    </Switch>

                </BrowserRouter>
            )

}

export default Routes;