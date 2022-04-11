import React, { useEffect, useState } from 'react';
import githubSvg from '../midia/github.svg';
import docsSvg from '../midia/docs.svg';

const getDescriptions = {
  '': (
    <p className="text-5xl">Choose a Technology!</p>
  ),
  'js': (
    <>
      <div className="flex self-start ml-10 ">
        <h1 className="font-bold mr-5 text-5xl">JavaScript</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className="text-2xl">JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <div className="text-2xl">
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">Trybe Tunes</p>
          </a>
          <a href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
            <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">Trybewarts Form</p>
          </a>
          <a href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">This Portfolio</p>
          <a href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  'css': (
    <>
      <div className="flex self-start ml-10 ">
        <h1 className="font-bold mr-5 text-5xl">CSS</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className="text-2xl">Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <div className="text-2xl">
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">Trybe Tunes</p>
          </a>
          <a href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
            <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">Trybewarts Form</p>
          </a>
          <a href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">This Portfolio</p>
          <a href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "html": (
    <>
      <div className="flex self-start ml-10 ">
        <h1 className="font-bold mr-5 text-5xl">HTML</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className="text-2xl">Hypertext Markup Language (HTML) is the primary markup language found on the internet. Every HTML page has a series of elements that create the content structure of a web page or application.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <div className="text-2xl">
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">Trybe Tunes</p>
          </a>
          <a href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
            <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">Trybewarts Form</p>
          </a>
          <a href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">This Portfolio</p>
          <a href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "react": (
    <>
      <div className="flex self-start ml-10 ">
        <h1 className="font-bold mr-5 text-5xl">React</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className="text-2xl">React is an open-source JavaScript library that is specialized in helping developers build user interfaces, or UIs. React also allows us to create reusable UI components.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Tools</h2>
      <p className="text-xl self-start"><span className="font-bold">Context API -</span> Context is a global state manager, providing a way to pass data through the component tree without having to pass props down manually at every level.</p>
      <p className="text-xl self-start "><span className="font-bold">Hooks -</span> Hooks let you use state and other React features without writing a class. Power to functional components!</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <div className="text-2xl">
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">Trybe Tunes</p>
          </a>
          <a href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">This Portfolio</p>
          <a href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "redux": (
    <>
      <div className="flex self-start ml-10 ">
        <h1 className="font-bold mr-5 text-5xl">Redux</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className="text-2xl">Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</p>
      {/* <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <div className="text-2xl">
        <div className="flex mb-4">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className="mr-5">Trybe Tunes</p>
          </a>
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
      </div> */}
    </>
  ),
  "tailwind": (
    <>
      <div className="flex self-start ml-10 ">
        <h1 className="font-bold mr-5 text-5xl">Tailwind CSS</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className="text-2xl">A utility-first CSS framework packed with classes like <span className="font-semibold">flex</span>, <span className="font-semibold">pt-4</span>, <span className="font-semibold">text-center</span> and <span className="font-semibold">rotate-90</span> that can be composed to build any design, directly in markup.</p>
      <h2 className="self-start ml-10 font-bold text-3xl">Projects</h2>
      <div className="text-2xl">
        <div className="flex">
          <p className="ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3">This Portfolio</p>
          <a href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
};

function TechDescription({ tech }) {
  const [descriptionHtml, setDescriptionHtml] = useState(getDescriptions[tech]);
  const [articleStyle, setArticleStyle] = useState('');

  useEffect(() => {
    setArticleStyle('opacity-0');
    setTimeout(() => {
      setDescriptionHtml(getDescriptions[tech]);
      setArticleStyle('');
    }, 600);
  }, [tech]);

  return (
    <article className={ `ease-in-out duration-500 flex flex-col justify-around p-10 items-center
      w-4/6 h-5/6 bg-slate-100 rounded-xl ${articleStyle}` }>
      {descriptionHtml}
    </article>
  )
}

export default TechDescription;
