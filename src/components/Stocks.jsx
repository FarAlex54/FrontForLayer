import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Stocks = () => {
  return (
    <Container >
        <div className='row justify-content-center'>
            <h1>Акции компании</h1>
            <div className='col-6'>
                <img className="img-thumbnail" src="/img/Stocks-1.png" alt="" />
            </div>
            <div className='col-6'>
                <img className="img-thumbnail" src="/img/Stocks-2.png" alt="" />
            </div>


        </div>
    </Container>
  )
}

export default Stocks