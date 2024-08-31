import React, { useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import './Tour.css';

function Temples() {
  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNextClick = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    };

    const handlePrevClick = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <>
      <div>
        <Navbar/>
        <link
          crossOrigin="anonymous"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          referrerPolicy="no-referrer"
          rel="stylesheet"
        />
        <div className="container">
          <div className="slide">
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/547/443/desktop-wallpaper-21-rameshwaram-rameswaram-thumbnail.jpg)',
              }}
            >
              <div className="content">
                <div className="name">KODAIKANAL</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Guna Cave</li>
                    <li>Silent Valley View Point</li>
                    <li>Kodaikanal Lake</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://t3.ftcdn.net/jpg/04/16/66/30/360_F_416663024_MDoibghS8s4oxHea0PjRezhDJy17RtPd.jpg)',
              }}
            >
              <div className="content">
                <div className="name">OOTY</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Doddabetta Peak</li>
                    <li>Pykara Lake</li>
                    <li>Pine Tree Forest</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)',
              }}
            >
              <div className="content">
                <div className="name">MUNNAR</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Mattupetty Dam</li>
                    <li>Anamudi Peak</li>
                    <li>Kundala Dam Lake</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)',
              }}
            >
              <div className="content">
                <div className="name">COONOOR</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Wellington Lake</li>
                    <li>Lamb's Rock</li>
                    <li>Tiger Hill Cemetery</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://i.pinimg.com/736x/f6/64/8e/f6648e4cfe240078699cde4bc0826955.jpg)',
              }}
            >
              <div className="content">
                <div className="name">WAYANAD</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Banasura Sagar Dam</li>
                    <li>Chembra Peak</li>
                    <li>Pookot Lake</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)',
              }}
            >
              <div className="content">
                <div className="name">Yercaud</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Pagoda Dam</li>
                    <li>Botanical Garden</li>
                    <li>Monfort School</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="button">
            <button className="prev">
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button className="next">
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Temples;
