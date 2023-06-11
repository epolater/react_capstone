
import SpecialsCarousel from './Carousel';


const TestimonialCard = (props) => {
    return (
        <div class="testimonialcard">
            <div class="tst-rating">{props.rating}</div>
            <div class="tst-profile">
                <div class="tst-imagecontainer">
                    <img class="tst-image" src={props.image} alt="person"></img>
                </div>
                <div class="tst-name">{props.name}</div>
            </div>
            <div class="tst-text">{props.text}</div>
        </div>
    )
}


const Main = () => {
    return (
        <main>
            <section class="highlights-container">
                <div class="highlights-header">
                    <div>This week's specials!</div>
                    <button>Online Menu</button>
                </div>
                <div class="menucards-container">
                    <SpecialsCarousel />
                </div>
            </section>

            <section class="testimonials-container">
                <h1>Testimonials</h1>
                <div class="tst-cardscontainer">
                    <TestimonialCard
                        rating={"4.5"}
                        text={"This is the best Mediterranean food that I've ever had!"}
                        name={"Micheal"}
                        image={require("../assets/images/profile1.jpeg")}
                    />
                    <TestimonialCard
                        rating={"5.0"}
                        text={"Great food, welcoming staff, cozy atmosphere."}
                        name={"Jane"}
                        image={require("../assets/images/profile2.avif")}
                    />
                    <TestimonialCard
                        rating={"4.8"}
                        text={"The food here really refreshed me after a late night shift at the local supply depot"}
                        name={"Brian"}
                        image={require("../assets/images/profile3.jpeg")}
                    />
                    <TestimonialCard
                        rating={"4.7"}
                        text={"The food here was fire!! Everyone should try this place out at least once"}
                        name={"Jasmine"}
                        image={require("../assets/images/profile4.jpeg")}
                    />
                </div>
            </section>

            <section class="about-container">
                <div class="about-article">
                    <div class="about-title-main">Little Lemon</div>
                    <div class="about-title-sub">Chicago</div>
                    <article>
                    Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.
                    </article>
                </div>
                <div class="about-imagecontainer">
                    <img class="about-image1" src={require("../assets/images/about1.jpg")} alt="about1"></img>
                    <img class="about-image2" src={require("../assets/images/about2.jpg")} alt="about2"></img>
                </div>
            </section>
        </main>
    )
}

export default Main