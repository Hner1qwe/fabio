import React from "react";

const CardNFT = ({ image, title, description, price, timeLeft, author }) => {
  return (
    <div className="bg-[#14253d] max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="relative group">
        <img src={image} alt={title} className="w-full" />
        <div className="absolute inset-0 bg-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 11-7 11-7-3.367-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
          </svg>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-white text-xl font-semibold mb-2 hover:text-cyan-400">
          {title}
        </h2>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex justify-between items-center text-sm border-b border-gray-700 pb-3 mb-3">
          <span className="text-cyan-400 font-semibold">{price} ETH</span>
          <span className="text-gray-400">⏱ {timeLeft}</span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={author.image}
            alt={author.name}
            className="w-8 h-8 rounded-full border border-white"
          />
          <p className="text-gray-400 text-sm">
            Creation of <span className="text-white hover:text-cyan-400">{author.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardNFT;
