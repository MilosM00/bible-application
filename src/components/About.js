import React from "react";
import "./About.css";
import imageMoses from "../images/moses.jpg";
import imageJacob from "../images/jacob.jpg";
import imageMosesEgypt from "../images/moses-egypt.jpg"

const About = () =>{
    return(

        <div className="about">
            
            <p className="title-about">About The Bible</p>

            <p className="intro-about">
                The Bible. It is one of the most influential books in human history. It explores the big questions of why we exist.
                It is inspired many people to do amazing things. And confused many others. You probably have one sitting around somewhere.
            </p>

            <div className="inline-one">
                <img src={imageMoses} className="moses-image" alt="" />

                <p className="info-one">
                    <b>What is the Bible actually?</b> <br />

                    The Bible is the small library of books that all emerged from the history of the people of ancient Israel.
                    And in one sense, they were just like any other ancient civilization, but among them was a long line of individuals called prophets.
                    They viewed Israel's story as anything but ordinary. They saw it as a central part of what God was doing for all humanity.
                </p>

            </div>

            <div className="inline-two">
                <p className="info-two">
                    <b>About Prophets</b> <br />

                    They expertly crafted the Hebrew language to write epic narratives and very sophisticated poetry.
                    They were masters of metaphor and storytelling, and they leveraged all of this to explore life's most complicated questions about death and life and the human struggle.
                    And these texts were produced over a thousand-year period starting with Israel's origins in Egypt and then leading up to their kingdom with their first temple. And so on...
                </p>

                <img src={imageJacob} className="jacob-image" alt="" />
            </div>

            <div className="jewish-section">
                <p className="info-three">
                    <b>About Jewish Bible</b> <br />

                    In Hebrew it is called by an acronym: TaNaK. <br />
                    And the Jewish people beleve that trough all of these literary works God speaks to his people.
                </p>

                <div className="inline-three">

                    <div className="law">
                        <p className="title-jewish">TORAH</p>
                        <p className="translate">"LAW"</p>
                        <p className="explain">
                            The T stands for Torah, sometimes called the Law.
                            That is Israel's five book doundation story.
                        </p>
                    </div>

                    <div className="prophets">
                        <p className="title-jewish">NEVI'IM</p>
                        <p className="translate">"PROPHETS"</p>
                        <p className="explain">
                            The N stands for Nevi'im, the Hebrew word for prophets.
                            And this section consists of the historical books that tell Israel's story from the prophets point of view.
                            Then you get the poetic books of the prophets themselves.
                        </p>
                    </div>

                    <div className="writings">
                        <p className="title-jewish">KETUVIM</p>
                        <p className="translate">"WRITINGS"</p>
                        <p className="explain">
                            The K stands for Ketuvim, the Hebrew word for writings.
                            This is a fiverse collection of poetic books, wisdom books, and more narrative.
                        </p>
                    </div>

                </div>

            </div>

            <div className="inline-four">

                <img src={imageMosesEgypt} className="moses-egypt-image" alt="" />

                <p className="info-four">
                There were other Jewish writings being produced during the Second Temple period.
                    And these texts were also highly valued in Jewish communities.
                    Among that, there was debate from ancient times about whether or not some of these should be considered part of their Scriptures.
                </p>
                
            </div>


        </div>

    );
};

export default About;