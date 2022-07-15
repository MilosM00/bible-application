import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Chapter from "./components/Chapter";

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

    const [dataApi, setDataApi] = React.useState("");

    const [newVerse, setNewVerse] = React.useState(true)
    const [book, setBook] = React.useState("genesis");
    const [chapter, setChapter] = React.useState("6");
    const [verse, setVerse] = React.useState("14");

    React.useEffect(() =>{

        const findChapter = async () =>{

            const response = await fetch(`https://bible-api.com/${book}${chapter}:${verse}`);
            const data = await response.json();
            setDataApi(data);

        };
        findChapter();

    }, [newVerse]); // eslint-disable-line react-hooks/exhaustive-deps

    const bookOnChange = (e) =>{
        setBook(e.target.value);
    };

    const chapterOnChange = (e) =>{
        setChapter(e.target.value);
    };

    const verseOnChange = (e) =>{
        setVerse(e.target.value);
    };

    const findEvent = () =>{
        setNewVerse(!newVerse);
    };

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

            <Chapter 
                dataApi={dataApi.text}
                findEvent={findEvent}
                book={book}
                chapter={chapter}
                verse={verse}
                bookOnChange={bookOnChange}
                chapterOnChange={chapterOnChange}
                verseOnChange={verseOnChange}
            />

        </div>
    );
};

export default App;