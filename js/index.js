'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💞 YA ERES MI AMORCITO 💞');
    alert('😱Eso si soy bien canson 😱');
    location.href = 'https://v16-webapp.tiktok.com/be5e0981fb1d3e29d6e41657a5c0e0b3/629b0b1d/video/tos/useast2a/tos-useast2a-pve-0068/4ecbe2b08d9944dca84fb07082d54291/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3058&bt=1529&btag=80000&cs=0&ds=3&ft=eXd.6HHMMyq8Zv5fkwe2NF_Aol7Gb&mime_type=video_mp4&qs=0&rc=OGlmNzlkZzQzODgzNTk1OkBpM2ZxbTQ6Zmw1ZDMzNzczM0BeYTZgXl8zNS0xXzNjYl4tYSNwZzMvcjRvbDFgLS1kMTZzcw%3D%3D&l=202206040134330102171350241E92CE27';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Pon tu lindo nombre 🥰');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);