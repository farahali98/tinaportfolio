import React from "react";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {faQuoteLeft}from '@fortawesome/free-solid-svg-icons'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
    return (
        <div className="bg-gray-100 testimonilas" >
            <div className="inner">
                <h1 style={{ marginTop: "10%" }}> testimonilas</h1>
                <div className="boarder"></div>
                <div className="rows" style={{ display: "flex" }} >
                    <div className="col">
                        <div className="testimonial">
                            <img src="https://i.imgur.com/b9NyUGm.png" />  </div>
                        <div className="name">Fullname</div>
                            <div className="profession">manager</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        
                        <p> 
                        <FontAwesomeIcon icon={faQuoteLeft} /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when <FontAwesomeIcon icon={faQuoteRight} />
                                    </p>
                                   
                    </div>


                    <div className="col">
                        <div className="testimonial">
                            <img src="https://i.imgur.com/b9NyUGm.png" />  </div>
                        <div className="name">Fullname</div>
                        <div className="profession">designer</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>

                        <p>   <FontAwesomeIcon icon={faQuoteLeft} /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when <FontAwesomeIcon icon={faQuoteRight} />
                                    </p>
                    </div>


                    <div className="col">
                        <div className="testimonial">
                            <img src="https://i.imgur.com/b9NyUGm.png" />  </div>
                        <div className="name">Fullname</div>

                        <div className="profession">Web dev</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                     <p>   <FontAwesomeIcon icon={faQuoteLeft} /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when <FontAwesomeIcon icon={faQuoteRight} />
                                    </p>



                    </div>
                </div>
            </div>


        </div>



    );
};
export default Testimonials;




