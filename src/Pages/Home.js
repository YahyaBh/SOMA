import React, { Component, Fragment } from 'react'
import Navbar from '../Components/Navbar'

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <header className='home-header'>
                    <Navbar />
                    <div className='container'>
                        <div className='home-text'>
                            <h1>YOUR DREAM ROOM.</h1>
                            <p>ALL YOU HAVE TO DO , IS CHOOSE</p>
                        </div>
                    </div>
                </header>


                <section className='about-us' id='about'>
                    <div className='container'>
                        <h2 className='text-title-m'>ABOUT <b>SOMA</b></h2>
                        <hr />
                    </div>
                    <div className='container-fluid p-5'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h3 className='small-title-s'>WHY USING SOMA ?</h3>
                                <p className='small-para-s'>The use of ? helps in achieving the intended goal. In Business, it
                                    is used to increase efficiency and effectiveness through communication channels.
                                    The reason why we need some ? to achieve the objectives is because they help us
                                    focus on what is important and take away any distractions from our work. When organizing
                                    information, using a format makes data easier to understand and navigate for future
                                    reference.?</p>
                            </div>

                            <div className='col-lg-6'>
                                <img className='image-about' src='../Images/Home/pexels-pixabay-462235.jpg' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='room' id='room'>
                    <div className='container mb-5'>
                        <h2 className='text-title-p'><b>SOMA</b> ROOMS</h2>
                        <hr style={{ backgroundColor: 'white' }} />
                    </div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='option-room'>
                                    <img className='img-option' src='../Images/Home/options/pexels-medhat-ayad-439227.jpg' />
                                    <div className='content-option-room'>
                                        <h4>ROOM OF ANGEL</h4>
                                        <p><b>ROOM OF ANGEL</b> is a room where all of your stuff set tight and in the right place of every item</p>
                                        <button>SHOW ME THIS ROOM</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='option-room middle-option'>
                                    <img className='img-option' src='../Images/Home/options/pexels-pixabay-265004.jpg' />
                                    <img className='badge-pic' src='../Images/badge-best-seller.png' />
                                    <div className='content-option-room'>
                                        <h4>ROOM OF ANGEL</h4>
                                        <p><b>ROOM OF ANGEL</b> is a room where all of your stuff set tight and in the right place of every item</p>
                                        <button>SHOW ME THIS ROOM</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='option-room'>
                                    <img className='img-option' src='../Images/Home/options/pexels-pixabay-210265.jpg' />
                                    <div className='content-option-room'>
                                        <h4>ROOM OF ANGEL</h4>
                                        <p><b>ROOM OF ANGEL</b> is a room where all of your stuff set tight and in the right place of every item</p>
                                        <button>SHOW ME THIS ROOM</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <button className='show-more-room'>SHOW MORE</button>
                        </div>
                    </div>
                </section>



                <section className='contact' id='contact'>
                    <div className='container mb-5'>
                        <h2 className='text-title-m'>CONTACT <b>SOMA</b></h2>
                        <hr />
                    </div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <p>DO YOU HAVE A QUESTION ?</p>
                                <h2>WRITE TO US</h2>
                            </div>
                            <div className='col-lg-8'>
                                <form className='contact-form' action='' method='post'>
                                    <p>Every field with (*) is required</p>
                                    <label for='full_name'>FULL NAME*</label>
                                    <input type='text' name='full_name' maxLength='28' id='full_name' required />
                                    <label for='email'>EMAIL ADRESS*</label>
                                    <input type='email' name='email' minLength='5' maxLength='30' id='email' required />
                                    <label for='phone_number'>PHONE NUMBER*</label>
                                    <input type='tel' name='phone_number' minLenght='6' maxLenght='24' id='phone_number' />
                                    <label for='message'>MESSAGE*</label>
                                    <br />
                                    <textarea id='message' name='message' cols='50' rows='5'></textarea>
                                    <button className='sub-button' type='submit'>WRITE</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>

                <footer className='footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className='contain-footer-u'>
                                    <h2>WEBSITE</h2>
                                    <ul>
                                        <li><a>HOME</a></li>
                                        <li><a>ABOUT US</a></li>
                                        <li><a>ROOM</a></li>
                                        <li><a>CONTACT</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className='col-lg-3'>
                                <div className='contain-footer-u'>
                                    <h2>WEBSITE</h2>
                                    <ul>
                                        <li><a>HOME</a></li>
                                        <li><a>ABOUT US</a></li>
                                        <li><a>ROOM</a></li>
                                        <li><a>CONTACT</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className='col-lg-3'>
                                <div className='contain-footer-u'>
                                    <h2>WEBSITE</h2>
                                    <ul>
                                        <li><a>HOME</a></li>
                                        <li><a>ABOUT US</a></li>
                                        <li><a>ROOM</a></li>
                                        <li><a>CONTACT</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className='col-lg-3'>
                                <div className='contain-footer-ic'>
                                    <h2>SOCIAL MEDIA</h2>
                                    <div className='row'>
                                        <div className='col-lg-4'><i class="fa-brands fa-twitter"></i></div>
                                        <div className='col-lg-4'><i class="fa-brands fa-facebook-f"></i></div>
                                        <div className='col-lg-4'><i class="fa-brands fa-instagram"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <section className='second-footer'>
                    <div className='container' >
                        <h4>All right reserved | soma.com 2022 &#169;</h4>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Home