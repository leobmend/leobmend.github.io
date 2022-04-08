import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import githubSvg from '../midia/github.svg';

const getDescriptions = (navigate) => ({
  '': (
    <p className="text-5xl">Choose a Technology!</p>
  ),
  'js': (
    <>
      <h1 className="self-start ml-10 font-bold text-5xl">JavaScript</h1>
      <p className="text-2xl">JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <div className="text-2xl">
        <div className="flex mb-4">
          <p onClick={ () => navigate('/trybe-tunes') } className="mr-5">Trybe Tunes</p>
          <a href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className="mr-5">This Portfolio</p>
          <a href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  'css': (
    <>
      <h1 className="self-start ml-10 font-bold text-5xl">JavaScript</h1>
      <p className="text-2xl">JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
    </>
  )
});

function TechDescription({ tech }) {
  const navigate = useNavigate();
  const [descriptionHtml, setDescriptionHtml] = useState(getDescriptions(navigate)[tech]);
  const [articleStyle, setArticleStyle] = useState('');

  useEffect(() => {
    setArticleStyle('opacity-0');
    setTimeout(() => {
      setDescriptionHtml(getDescriptions(navigate)[tech]);
      setArticleStyle('');
    }, 600);
  }, [tech, navigate]);

  return (
    <article className={ `ease-in-out duration-500 flex flex-col justify-around p-10 items-center
      w-4/6 h-5/6 bg-slate-100 rounded-xl ${articleStyle}` }>
      {descriptionHtml}
    </article>
  )
}

export default TechDescription;
