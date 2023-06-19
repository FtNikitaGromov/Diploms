import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../index.css';


export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='Footer-social'>Присоединяйтесь к нам в социальных сетях:</span>
        </div>

       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='Tex mb-3 text-uppercase'>
                <MDBIcon color='secondary' icon='gem' className='Tex me-3' />
                WayAnime
              </h6>
              <p>
                Наш магазин придется по вкусу всем любителям  аниме.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='Tex mb-3 text-uppercase'>Информация</h6>
              <p>
                <a href='https://vk.com/animeshopsaransk' className='Text'>
                  Группа Vk
                </a>
              </p>
              <p>
                <a href='https://kg-portal.ru/news/anime/' className='Text'>
                  Аниме Новости
                </a>
              </p>
              <p >
                <a href='https://mcmag.ru/kollaboraczii-brendov-odezhdy-s-anime/' className='Text '>
                  Колоборации брендами
                </a>
              </p>
              <p>
                <a href='https://nikifilini.com/' className='Text'>
                 Наши друзья
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='Tex mb-3 text-uppercase'>Прочее</h6>
              <p>
                <a href='https://www.youtube.com/watch?v=apI7QPv2YnA' className='Text'>
                  Кастом
                </a>
              </p>
              <p>
                <a href='#!' className='Text'>
                  Информация
                </a>
              </p>
              <p>
                <a href='#!' className='Text'>
                  Каталог
                </a>
              </p>
              <p>
                <a href='#!' className='Text'>
                  Помощь
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='Tex mb-3 text-uppercase'>Обратная связь</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className= 'Text me-2' />
              Саранск, Пролетарская ул., 108, Пролетарская ул., 108, Саранск
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='Text me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='Text me-3' /> + 7 (917)005-10-98
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='Text me-3' />  +7 (927) 190-90-00
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Shop :
        <a className='text-reset fw-bold' href='https://vk.com/animeshopsaransk'>
          WayAnime.com
        </a>
      </div>
    </MDBFooter>
  );
}