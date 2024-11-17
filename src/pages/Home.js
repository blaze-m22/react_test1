import React from 'react'
import Carousel from '../components/Carousel'

const Home=()=> {
    return (
        <div>
            <Carousel />
            <div className="main_body">

                <div id="slideshow1" className="ssimgs"></div>

                <div className="content" id="hcontent">
                    <div className="titles">
                        <h2>Our Services</h2>
                        <p>Our salon offers a wide variety of beauty services</p>
                    </div>

                    <div className="gridcontainer">
                        <div className="griditems">
                            <div className="gridtext">
                                <img alt="" src="https://img.icons8.com/pastel-glyph/60/ffffff/hair-dryer--v2.png" /> <h6>Hairdressing</h6>
                            </div>
                        </div>
                        <div className="griditems">
                            <div className="gridtext">
                                <img alt="" src="https://img.icons8.com/ios-filled/60/ffffff/barber-chair.png" /> <h6>Barber</h6>
                            </div>
                        </div>
                        <div className="griditems">
                            <div className="gridtext">
                                <img alt="" src="https://img.icons8.com/ios-filled/60/ffffff/barber-brush.png" /> <h6>Cosmetics</h6>
                            </div>
                        </div>
                        <div className="griditems">
                            <div className="gridtext">
                                <img alt="" src="https://img.icons8.com/ios-filled/60/ffffff/barber-chair.png" /> <h6>Massages</h6>
                            </div>
                        </div>
                        <div className="griditems">
                            <div className="gridtext">
                                <img alt="" src="https://img.icons8.com/ios-filled/60/ffffff/barber-chair.png" /> <h6>Body Treatments</h6>
                            </div>
                        </div>
                        <div className="griditems">
                            <div className="gridtext">
                                <img alt="" src="https://img.icons8.com/ios-filled/60/ffffff/barber-chair.png" /> <h6>Aroma Therapy</h6>
                            </div>
                        </div>
                    </div>

                    <div className="titles">
                        <h2>Latest blog Posts</h2>
                        <p>Read our tips about makeup, hairdressing and body treatments</p>
                    </div>

                    <div className="review-cards">
                        <div className="r-card">
                            <img alt="" src="images/grid1.jpg" />
                            <div className="c-review">
                                <h3> A spa is a location where mineral-rich spring water</h3>
                                <p>16 March 2019</p>
                                <a>Read more</a>
                            </div>
                        </div>

                        <div className="r-card">
                            <img alt="" src="images/grid1.jpg" />
                            <div className="c-review">
                                <h3> A spa is a location where mineral-rich spring water</h3>
                                <p>16 March 2019</p>
                                <a>Read more</a>
                            </div>
                        </div>

                        <div className="r-card">
                            <img alt="" src="images/grid1.jpg" />
                            <div className="c-review">
                                <h3> A spa is a location where mineral-rich spring water</h3>
                                <p>16 March 2019</p>
                                <a>Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="titles">
                        <h2>Our Client Testimonials</h2>
                        <p>What our customers are saying about us</p>
                    </div>

                    <div className="testimonials-container">
                        <div className="testimonial">
                            <div className="testimonial_details">
                                <img src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_01.jpg" alt="" className="testimonial_image" />
                                <div className="testimonial_side"><h4>Sandra Olson</h4><p>Pharmacist</p></div>
                            </div>
                            <blockquote className="t_quote">
                                Eye shadow is a pigmented powder/cream or substance used to accentuate the eye area, traditionally on, above, and under the eyelids. Many colours may be used at once and blended together to create different effects using a blending brush.                            </blockquote>
                        </div>

                        <div className="testimonial">
                            <div className="testimonial_details">
                                <img src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_03.jpg" alt="" className="testimonial_image" />
                                <div className="testimonial_side"><h4>Thomas Wadsworth</h4><p>Receptionist</p></div>
                            </div>
                            <blockquote className="t_quote">
                                Bronzer gives skin a bit of color and contours the face for a sharper definition or creates a tan-look. Bronzer is considered to be more of a natural look and can be used for everyday wear. Bronzer enhances the color of the face. It comes in either matte, semi-matte/satin, or shimmer finishes.                            </blockquote>
                        </div>

                        <div className="testimonial">
                            <div className="testimonial_details">
                                <img src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_02.jpg" alt="" className="testimonial_image" />
                                <div className="testimonial_side"><h4>Angela Chambers</h4><p>Librarian</p></div>
                            </div>
                            <blockquote className="t_quote">
                                Face powder sets the foundation and under eye concealer, giving it a matte finish while also concealing small flaws or blemishes. It can also be used to bake the foundation, so that it stays on longer and create a matte finish.                            </blockquote>
                        </div>

                        <div className="testimonial">
                            <div className="testimonial_details">
                                <img src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/client_05.jpg" alt="" className="testimonial_image" />
                                <div className="testimonial_side"><h4>Donna Kittrell</h4><p>Computer Analyst</p></div>
                            </div>
                            <blockquote className="t_quote">
                                Most modern barbershops have special barber chairs, and special equipment for rinsing and washing hair. In some barbershops, people can read magazines or watch TV while the barber works.                            </blockquote>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="fabtus">
                        <h2>About Miss India</h2>
                        <p>BeautySpot is an ideal WordPress theme for beauty salons, hairdressers, wellness or spa websites.
                            Clean and fast code is wrapped in unique design and easy-to-use admin area.<br />
                            You can buy this WordPress theme on ThemeForest.</p>
                    </div>
                    <div className="gallery-container">
                        <h2>Latest Gallery Posts</h2>
                        <div className="gallery-post">
                            <img alt="" src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_02-300x300.jpg" />
                            <h3>There is also a growing trend in boutique salons</h3>
                        </div>
                        <hr style={{ width: '90%', marginTop: '5px', marginBottom: '10px' }} />
                        <div className="gallery-post">
                            <img alt="" src="https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/gallery_04-300x300.jpg" />
                            <h3>A manicure is a treatment for the hands</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;