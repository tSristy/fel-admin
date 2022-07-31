import React from 'react';
import * from 'react-router-dom';
import { Route, Redirect } from 'react-router';


const ProtectedRoute = ({children, ...rest}) => {
    
    return (
        <Route>
            {...rest}
            render = {({location}) =>
             ? (children) 
             : (
                 <Redirect 
                 to = {
                     { pathname: '/login',
                    state: {from: location}}
                 }
             )  
            }
        </Route>
    );
};

export default ProtectedRoute;