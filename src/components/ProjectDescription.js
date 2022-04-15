import React from 'react';
import githubSvg from '../midia/github.svg';
import diagonalArrow from '../midia/diagonal-arrow.svg';

const h1DivStyle = "flex items-center self-start mx-4 my-2 font-bold text-2xl md:text-4xl";
const h2Style = "self-start mx-4 my-2 font-bold text-lg md:text-2xl";
const pStyle = "text-lg md:text-2xl text-justify"

const getDescriptions = {
  "": (
    <p className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">Choose a project!</p>
  ),
  "Trybewarts Form": (
    <>
      <div className={ h1DivStyle }>
        <h1 className="text-center">
          Trybewarts Form
        </h1>
        <a className="mx-4 md:mx-6" href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
          <img className="ease-in-out duration-500 hover:-translate-y-2 p-2 w-8" src={ diagonalArrow } alt="Github repository" />
        </a>
        <a href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
          <img className="ease-in-out duration-500 hover:-translate-y-2 rounded-full" src={ githubSvg } alt="Github repository" />
        </a>
      </div>
      <p className={ pStyle }>
        Evaluation form for students at Trybewarts School of <span className="line-through">Magic and</span> Coding.
      </p>
      <h2 className={ h2Style }>Techs</h2>
      <p className={ pStyle }>Javascript, CSS, HTML</p>
    </>
  ),
  "Trybe Tunes": (
    <>
      <div className={ h1DivStyle }>
        <h1 className="text-center">
          Trybewarts Form
        </h1>
        <a className="mx-4 md:mx-6" href="https://leobmend.github.io/trybewarts-form" target="_blank" rel="noreferrer">
          <img className="ease-in-out duration-500 hover:-translate-y-2 p-2 w-8" src={ diagonalArrow } alt="Github repository" />
        </a>
        <a href="https://github.com/leobmend/trybewarts-form" target="_blank" rel="noreferrer">
          <img className="ease-in-out duration-500 hover:-translate-y-2 rounded-full" src={ githubSvg } alt="Github repository" />
        </a>
      </div>
      <p className={ pStyle }>
        Search, browse and listening to your favorite musics and artists.
      </p>
      <h2 className={ h2Style }>Techs</h2>
      <p className={ pStyle }>React, Javascript, CSS, HTML</p>
    </>
  ),
}

function ProjectDescription({ project }) {
  return (
    <article
      className="ease-in-out duration-500 flex flex-col p-4 border-white border-2 rounded-lg text-white justify-around items-center min-h-[60%] w-11/12"
    >
      {getDescriptions[project]}
    </article>
  )
}

export default ProjectDescription;