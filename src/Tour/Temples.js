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
                backgroundImage: 'url(https://www.savaari.com/blog/wp-content/uploads/2024/01/rameswaram-temple-1656167436_f2c551193bb7d4bc6f70-1-1.webp)',
              }}
            >
              <div className="content">
                <div className="name">Rameshwaram</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Gandhamadhana Parvatham</li>
                    <li>Hanuman Temple</li>
                    <li>Dr. A.P.J. Abdul Kalam Memorial</li>
                    <li>Agnitheertham</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/72/28/54/360_F_372285492_u9rq4L6pl3FgUoTRT59kbWh4fFYdoh3Z.jpg)',
              }}
            >
              <div className="content">
                <div className="name">Thiruvanamalai</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Gingee Fort</li>
                    <li>Sathanur Dam</li>
                    <li>Sri Ramana Ashram</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/meenakshi-amman-temple-1656170467_cfebe78d69f069f881aa.webp)',
              }}
            >
              <div className="content">
                <div className="name">Meenachi Amman Temple</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Thirumalai Nayakkar Palace</li>
                    <li>Gandhi Memorial Museum</li>
                    <li>Arulmigu Koodal Azhagar Temple</li>
                    <li>Samanar Jain Hills, Keelakuyilkudi</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://t4.ftcdn.net/jpg/00/84/76/89/360_F_84768999_pj2ZS8BULh1Q4XuAHGrUR1MM9PdFknJP.jpg)',
              }}
            >
              <div className="content">
                <div className="name">Thanjavur</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Thanjavur Palace</li>
                    <li>Saraswathi Mahal Library</li>
                    <li>Schwartz Church</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://i0.wp.com/traveldiaryparnashree.com/wp-content/uploads/2019/06/Sri-Ranganathaswamy-Temple-Cover.jpg?resize=745%2C600&ssl=1)',
              }}
            >
              <div className="content">
                <div className="name">Sri Ranganathaswamy Temple</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Rockfort Temple</li>
                    <li>Jambukeswarar Temple</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://tamilnadutourisminfo.com/wp-content/uploads/2019/07/Tiruchendur-Subramani-Swamy-Temple.jpg)',
              }}
            >
              <div className="content">
                <div className="name">Thiruchendur</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Courtallam</li>
                    <li>Uvari</li>
                    <li>Kayalpattinam</li>
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
