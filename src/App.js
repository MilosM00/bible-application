import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

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

            <About />

        </div>
    );
};

export default App;