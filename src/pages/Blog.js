import React, { useState } from 'react';
import '../blog.css';
import renkorn from '../assets/blog/renkorn.png';
import MagBitva from '../assets/blog/magbitva.png';
import TitanFin from '../assets/blog/atakatitanovfila.png';
import dota from '../assets/blog/dota2.png';
import asta from '../assets/blog/blackcover.jpg';
const Blog = () => {
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(-1);

  const toggleDescription = (index) => {
    if (expandedBlogIndex === index) {
      setExpandedBlogIndex(-1);
    } else {
      setExpandedBlogIndex(index);
    }
  };

  const getDescriptionText = (fullDescription, index) => {
    if (expandedBlogIndex === index) {
      return fullDescription;
    } else {
      return `${fullDescription.substring(0, 400)}...`;
    }
  };

  return (
    <>
      <div className="blog-container">
        <div className="blog-item">
          <h2 className="blog-title">«Реинкарнации безработного 3» — новый трейлер, сэйю и точная дата выхода важного исекая</h2>
          <img
            className="blog-image"
            src={renkorn}
            alt="Blog Post 1"
          />
          <p
            className={`blog-description ${expandedBlogIndex === 0 ? 'expanded' : ''}`}
            onClick={() => toggleDescription(0)}
          >
            {getDescriptionText(
              'Третий сезон «Реинкарнации безработного» (Mushoku Tensei: Isekai Ittara Honki Dasu) обзавёлся новым трейлером, расширил состав сэйю, а заодно получил точную дату выхода: сериал стартует 3 июля 2023 года. Манабу Окамото, бывший режиссёр и сценарист, больше не занимается проектом. Его обязанности разделили между собой два человека: режиссёром станет Хироки Хирано, бывший помощник режиссёра в первом сезоне, а за сценарий теперь отвечает Тощия Оно (86, «Обещанная страна грёз», «Дом теней»). 34-летнего безработного хикикомори после смерти его родителей выгнали из дома. Всеми отвергнутый и без гроша в кармане, он понимает, что зашёл в тупик и его жизнь могла быть намного лучше, сделай он другой выбор в прошлом. Как раз во время этих размышлений он видит грузовик, несущийся на трёх школьников. Герой бросается спасти подростков, однако сам погибает под колёсами... И перерождается в мире меча и магии в теле младенца по имени Рудеус Грейрат. Теперь он начнёт жизнь с чистого листа и без сожалений.',
              0
            )}
          </p>
          <button className="expand-button" onClick={() => toggleDescription(0)}>
            {expandedBlogIndex === 0 ? 'Скрыть' : 'Показать полностью'}
          </button>
        </div>
        <section className="video-container">
        <iframe className=' renornatia' width="600" height="416" src="https://kg-portal.ru/t53074" frameborder="0" allowfullscreen></iframe>
        </section>
        <div className="blog-item">
          <h2 className="blog-title">«Магическая битва» — новый трейлер арки «Тайная проверка / Преждевременная смерть» из второго сезона</h2>
          <img
            className="blog-image"
            src={MagBitva}
            alt="Blog Post 2"
          />
          <p
            className={`blog-description ${expandedBlogIndex === 1 ? 'expanded' : ''}`}
            onClick={() => toggleDescription(1)}
          >
            {getDescriptionText('На ивенте MAPPA Stage 2023 показан новый трейлер сериала «Магическая битва 2» (Jujutsu Kaisen 2). Кадры пока только из арки «Тайная проверка / Преждевременная смерть», которая будет расширена по сравнению с мангой. Премьера сериала, рассчитанного на полгода трансляции, состоится 6 июля.В аниме будут экранизированы арки «Тайная проверка / Преждевременная смерть» (65–79 главы) и «Инцидент в Сибуе» (79–136 главы).Учитывая, что режиссёр первого сезона Сонхо Пак основал собственную студию и занят проектом «Пуля», его замена не стала неожиданностью. Новым режиссёром станет Сёта Гощёдзоно (режиссёр эпизодов в сериалах «Магическая битва» и «Человек-бензопила»).Гэгэ Акутами выпускает мангу «Магическая битва» в журнале Weekly Shounen Jump с марта 2018 года. На данный момент выпущено 22 тома основной истории и нулевой том. Общий тираж манги, включая нулевой том и ранобэ, составляет 70 млн копий. Издательство «Азбука» выпускает мангу на русском языке.',
             1)}
          </p>
          <button className="expand-button" onClick={() => toggleDescription(1)}>
            {expandedBlogIndex === 1 ? 'Скрыть' : 'Показать полностью'}
          </button> 
        </div>
        <section className="video-container">
  <iframe className="renornatia" width="600" height="416" src="https://kg-portal.ru/t53041" frameBorder="0" allowFullScreen></iframe>
</section>
        <div className="blog-item">
          <h2 className="blog-title">«Атака титанов: Финал. Часть 3» — первый постер распоследнего финального финала</h2>
          <img
            className="blog-image"
            src={TitanFin}
            alt="Blog Post 3"
          />
          <p
            className={`blog-description ${expandedBlogIndex === 2 ? 'expanded' : ''}`}
            onClick={() => toggleDescription(2)}
          >
            {getDescriptionText('Финальная часть финальной части финала «Атаки титанов» обзавелась... первым постером! На котором, правда, нет ничего особенного, кроме пасторального пейзажа и угрожающих теней. Но мы не жалуемся.Если вы вдруг забыли или запутались (что немудрено), то напоминаем, что заключительная — третья — часть финального сезона сериала выходит в двух частях. Первая из них — часовой спецэпизод — вышла 4 марта. Вторая и (предположительно) действительно последняя увидит свет осенью. Надеемся, стало понятнее.Оригинальная манга «Атака титанов» Хадзиме Исаямы выходила в 2009–2021 годах в ежемесячном журнале Bessatsu Shonen. В России мангу опубликовало издательство «Азбука» под названием «Атака на титанов».Первый сезон сериала от студии Wit стартовал в 2013 году, второй — в 2017-м, а дальше новые сезоны исправно выходили раз в год вплоть до 2020-го, когда с выходом первой части «Финала» франчайз перешёл к студии MAPPA. Вторая часть «Финала» началась в 2022-м.',
             2)}
          </p>
          <button className="expand-button" onClick={() => toggleDescription(2)}>
            {expandedBlogIndex === 2 ? 'Скрыть' : 'Показать полностью'}
          </button>
        </div>
        <section className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iY5-Wnilhso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <div className="blog-item">
          <h2 className="blog-title">Продюсер дразнил Dota: Dragon's Blood season 4: "Осталось много сюжета"</h2>
          <img
            className="blog-image"
            src={dota}
            alt="Blog Post 4"
          />
          <p
            className={`blog-description ${expandedBlogIndex === 3 ? 'expanded' : ''}`}
            onClick={() => toggleDescription(3)}
          >
            {getDescriptionText('Адаптации видеоигр несколько разношерстны; особенно для Netflix, который может варьироваться от превосходной Castlevania до разочаровывающей Resident Evil.К счастью, одна из лучших адаптаций видеоигр только что вернулась к стриминговому гиганту для третьего сезона, Dota: Dragons Blood, основанная на культовой игре Dota 2.Когда фанаты по всему миру заканчивают смотреть солидную третью часть этого фантастического приключения, многим интересно, что ждет их в будущем.По состоянию на th 12 августа ни Netflix, ни шоураннеры Dota: Dragons Blood публично не подтвердили планы по выпуску 4-го сезона популярной аниме-адаптации.Однако исполнительный продюсер, разработчик и сценарист сериала Эшли Эдвард Миллер только что пошутил, что в будущем будет больше контента из драматического мира Dota.Всего несколько часов назад Миллер ответил фанату в Twitter, сказав: “Я был чрезвычайно удовлетворен подавляющим большинством, чрезвычайно положительным откликом на книгу 3. Чего я с нетерпением жду сейчас, так это того, как ваши головы начнут взрываться на rewatch, когда вы будете улавливать мельчайшие детали и моменты, скрывающиеся повсюду ”.Один пользователь ответил на это вопросом: “Могу я спросить, будете ли вы продолжать эту историю? Я очень надеюсь, что фанаты оценят ваши усилия так, как вы того заслуживаете ”.К восторгу фанатов Dota: Dragons Blood по всему миру, которые ожидают выхода четвертого сезона, Миллер ответил: “Спасибо, я бы с удовольствием. Как однажды сказал Фимрин, Осталось много историй, которые можно рассказать”.Конечно, к сожалению, не от Миллера зависит, вернется ли аниме-сериал Dota: Dragons Blood с 4-м сезоном, поскольку это решение, скорее всего, зависит от Netflix и их суждения о доходности инвестиций.Хотя сериал никогда не будет соответствовать стандартам крупных игровых постановок, 10 лучших списков стримингового гиганта указывают на то, что существует значительная основная аудитория аниме-адаптации для Dota.В настоящее время сериал набирает в среднем 84% на Rotten Tomatoes и 7,8 / 10 на IMDB. Кроме того, отзывы ранних критиков о недавно вышедшем третьем сезоне в целом были положительными, а IGN отметил, что “Книга 3 хорошо справляется с беспорядком, оставшимся после книги 2”.“Сцены сражений, особенно в предпоследнем эпизоде, - это действительно то, где аниматоры Studio Mir отрываются. Если сюжет не то, что вас захватывает, по крайней мере, останьтесь ради отличных боев  ', 3)}
          </p>
          <button className="expand-button" onClick={() => toggleDescription(3)}>
            {expandedBlogIndex === 3 ? 'Скрыть' : 'Показать полностью'}
          </button>
        </div>
        <section className="video-container">
        <iframe  className=' renornatia' width="560" height="315" src="https://www.youtube.com/embed/F0evM-hBlcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <div className="blog-item">
          <h2 className="blog-title">Новый трейлер полнометражного аниме по манге Black Clover</h2>
          <img
            className="blog-image"
            src={asta}
            alt="Blog Post 5"
          />
          <p
            className={`blog-description ${expandedBlogIndex === 4 ? 'expanded' : ''}`}
            onClick={() => toggleDescription(4)}
          >
            {getDescriptionText('Премьера фильма с подзаголовком «Sword of the Wizard King» (Mahou Mikado no Ken) в кинотеатрах Японии и на Netflix состоится 31 марта 2023 года. Песню «Here I Stand» исполнила группа TREASURE.К сэйю аниме присоединились Хотю Оцука (Джирайя из Naruto) и Миюки Савасиро (Селти Стурлусон из Durarara!!) «Чёрный клевер: Меч Короля Магов» – аниме, в котором главный герой, Аста, родился без магии в мире, где магия является всем. Несмотря на это, он совершает героические поступки и сражается с мощными врагами, чтобы доказать свою силу и стать Волшебным Королём. Соперником Асты является Юно – гений магии, избранный легендарным четырехлистным Гримуаром. Вместе они сражаются с опасными врагами и преодолевают все трудности, чтобы достичь своей мечты – стать Волшебным Королём. Однако перед Астой и Юно, мечтающими стать Волшебным Королём, возникают привидения прошлых Волшебных Королей. Конрад Лето, предшественник Джулиуса Новахроно на посту Волшебного Короля, когда-то уважаемый народом Кловер Кингдом, но внезапно бунтовавший против королевства и был запечатан, воскрес и планирует использовать «Имперского Меча», чтобы воскресить трех самых страшных Волшебных Королей в истории – Эдварда Авалаче, Принцию Фаннибанни и Джестера Гарандароса, и захватить Кловер Кингдом.Аста и Юно сталкиваются лицом к лицу с Волшебными Королями из прошлого. Это событие ставит на кон не только будущее Кловер Кингдома, но и судьбу всего мира магии. Начинается всеобщая война! Аниме «Чёрный клевер фильм 2023» поразит зрителей не только увлекательным сюжетом и захватывающими сражениями, но и красивой анимацией, которая передаёт всю магию и энергию битв. Сюжет аниме в основном сосредоточен на боевых действиях и братстве между героями, которые стоят друг за друга даже в самых сложных ситуациях.', 4)}
          </p>
          <button className="expand-button" onClick={() => toggleDescription(4)}>
            {expandedBlogIndex === 4 ? 'Скрыть' : 'Показать полностью'}
          </button>
        </div>
        <section className="video-container">
        <iframe className=' renornatia' width="560" height="315" src="https://www.youtube.com/embed/M-JD8QqStBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
      </div>
    </>
  );
};

export default Blog;
