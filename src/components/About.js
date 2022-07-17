import React from "react";
import "./About.css";
import imageMoses from "../images/moses.jpg";
import imageJacob from "../images/jacob.jpg";
import imageMosesEgypt from "../images/moses-egypt.jpg"
import imagesAdamEve from "../images/adam-eve.jpg";
import imagesJesus from "../images/jesus.jpg";
import imageJesusApostles from "../images/jesus-two.jpg";

const About = () =>{
    return(

        <>
            <section id="id-about">

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

                    <div className="inline-five">

                        <p className="info-five">
                            <b>Why did they put together all those different writings?</b> <br />
                            All together these texts tell an epic story about how God is working through these people to bring order
                            and beauty out of chaos of our world. And it all builds up to a hope for a new leader who would come and renew all creation.
                        </p>

                        <img src={imagesAdamEve} alt="" className="image-adam-eve" />

                    </div>

                    <div className="improve">
                        <div className="overlay-improve">

                            <div>
                                <p className="icons"><i className="fa fa-book"></i></p>
                                <p>Read The Bible</p>
                            </div>

                            <div>
                                <p className="icons"><i className="fa fa-arrow-up"></i></p>
                                <p>Improve Yourself</p>
                            </div>

                            <div>
                                <p className="icons"><i className="fa fa-shield"></i></p>
                                <p>Learn History</p>
                            </div>

                        </div>

                    </div>

                    <div className="inline-six">

                        <img src={imagesJesus} alt="" className="image-jesus" />

                        <p className="info-six">
                            <b>The story of Jesus Christ</b> <br />
                            A few centuries later after the Second Temple period a Jewish prophet comes on to the scene named Jesus of Nazareth.
                            He claimed he was carrying the TaNaK story forward. Jesus did a bunch of amazing stuff and he was killed.
                            But his followers claimed that he is resurrected. And they said that Jesus was that long-awaited leader who would restore the world.
                        </p>

                    </div>

                    <div className="inline-seven">

                        <p className="info-seven">
                            <b>About the Apostles</b> <br />
                            Jesus's earliest followers, called apostles, they composed new literary works about the story of Jesus.
                            They called this good news or the Gospel. They formed an account called Acts about the spread of the Jesus movement outside of Israel,
                            and then these circulated letters to different Jesus communities all around the ancient world. <br />
                            The apostles wrote all of this as the fulfillment of that epic story found in the TaNaK, and they were continuing the literary genius of the Jewish tradition.
                            They also believed that God was speaking to his people through these texts alongside the Scriptures of Israel.
                        </p>

                        <img src={imageJesusApostles} alt="" className="image-jesus-apostles"/>

                    </div>

                    <p className="title-one">What is in my Bible?</p>

                    <p className="info-eight">
                        The Cristian movement has taken different forms over 2000 years.
                        And from the beginning all Christians recognized the TaNaK and the New Testament as Scripture.
                        And for centuries much of the Second Temple literature was read as part of the biblical tradition.
                    </p>

                    <div className="inline-eight">

                        <div className="other-div">

                            <p className="title-two">The Catholic Curch</p>

                            <p className="more-info-eight">
                                They eventually made it official and called some of the books from this collection the deuterocanonical books.
                            </p>

                        </div>

                        <div className="more-text-div">

                            <p className="title-two">The Protestant Christians </p>
                            <p className="more-info-eight">
                                In the 1500s during the Reformation, Protestant Christians  wanted to go back to the oldest writings of the prophets and apostles.
                                So they accepted only the Old and New Testaments.
                            </p>

                        </div>

                        <div className="other-div">

                            <p className="title-two">The Orthodox Curch</p>
                            <p className="more-info-eight">
                                They used even more books from this Second Temple literature than the Catholic Church.
                            </p>

                        </div>

                    </div>


                </div>
            </section>
        </>


    );
};

export default About;