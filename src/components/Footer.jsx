import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <a href="" className=''>
            <img src="./img/5.jpg" alt="LogoCompany" className='bi me-2' width={180} />
          </a>
          <p>Воспользуйтесь нашими услугами прямо сейчас!</p>
        </div>
          <div className='col mb-3'>

          </div>

          <div className='col mb-4'>
              <h5>Улуги</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a href="" className='nav-link p-0 text-muted'>Бухгалтерские</a></li>
                <li className='nav-item mb-3'>
                  <a href="" className='nav-link p-0 text-muted'>Налоговые</a></li>
                <li className='nav-item mb-3'>
                  <a href="" className='nav-link p-0 text-muted'>Финансовые</a></li>
              </ul>
          </div>
          <div className='col mb-4'>
              <h5>О компании</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a href="" className='nav-link p-0 text-muted'>Услуги</a></li>
                <li className='nav-item mb-3'>
                  <a href="" className='nav-link p-0 text-muted'>Статьи</a></li>
                <li className='nav-item mb-3'>
                  <a href="" className='nav-link p-0 text-muted'>Контакты</a></li>
              </ul>
          </div>
          <div className='col mb-4'>
              <h5>Контакты</h5>
              <p className='text-muted'>Москва, Кремль, оф 101</p>
              <p className='text-muted'>info@example.com</p>
              <p className='text-muted'>+7 900 000 00 00</p>
              <p className='text-muted'>+7 900 000 00 01</p>
          </div>

      </footer>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href=''>
          Ссылка на наш рекламный сайт
        </a>
      </div>
    </div>

/*     <div className='text-center text-lg-start text-muted'>
                            <section className='d-flex justify-content-center justify-content-lg-between p-4 bg-info'>
                                <div className='me-5 d-none d-lg-block'>
                                    <span>Воспользуйтесь нашими услугами прямо сейчас!</span>
                                </div>
                                <div>
                                    <p>Наши специалисты свяжутся с Вами в ближайшее время.</p>
                                </div>
                                <Button variant='outline-light'>Перезвоните мне</Button>
                            </section>

      <section className=''>
        <div className='text-center text-md-start mt-5'>
          <div className='mt-3 d-flex justify-content-center justify-content-lg-between'>
            <div md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <p className='mb-4'>ЗдесьЛого</p>
              <p>Опыт практической работы с 2004 года позволяет оперативно решать нестандартные и сложные задачи.</p>
            </div>



    </div> */
  )
}

export default Footer