import React, { useEffect, useState } from 'react';
import githubSvg from '../midia/github.svg';
import docsSvg from '../midia/docs.svg';

const h1DivStyle = "my-2 sm:my-auto flex self-start ml-10 font-bold text-3xl md:text-4xl 2xl:text-5xl";
const h2Style = "my-2 sm:my-auto self-start ml-10 font-bold text-xl md:text-2xl 2xl:text-3xl";
const pStyle = "my-1 sm:my-auto self-start text-lg sm:text-2xl text-justify";
const pProjectStyle = `${pStyle} ease-in-out duration-500 hover:bg-black hover:rounded-full hover:text-white py-1 px-2 mr-3`;

const getDescriptions = {
  '': (
    <p className="font-bold text-center my-auto text-2xl md:text-3xl 2xl:text-5xl">Choose a Technology!</p>
  ),
  'js': (
    <>
      <div className={ h1DivStyle }>
        <h1 className="mr-5">JavaScript</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className={ pStyle }>
        JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.
      </p>
      <h2 className={ h2Style }>Projects</h2>
      <div className="my-auto">
        <div className="flex">
          <a href="https://leobmend.github.io/trivia-game" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trivia Game</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trivia-game" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trybe Tunes</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <a href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trybewarts Form</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className={ pProjectStyle }>This Portfolio</p>
          <a className="self-center" href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  'css': (
    <>
      <div className={ h1DivStyle }>
        <h1 className="mr-5">CSS</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className={ pStyle }>
        Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen.
      </p>
      <h2 className={ h2Style }>Projects</h2>
      <div className="my-auto">
        <div className="flex">
          <a href="https://leobmend.github.io/trivia-game" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trivia Game</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trivia-game" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trybe Tunes</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <a href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trybewarts Form</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className={ pProjectStyle }>This Portfolio</p>
          <a className="self-center" href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "html": (
    <>
      <div className={ h1DivStyle }>
        <h1 className="mr-5">HTML</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className={ pStyle }>
        Hypertext Markup Language (HTML) is the primary markup language found on the internet. Every HTML page has a series of elements that create the content structure of a web page or application.
      </p>
      <h2 className={ h2Style }>Projects</h2>
      <div className="my-auto">
        <div className="flex">
          <a href="https://leobmend.github.io/trivia-game" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trivia Game</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trivia-game" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trybe Tunes</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <a href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trybewarts Form</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className={ pProjectStyle }>This Portfolio</p>
          <a className="self-center" href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "react": (
    <>
      <div className={ h1DivStyle }>
        <h1 className="mr-5">React</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className={ pStyle }>
        React is an open-source JavaScript library that is specialized in helping developers build user interfaces, or UIs. React also allows us to create reusable UI components.
      </p>
      <h2 className={ h2Style }>Tools</h2>
      <p className={ pStyle }>
        <span className="font-bold">Context API -</span> Context is a global state manager, providing a way to pass data through the component tree without having to pass props down manually at every level.
      </p>
      <p className={ pStyle }>
        <span className="font-bold">Hooks -</span> Hooks let you use state and other React features without writing a class. Power to functional components!
      </p>
      <h2 className={ h2Style }>Projects</h2>
      <div className="my-auto">
        <div className="flex">
          <a href="https://leobmend.github.io/trivia-game" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trivia Game</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trivia-game" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <a href="https://leobmend.github.io/trybe-tunes" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trybe Tunes</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
        <div className="flex">
          <p className={ pProjectStyle }>This Portfolio</p>
          <a className="self-center" href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "redux": (
    <>
      <div className={ h1DivStyle }>
        <h1 className="mr-5">Redux</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className={ pStyle }>
        Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
      </p>
      <h2 className={ h2Style }>Projects</h2>
      <div className="my-auto">
        <div className="flex">
          <a href="https://leobmend.github.io/trivia-game" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trivia Game</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trivia-game" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "jest": (
    <>
      <div className={ h1DivStyle }>
        <h1 className="mr-5">Jest</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://jestjs.io/" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className={ pStyle }>
      Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.
      </p>
      <h2 className={ h2Style }>Tools</h2>
      <p className={ pStyle }>
        <a 
          className="font-bold" target="_blank" rel="noreferrer"
          href="https://testing-library.com/docs/react-testing-library/intro/"
        >
          RTL -
        </a> React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.
      </p>
      <h2 className={ h2Style }>Projects</h2>
      <div className="my-auto">
        <div className="flex">
          <a href="https://leobmend.github.io/trivia-game" target="_blank" rel="noreferrer">
            <p className={ pProjectStyle }>Trivia Game</p>
          </a>
          <a className="self-center" href="https://github.com/leobmend/trivia-game" target="_blank" rel="noreferrer">
            <img className="ease-in-out duration-500 hover:translate-x-2 bg-black rounded-full" src={ githubSvg } alt="Github repository" />
          </a>
        </div>
      </div>
    </>
  ),
  "tailwind": (
    <>
      <div className={ h1DivStyle }>
        <h1 className="mr-5">Tailwind CSS</h1>
        <a className="ease-in-out duration-500 hover:translate-x-2 self-center"
          href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img className="w-6" src={ docsSvg } alt="Documentation" />
        </a>
      </div>
      <p className={ pStyle }>
        A utility-first CSS framework packed with classes like <span className="font-semibold">flex</span>, <span className="font-semibold">pt-4</span>, <span className="font-semibold">text-center</span> and <span className="font-semibold">rotate-90</span> that can be composed to build any design, directly in markup.
      </p>
      <h2 className={ h2Style }>Projects</h2>
      <div className="my-auto">
        <div className="flex">
          <p className={ pProjectStyle }>This Portfolio</p>
          <a className="self-center" href="https://github.com/leobmend/leobmend.github.io" target="_blank" rel="noreferrer">
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
    <article className={ `ease-in-out duration-500 flex flex-col p-4 lg:p-10 items-center
      w-11/12 h-5/6 bg-slate-100 rounded-xl overflow-auto ${articleStyle}` }>
      {descriptionHtml}
    </article>
  )
}

export default TechDescription;
