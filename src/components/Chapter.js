import React from "react";
import "./Chapter.css";

const Chapter = (props) =>{
    return(

        <>
            <section id="id-verse">

                <div className="chapter">

                    <p className="title-chapter">Find the Verse</p>

                    <div className="overlay-inputs">

                        <label>BOOK</label>
                        <input 
                            type="text" 
                            onChange={props.bookOnChange} 
                            value={props.book}
                        />

                        <label>CHAPTER</label>
                        <input 
                            type="number" 
                            onChange={props.chapterOnChange} 
                            value={props.chapter} 
                        />

                        <label>VERSE</label>
                        <input 
                            type="number" 
                            onChange={props.verseOnChange} 
                            value={props.verse} 
                        />

                    </div>
                    
                        <button className="button-find" onClick={props.findEvent}>Find</button>

                    <p className="verse">{props.dataApi}</p>

                </div>

            </section>
        </>


    );
};

export default Chapter;