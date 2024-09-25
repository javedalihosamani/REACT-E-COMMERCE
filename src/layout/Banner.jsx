import React from 'react'

const Banner = () => {
    const banner = {
        'background': 'url(https://images.pexels.com/photos/1452701/pexels-photo-1452701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        "backgroundPosition": 'center',
        'backgroundSize': 'cover',
        'backgroundRepeat' : 'no-repeat',
        "height": '400px',
        'display' : 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'color': 'white',
        'textShadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'padding': '20px',
        'margin':'10px',
        'borderRadius' : '10px'
    }
    return (
        <div style={banner}>
            <div>
              <h1 className='fs-1 '>New Season Arrivals</h1>
              <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    )
}

export default Banner