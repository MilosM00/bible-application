import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () =>{

    const [showList, setShowList] = React.useState(true);

    const listEvent = () =>{
        setShowList(!showList);
    };

    return(

        <div>
            
            <Navbar 
                showList={showList}
                listEvent={listEvent}
            />

            <Home />

        </div>
    );
};

export default App;