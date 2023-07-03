import React from 'react';
import { motion } from "framer-motion";

// import './Marquee.css';
// import 'tailwindcss/tailwind.css';

const Marquee = () => {
  const data = [
    <><motion.div
    // className="box"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }} class="mb-12 md:mb-0">
        <div class="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">Maria Smantha</h5>
        <h6 class="mb-4 font-medium text-primary dark:text-[#ee5253]">
        University of Cambridge
        </h6>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
          id officiis hic tenetur quae quaerat ad velit ab hic.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul class="mb-0 flex justify-center">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
        </ul>
      </motion.div></>,
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3' },
    { id: 4, title: 'Card 4', description: 'This is card 4' },
    { id: 5, title: 'Card 5', description: 'This is card 5' },
  ];

  return (
    <div className="overflow-x-scroll whitespace-nowrap px-10">
      {data.map((card) => (
        <div key={card.id} className="inline-block w-48 h-36 bg-gray-200 mr-4 p-4">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
