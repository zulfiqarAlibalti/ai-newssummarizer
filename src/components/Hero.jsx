import React from "react";

import { logo, newslogo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={newslogo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/zulfiqarAlibalti", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        News Articles Summary  with <br className='max-md:hidden' />
        <span className='blue_gradient '>AI-News Summarizer</span>
      </h1>
      <h2 className='desc'>
      Simplify your news reading experience with 'News Articles Summarize with AI-News Summarizer API', an intuitive web application that swiftly condenses lengthy articles into concise summaries, it offers a seamless platform for users to effortlessly stay informed without the hassle of lengthy reading.
      </h2>
    </header>
  );
};

export default Hero;
