import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import newImg from '../assets/new.png'
import newsImg from '../assets/news.png'
import XanterImg from '../assets/TItan 1.png'
import neeImg from '../assets/Botinki.png'

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
<br></br>
                <img

                    className=" Fotos d-block w-100  "
                    src={newImg}
                    alt="First slide"

                />
                
                <Carousel.Caption>
                    <h3>ADIDAS X DRAGON BALL Z, 2018</h3>
                    <p> 2018 году adidas объединился со знаменитым аниме-сериалом «Драконий жемчуг Зет», чтобы создать совместную коллекцию из семи кроссовок. Каждая модель была вдохновлена одним из главных героев и выполнена в соответствующих ему цветах.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <br></br>
                <img
                    className="Fotos d-block w-100"
                    src={newsImg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>SUPREME X AKIRA, 2017</h3>
                    <p>В 2017 году Supreme объединил усилия с Кацухиро Отомо для создания коллекции на основе его культового полнометражного фильма «Акира», который, по общему признанию, и познакомил западный мир с мангой и аниме, а также повлиял на все — от «Покемонов» до «До очень странных дел».</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <br></br>
                <img
                    className="Fotos d-block w-100"
                    src={XanterImg}

                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Колекционное издание манги 
                        Атака титанов</h3>
                    <p>
                        Сохранены художественное оформление томов, и даже обе обложки, одна из которых будет представлена на суперобложке, а вторая - на переплете."Мир людей пал под сокрущающей мощью Титанов. Принеся в жертву свою свободу, человечество укрылось в обнесенных высокими стенами городах, в надежде обезопасить выживших.
                    </p>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <br></br>
                <img
                    className="Fotos d-block w-100"
                    src={neeImg}
                    alt="Four slide"
                />

                <Carousel.Caption>
                    <h3>Кастомные кросовки в стиле аниме Наруто</h3>
                    <p>Каждая модель была вдохновлена одним из главных героев и выполнена в соответствующих ему цветах.В качестве основы для первой модели была выбрана белая кожа, дополненная черными деталями с ярко-красной окантовкой в передней и задней частях обуви и около системы шнуровки.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default CarouselFadeExample;