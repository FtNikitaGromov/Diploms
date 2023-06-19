import React, { useState } from 'react';
import '../colaps.css';

function ButtonSection({ onButtonClick }) {
  return (
    <div className="button-section">
      <button className="btn btn-danger red-button" type="button" onClick={() => onButtonClick(1)}>
        <span>Знакомство</span>
        <div className="button-background"></div>
      </button>
      <button className="btn btn-danger red-button" type="button" onClick={() => onButtonClick(2)}>
        <span>Информация о сайте</span>
        <div className="button-background"></div>
      </button>
      <button className="btn btn-danger red-button" type="button" onClick={() => onButtonClick(3)}>
        <span>Продукция</span>
        <div className="button-background"></div>
      </button>
      <button className="btn btn-danger red-button" type="button" onClick={() => onButtonClick(4)}>
        <span>Фандом</span>
        <div className="button-background"></div>
      </button>
      <button className="btn btn-danger red-button" type="button" onClick={() => onButtonClick(5)}>
        <span>Подробнее</span>
        <div className="button-background"></div>
      </button>
    </div>
  );
}

function App() {
  const [text, setText] = useState('');

  function showText(buttonId) {
    let text = '';

    switch (buttonId) {
      case 1:
        text = 'Добро пожаловать в наш магазин японской культуры аниме, где каждый посетитель может ощутить всю магию и вдохновение, которые присущи этому уникальному миру. Мы с нетерпением ждем вас и надеемся, что наши товары и контент позволят вам погрузиться в увлекательную японскую культуру аниме.';
        break;
      case 2:
        text = 'Помимо нашего разнообразного каталога товаров, мы также предлагаем увлекательные статьи и обзоры в нашем блоге, чтобы вы могли погрузиться в мир аниме еще глубже. Узнайте интересные факты, последние новости, обсуждения популярных сериалов и многое другое.';
        break;
      case 3:
        text = 'Мы гордимся тем, что можем предложить вам только лучшее качество продукции, которая позволит вам наслаждаться вашими любимыми аниме и создавать незабываемые впечатления. Наша команда всегда готова помочь вам с выбором и ответить на ваши вопросы.';
        break;
      case 4:
        text = 'У нас собрана большая коллекция из разных фандомов аниме, где каждый может найти своё. От популярных сериалов и фильмов до редких и эксклюзивных предметов коллекционирования, у нас есть что-то для каждого любителя аниме. Погрузитесь в удивительный мир японской культуры, откройте новые горизонты и расширьте свою коллекцию с нашим магазином аниме.';
        break;
      case 5:
        text = 'В нашем магазине японской культуры аниме вы получите незабываемые впечатления и всю атмосферу, которую так ценят поклонники аниме и японской культуры. Мы с гордостью предлагаем широкий выбор товаров, вдохновленных миром японской анимации.У нас вы найдете не только самые популярные и известные франшизы аниме, но и уникальные и эксклюзивные предметы, которые непременно порадуют коллекционеров и истинных ценителей японской культуры. Наш магазин предлагает широкий ассортимент товаров, включающий в себя фигурки персонажей, постеры, артбуки, фэндомную одежду, аксессуары, игрушки, а также многое другое. Мы следим за последними трендами и всегда обновляем наш ассортимент, чтобы удовлетворить потребности наших клиентов. Погрузитесь в захватывающий мир японской анимации и найдите что-то особенное для себя или в качестве подарка для настоящего фаната аниме. ';
        break;
      default:
        text = '';
    }

    setText(text);
  }

  return (
    <section className="colaps">
      <br/><br/><br/><br/><br/>
      <ButtonSection onButtonClick={showText} />
      <div className="text-placeholder">
        <h2 className="text-highlight">{text}</h2>
        </div>
    </section>
  );
}

export default App;
