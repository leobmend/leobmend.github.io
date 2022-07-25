import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import githubSvg from '../midia/github.svg';
import diagonalArrow from '../midia/diagonal-arrow.svg';

const h1DivStyle = 'flex items-center self-start mx-4 my-2 font-bold text-[1.25rem] md:text-4xl';
const h2Style = 'self-start mx-4 my-2 font-bold text-lg md:text-2xl';
const pStyle = 'text-lg md:text-2xl text-justify';

const getDescriptions = {
  '': (
    <p className="font-bold m-auto text-center text-3xl md:text-4xl lg:text-5xl ">
      Choose a project!
    </p>
  ),
  'Trybewarts Form': (
    <>
      <div className={ h1DivStyle }>
        <h1 className="text-center">
          Trybewarts Form
        </h1>
        <a
          className="mx-4 md:mx-6"
          href="https://leobmend.github.io/trybewarts-form"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="ease-in-out duration-500 hover:-translate-y-2 p-2 w-8"
            src={ diagonalArrow }
            alt="Github repository"
          />
        </a>
        <a href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
          <img
            className="ease-in-out duration-500 hover:-translate-y-2 rounded-full bg-black"
            src={ githubSvg }
            alt="Github repository"
          />
        </a>
      </div>
      <p className={ pStyle }>
        Evaluation form for students at Trybewarts School of
        {' '}
        <span className="line-through">Magic and</span>
        {' '}
        Coding.
      </p>
      <h2 className={ h2Style }>Techs</h2>
      <p className={ pStyle }>Javascript, CSS, HTML</p>
    </>
  ),
  'Trybe Tunes': (
    <>
      <div className={ h1DivStyle }>
        <h1 className="text-center">
          Trybe Tunes
        </h1>
        <a
          className="mx-4 md:mx-6"
          href="https://leobmend.github.io/trybe-tunes"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="ease-in-out duration-500 hover:-translate-y-2 p-2 w-8"
            src={ diagonalArrow }
            alt="Github repository"
          />
        </a>
        <a href="https://github.com/leobmend/trybe-tunes" target="_blank" rel="noreferrer">
          <img
            className="ease-in-out duration-500 hover:-translate-y-2 rounded-full bg-black"
            src={ githubSvg }
            alt="Github repository"
          />
        </a>
      </div>
      <p className={ pStyle }>
        Search, browse and listening to your favorite musics and artists.
      </p>
      <h2 className={ h2Style }>Techs</h2>
      <p className={ pStyle }>React, Javascript, CSS, HTML</p>
    </>
  ),
  'Trivia Game': (
    <>
      <div className={ h1DivStyle }>
        <h1 className="text-center">
          Trivia Game
        </h1>
        <a
          className="mx-4 md:mx-6"
          href="https://game-trivia.herokuapp.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="ease-in-out duration-500 hover:-translate-y-2 p-2 w-8"
            src={ diagonalArrow }
            alt="Github repository"
          />
        </a>
        <a href="https://github.com/leobmend/trivia-game" target="_blank" rel="noreferrer">
          <img
            className="ease-in-out duration-500 hover:-translate-y-2 rounded-full bg-black"
            src={ githubSvg }
            alt="Github repository"
          />
        </a>
      </div>
      <p className={ pStyle }>
        Play one of the most traditional games and test your knowledge. You can personalize
        your profile and compete against your friends around the world! It&apos;s Trivia time!
      </p>
      <h2 className={ h2Style }>Techs</h2>
      <p className={ pStyle }>React - Redux - Node.js - Jest</p>
      <p className={ pStyle }>Docker - Heroku</p>
      <p className={ pStyle }>Javascript - CSS - HTML</p>

    </>
  ),
};

function ProjectDescription({ project }) {
  const [descriptionHtml, setDescriptionHtml] = useState(getDescriptions[project]);
  const [articleStyle, setArticleStyle] = useState('');

  useEffect(() => {
    setArticleStyle('opacity-0');
    setTimeout(() => {
      setDescriptionHtml(getDescriptions[project]);
      setArticleStyle('');
    }, 600);
  }, [project]);

  return (
    <article
      className={ 'ease-in-out duration-500 flex overflow-auto scrollbar flex-col p-4 h-full '
        + 'rounded-lg bg-slate-100 items-center min-h-[80%] w-11/12 lg:p-10 '
        + `lg:justify-around lg:overflow-hidden ${articleStyle}` }
    >
      {descriptionHtml}
    </article>
  );
}

ProjectDescription.propTypes = {
  project: PropTypes.string.isRequired,
};

export default ProjectDescription;
