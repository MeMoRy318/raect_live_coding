import React from 'react';
import {Cars} from "./components/Cars/Cars";
import {CarContextJSX} from "./hok/CarContext";
import {PageCarForm} from "./Pages/PageCarForm/PageCarForm";

const App = () => {
    return (
        <div>
            <CarContextJSX>
                <PageCarForm/>
                <Cars/>
            </CarContextJSX>
        </div>
    );
};

export {App};
