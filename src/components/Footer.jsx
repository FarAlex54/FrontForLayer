import React from 'react'
import Button from 'react-bootstrap/Button'


const Footer = () => {
  return (
    <div className='text-center text-lg-start text-muted'>
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

            <div md="2" lg="2" xl="2" className='mx-auto mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4'>Компания</h6>
              <p><a href='#!' className='text-reset link-underline link-underline-opacity-0'>О компании</a></p>
              <p><a href='#!' className='text-reset link-underline link-underline-opacity-0'>Услуги</a></p>
              <p><a href='#!' className='text-reset link-underline link-underline-opacity-0'>Статьи</a></p>
              <p><a href='#!' className='text-reset link-underline link-underline-opacity-0'>Контакты</a></p>
            </div>

            <div md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Услуги</h6>
              <p><a href='#!' className='text-reset link-underline link-underline-opacity-0'>Бухгалтерские</a></p>
              <p><a href='#!' className='text-reset link-underline link-underline-opacity-0'>Финансовые</a></p>
              <p><a href='#!' className='text-reset link-underline link-underline-opacity-0'>Налоговые</a></p>
            </div>

            <div md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>Москва, Кремль, оф 101</p>
              <p>info@example.com</p>
              <p>+7 900 000 00 00</p>
              <p>+7 900 000 00 01</p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href=''>
          Ссылка на наш рекламный сайт
        </a>
      </div>
    </div>
  )
}

export default Footer