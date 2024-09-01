import './Aboutus.css'
import Navbar from '../Navbar/Navbar'

export default function Aboutus(){
    return(
        <>
        
        <Navbar/>
        <div className="body1">
       <h1>Vanakkam!!</h1>
        <p>Welcome to Tamil Nadu Travel Tourism! We are your gateway to exploring the rich cultural heritage, vibrant traditions, and stunning landscapes of Tamil Nadu, one of India's most enchanting states. From the majestic temples of Madurai and Thanjavur to the serene beaches of Rameswaram and Kanyakumari, Tamil Nadu offers a unique blend of history, spirituality, and natural beauty.</p>
        <div className="img">
        <img src="https://ttdconline.com/_next/about-us-image-16ad7.png" style={{height:"180px",width:"250px"}}></img>
        <img src="https://ttdconline.com/_next/about-us-image-250d3.png" style={{height:"180px",width:"250px"}}></img>
        <img src="https://ttdconline.com/_next/about-us-image-4dafb.png" style={{height:"180px",width:"250px"}}></img>
        </div>
        <p>Our mission is to provide travelers with an authentic and unforgettable experience of Tamil Nadu. Whether you're seeking adventure, relaxation, or a deep dive into the state's rich cultural tapestry, we have something for everyone. Our team of experienced guides and travel experts is dedicated to curating personalized itineraries that showcase the best of Tamil Nadu, ensuring that every journey is as unique as our guests.At Tamil Nadu Travel Tourism, we believe in responsible and sustainable tourism. We work closely with local communities to promote eco-friendly practices and support regional development. Our goal is to create meaningful travel experiences that not only enrich the lives of our travelers but also contribute to preserving the natural and cultural treasures of Tamil Nadu.</p>
        <div className="img">
        <img src="https://www.atlastravel.in/blog/wp-content/uploads/2018/10/Brihadeeswarar-Temple.jpg" style={{height:"180px",width:"250px"}}></img>
        <img src="https://tse1.mm.bing.net/th?id=OIP.57QifHrhr-L-E-F1LtBOiQHaEL&pid=Api&P=0&h=180" style={{height:"180px",width:"250px"}}></img>
        <img src="https://www.holidify.com/images/cmsuploads/compressed/6713747025_6f4fabe0b3_b_20191219132359.jpg" style={{height:"180px",width:"250px"}}></img>
        </div>
        <h4>Join us on a journey through Tamil Nadu and discover the soul of South India with Tamil Nadu Travel Tourism!</h4>
       <div className="transport">
       <h3 style={{textAlign:"center"}}>Transport</h3>
       <div className="con">
       <img src="https://ttdconline.com/_next/tourism-tab-image-transportation14c64.png" style={{height:"180px",width:"230px"}}></img>
       <div className="t1">
       <p>The Transport Division at present has a fleet of 12 coaches, of which Three are Volvo and Six are AC coaches and Three are Non-AC coaches. TTDC is offering a wide range of package tours covering the entire Southern States.
       Every coach allows passengers to travel with comfort, safety and hygiene while adhering to COVID-19 safety protocols.</p>
       </div>
       </div>
       </div>
       <div className="img">
        <img src="https://tse3.mm.bing.net/th?id=OIP.9-XROvHfrskrtKK07etg6gHaE_&pid=Api&P=0&h=180" style={{height:"180px",width:"250px"}}></img>
        <img src="https://tse3.mm.bing.net/th?id=OIP.E-3z7I__8MWT2VbxLUnYmwHaD4&pid=Api&P=0&h=180" style={{height:"180px",width:"250px"}}></img>
        <img src="https://tse3.mm.bing.net/th?id=OIP.4UW_YzkoOer36kXlw1Z-wQHaEK&pid=Api&P=0&h=180" style={{height:"180px",width:"250px"}}></img>
        </div>
       <h4 className='text'>Join us on a journey through Tamil Nadu and discover the soul of South India with Tamil Nadu Travel Tourism!</h4>
       <div className="book">
      <div className="aboutbook">
        <h2>Book with Us</h2>
        <h6>Plan your trip to Tamil Nadu right away and have a wonderful vacation. Do not forget to share your experience with us!</h6>
      </div>
      <button className="btn">Book Now</button>
       </div>
       </div>
        </>
    )
}
