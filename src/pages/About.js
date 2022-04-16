import React, { useEffect, useState } from 'react';
import profilePic from '../midia/profile.png';
import linkedinSvg from '../midia/linkedin.svg';
import gmailSvg from '../midia/gmail.svg';
import githubSvg from '../midia/github.svg';
import { useNavigate } from 'react-router-dom';
import MenuNav from '../components/MenuNav';


function About() {
  const [hrStyle, setHrStyle] = useState('w-2 h-1');
  const [leftContainerStyle, setLeftContainerStyle] = useState('w-full opacity-0');
  const [rightContainerStyle, setRightContainerStyle] = useState('w-full opacity-0');
  const [menuContainerStyle, setMenuContainerStyle] = useState('opacity-0');

  const FOOTER_BUTTONS_STYLES = "flex justify-center w-1/12 aspect-square border-2 mx-10 rounded-full border-white"

  useEffect(() => {
    setTimeout(() => {
      setHrStyle('w-1 h-5/6');
      setMenuContainerStyle('');
    }, 400);
    setTimeout(() => {
      setLeftContainerStyle('w-1/5 opacity-0');
    }, 1000);
    setTimeout(() => {
      setLeftContainerStyle('w-1/5');
    }, 1500);
    setTimeout(() => {
      setRightContainerStyle('');
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const handleClick = (path) => {
    setLeftContainerStyle('w-1/5 opacity-0');
    setRightContainerStyle('opacity-0');
    setTimeout(() => {
      setLeftContainerStyle('w-full opacity-0');
      setRightContainerStyle('w-full opacity-0');
      setHrStyle('w-2 h-1');
      setMenuContainerStyle('opacity-0');
    }, 750);
    setTimeout(() => {
      navigate(`/${path}`);
    }, 1400);
  }

  return (
    <main className="flex justify-center items-center h-full overflow-hidden flex-col sm:flex-row">
      <MenuNav
        handleClick={ handleClick } menuContainerStyles={ menuContainerStyle } actualPage="About"
      />
      <section
        className={`ease-in-out duration-500 h-full py-20 hidden md:flex flex-col items-center justify-around ${leftContainerStyle}`}
      >
        <img
          className="ease-in-out duration-500 rounded-full w-9/12 shadow-sm shadow-gray-50"
          src={profilePic} alt="Leonardo"
        />
        <section className="flex flex-col items-center w-full">
          <a
            href="https://www.linkedin.com/in/leobmend/" target="_blank" rel="noreferrer"
            className="flex justify-center w-3/12 aspect-square border-3 my-3 rounded-full border-white"
          >
            <img
              className="w-2/3"
              src={ linkedinSvg }
              alt="Linkedin"
            />
          </a>
          <div
            className="flex justify-center w-3/12 aspect-square border-3 my-3 rounded-full border-white"
            onClick={ () => {
              navigator.clipboard.writeText('leo.bmendonca@gmail.com');
              window.alert('Meu e-mail foi copiado para sua área de transferência com sucesso! Não deixe de entrar em contato. :)')
            } }
          >
            <img
              className="w-2/3"
              src={ gmailSvg }
              alt="G-mail"
            />
          </div>
          <a
            href="https://github.com/leobmend" target="_blank" rel="noreferrer"
            className="flex justify-center w-3/12 aspect-square border-3 my-3 rounded-full border-white"
          >
            <img
              className="w-2/3"
              src={ githubSvg }
              alt="Github"
            />
          </a>
        </section>
      </section>
      <hr
        className={`ease-in-out duration-500 rounded-sm border-none bg-slate-100 ${hrStyle} hidden md:block`}
      />
      <article
        className={`ease-in-out duration-700 h-full w-full flex flex-col text-white items-center justify-center ${rightContainerStyle}`}
      >
        <div className="flex mt-auto items-center justify-center md:justify-start md:px-40 md:ml-10 w-full">
          <img className="rounded-full w-1/3 mr-8 md:hidden" src={profilePic} alt="Leonardo"/>
          <div>
            <h1 className="self-start text-white text-xl md:text-4xl ">Hi! I'm</h1>
            <h1 className="font-bold text-white text-2xl md:text-6xl">LEONARDO</h1>
          </div>
        </div>
        <div className="my-auto text-justify overflow-auto h-1/2 text-md md:text-2xl px-8 md:px-40 scrollbar -translate-y-5 sm:-translate-y-0">
          <p>
            I'm a peaceful guy, with an easy laugh. Always trying to see the good side of situations, or just making jokes with them. I love a good movie, book or tv show, and I dedicate myself to my friendships whenever I have an opportunity. Play video games are definitely my hooby: there isn't something like a couch, joysticks and some friends.
            {/* Sou alguém tranquilo e de riso fácil. Sempre tento ver o ponto positivo das situações, ou apenas fazer piadas com elas. Adoro um bom filme ou seriado, e cultivo minhas amizades sempre que posso. Video-games é o meu principal hobbie: nada como um sofá e um controle. */}
          </p>
          <br />
          <p>
            Technology enthusiast since my childhood, I ended up choosing for a graduation course not so related. However, certain things in life chooses us, instead of us choosing them. And now I'm here persuing the dream of make a career on software development. Therefore, every day I seek to learn more about programming and it's ability to change the world.
            {/* Entusiasta de tecnologia desde a infância, acabei por optar por uma graduação não tão ligada à área. Porém, certas coisas na nossa vida nos escolhem, ao invés de as escolhermos. E agora persigo o sonho de trilhar uma carreira em desenvolvimento de software. Portanto, busco cada dia saber um pouco mais sobre programação e a sua capacidade de mudar o mundo. */}
          </p>
          <br />
          <p>
            Currently, I'm pariticipating in the
            {' '}
            <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QxDZSwtMJZ4">Turma XP</a>
            , a partnership between
            {' '}
            <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.betrybe.com/">Trybe </a>
            and
            {' '}
            <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.xpinc.com/">XP Inc</a>.
            The course goes from foundations to the most currently used frameworks of Web Development, in addition to preparing the professional for job market, training him in several <span className="italic">soft-skills</span>.
            {/* Atualmente, participo da
            {' '}
            <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QxDZSwtMJZ4">Turma XP</a>
            , parceria da
            {' '}
            <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.betrybe.com/">Trybe</a>
            {' '}
            com a
            {' '}
            <a className="font-bold" target="_blank" rel="noreferrer" href="https://www.xpinc.com/">XP Inc</a>.
            O curso contempla dos fundamentos até os frameworks mais utilizados pelo mercado de desenvolvimento web, além de preparar o profissional para o mercado de trabalho, treinando-o em diversas <span className="italic">soft-skills</span>. */}
          </p>
        </div>
        <footer className="flex justify-center fixed bottom-0 mb-1 items-center h-10 w-full md:hidden">
          <a
            href="https://www.linkedin.com/in/leobmend/" target="_blank" rel="noreferrer"
            className={FOOTER_BUTTONS_STYLES}
          >
            <img
              className="w-3/4"
              src={ linkedinSvg }
              alt="Linkedin"
            />
          </a>
          <div
            className={FOOTER_BUTTONS_STYLES}
            onClick={ () => {
              navigator.clipboard.writeText('leo.bmendonca@gmail.com');
              window.alert('Meu e-mail foi copiado para sua área de transferência com sucesso! Não deixe de entrar em contato. :)')
            } }
          >
            <img
              className="w-3/4"
              src={ gmailSvg }
              alt="G-mail"
            />
          </div>
          <a
            href="https://github.com/leobmend" target="_blank" rel="noreferrer"
            className={FOOTER_BUTTONS_STYLES}
          >
            <img
              className="w-3/4"
              src={ githubSvg }
              alt="Github"
            />
          </a>
        </footer>
      </article>
    </main>
  );
}

export default About;
