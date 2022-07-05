import React from "react";
import Navbar from "./components/Navbar";

const App = () =>{

    const [showList, setShowList] = React.useState(false);

    const listEvent = () =>{
        setShowList(!showList);
    };

    return(

        <div>
            
            <Navbar 
                showList={showList}
                listEvent={listEvent}
            />

        </div>
    );
};

export default App;