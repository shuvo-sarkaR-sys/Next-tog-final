import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
 import s5 from  '../assets/s7.jpg'
 import s6 from '../assets/s6.jpg'
 import s4 from '../assets/s4.jpg'
import FadeUp from './FadeUp';
 
const allCardsData = [
  { id: 1, img: s1, content: '"I learnt graphic design and earn from freelancing. Even from this remote village, by dreams got their wings."' },
  { id: 2, img: s2, content: '"Who could ever image - a paperless, affordable, simple insurance could return 80% of my last medical expenses?"' },
  { id: 3, img: s3, content: '"True fibre broadband at my village home brought the entire world to me. I must get ready for it."' },
  { id: 4,img: s5, content: `"You don't always come access a company like my Nexttog that empowers you to become a better version of you."` },
  { id: 5, img: s6, content: '"Thousands of students from 45+ nations learn to be resilient from the bangladesh playing you toys.' },
  { id: 6, img: s4, content: '"My work gave me the power to push aside socail norms and break gender stereotypes. I am a new Me."' },
];

const Stories = () => {
  const [cards, setCards] = useState(allCardsData);

  const handleRemove = (id) => {
    let updatedCards = cards.filter(card => card.id !== id);

    // If cards become less than 3, refill from start to make infinite
    if (updatedCards.length < 3) {
      const refillCount = 3 - updatedCards.length;
      const refillCards = allCardsData.slice(0, refillCount);
      updatedCards = [...updatedCards, ...refillCards];
    }

    setCards(updatedCards);
  };

  return (
    <div>
     <FadeUp> <h1 className="text-center titile-text text-[#6a2d73] text-5xl font-bold my-6">OUR STORIES</h1></FadeUp>
      <div className="w-full max-w-5xl md:my-20 mx-auto p-4">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: {     // Mobile: 1 card
              slidesPerView: 1,
            },
            640: {   // Tablet: 2 cards
              slidesPerView: 2,
            },
            1024: {  // Desktop: 3 cards
              slidesPerView: 3,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card.id + '-' + index}>
             <FadeUp><div className="relative group bg-white shadow-md rounded-2xl  flex flex-col items-center overflow-hidden justify-center   h-[450px]">
                <button
                  className="absolute md:block hidden md:group-hover:block z-40  text-3xl top-2 right-2 text-black "
                  onClick={() => handleRemove(card.id)}
                >
                  ×
                </button>
                <img className='w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110' src={card.img} alt="" />
             <p className=" absolute bottom-0 pt-4 font-sans text-white bg-black/5 backdrop-blur-xs p-2 text-lg font-bold">{card.content}</p>
              </div></FadeUp> 
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <br />
    </div>
  );
};

export default Stories;
