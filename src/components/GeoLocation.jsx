import React from 'react'
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';

const GeoLocation = () => {
  return (
    <div>
        <YMaps>
            <div className=''>
              <Map width='100vw' defaultState={{ center: [55.727053, 37.570984], zoom: 15}} >
{/*                 <Placemark 
                  modules={["geoObject.addon.balloon"]}
                  defaultGeometry={[55.727053, 37.570984]}
                  properties={{
                    balloonContentBody:
                      "Моя локация"
                  }}/>  */}
              </Map>
            </div>
        </YMaps>
    </div>
  )
}

export default GeoLocation