import React, { useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import './Tour.css';

function Hills() {
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
                backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6d4etxe0movumIcrVnhxJtOsUP7p8308DA&s)',
              }}
            >
              <div className="content">
                <div className="name">Manapad</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Light House</li>
                    <li>Cave</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://live.staticflickr.com/3210/2709472773_94b4c7d617_h.jpg)',
              }}
            >
              <div className="content">
                <div className="name">Dhanushkodi</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Zephyr</li>
                    <li>Sun rise and Sun set</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/marina-beach-1656303766_3ddf37f0ea992c79047a.webp)',
              }}
            >
              <div className="content">
                <div className="name">Marina Beach</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Mount Road Social</li>
                    <li>Chepauk Palace</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/sanguthurai-beach-1656586520_45bf32999fe2b507e9c2.webp)',
              }}
            >
              <div className="content">
                <div className="name">Sanguthurai Beach</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Vivekanantha Rock Memorial</li>
                    <li>Adventure Sports</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://www.holidify.com/images/cmsuploads/compressed/Sun_rise_in_kanyakumari_20181008180645.jpg)',
              }}
            >
              <div className="content">
                <div className="name">Kanniyakumari</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Thiruvalluvar Statue</li>
                    <li>Gandhi Mandapam</li>
                </ul>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: 'url(https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/7b9ff-7-places-to-visit-in-mahabalupuram.jpg?fit=1000%2C667&ssl=1)',
              }}
            >
              <div className="content">
                <div className="name">Mahabalipuram</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum maxime velit tempora accusantium iste reprehenderit! Sunt quibusdam dolor odio.
                </div>
                <p><b>Must Visit</b></p>
                <ul className='list'>
                    <li>Krishnan's Butter Ball</li>
                    <li>Shore Temple</li>
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

export default Hills;
