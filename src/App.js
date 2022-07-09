import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

const App = () =>{

    const [showList, setShowList] = React.useState(true);

    const listEvent = () =>{
        setShowList(!showList);
    };

    const scrollUp = () =>{
        document.body.scrollIntoView();
    };

    const homeEvent = () =>{
        setShowList(true);
        document.body.scrollIntoView();
    }

    return(

        <div>
            
            <Navbar 
                showList={showList}
                listEvent={listEvent}
                scrollUp={scrollUp}
                homeEvent={homeEvent}
            />

            <Home />

            <About />

        </div>
    );
};

export default App;