import React from 'react'
import Card from 'react-bootstrap/Card';

const CardForPackages = (props) => {
  return (
        <div className='col p-5'>
                <Card className="text-center packages_card">
                    <Card.Title className='py-4'>{props.name}</Card.Title>
                    <Card.Title className='bg-primary py-4 text-light'>{props.price}</Card.Title>
                    <Card.Text className='py-2'>{props.description}</Card.Text>
                    <Card.Footer >
{/*                     <div className='row m-3'>
                <div className='col-4 align-self-center'>
                    <img src={props.path} className='img-fluid' alt="" />
                </div>
                <div className='col-8 text-center align-self-center text-light'>
                    <Card.Title>{props.name}</Card.Title>
                </div>
            </div> */}
                        {[...Array(Object.keys(props.include).length)].map((obj,i)=>{
                            return <Card.Text className='text-start row'>
                                        <img className='col-5 align-self-center img-fluid' src="./img/icons-package-on.png" alt="" />
                                        <span className='col-7 text-center align-self-center'>{props.include[i]}</span>
                                    </Card.Text>
                        })}
                        {[...Array(Object.keys(props.uninclude).length)].map((obj,i)=>{
                            return <Card.Text className='text-start'>
                                        <img className='col-5 align-self-center img-fluid' src="./img/icons-package-off.png" alt="" />
                                        <span className='col-7 text-center align-self-center text-decoration-line-through'>{props.uninclude[i]}</span>
                                    </Card.Text>
                        })}
                    </Card.Footer>
                </Card>
            </div>

/*         <Card className='bg-secondary services_card'>
            <div className='row m-3'>
                <div className='col-4 align-self-center'>
                    {props.name}
                </div>
                <div className='col-8 text-center align-self-center text-light'>
                    <Card.Title>{props.name}</Card.Title>
                </div>
            </div>
        </Card> */
  )
}

export default CardForPackages