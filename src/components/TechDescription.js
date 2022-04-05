import React, { useEffect, useState } from 'react';

const descriptions = {
  '': (
    <p className="text-4xl">Choose a Technology!</p>
  ),
  'js': (
    <>
      <h1 className="self-start ml-10 font-bold text-5xl">JavaScript</h1>
      <p className="text-xl">JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <ul>
        <li>Trybe Tunes</li>
        <li></li>
      </ul>
    </>
  )

}

function TechDescription({ tech }) {
  const [descriptionHtml, setDescriptionHtml] = useState(descriptions[tech]);
  const [articleStyle, setArticleStyle] = useState('');

  useEffect(() => {
    setArticleStyle('opacity-0');
    setDescriptionHtml(descriptions[tech]);
    setTimeout(() => {
      setArticleStyle('');
    }, 2000);
  }, [tech]);

  return (
    <article className={ `ease-in-out duration-500 flex flex-col justify-around p-10 items-center
      w-9/12 h-5/6 bg-slate-100 rounded-xl ${articleStyle}` }>
      {descriptionHtml}
    </article>
  )
}

export default TechDescription;
