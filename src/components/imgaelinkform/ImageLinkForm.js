import React from 'react';
import './imagelink.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f2'>
                {'this magic Brain will detect faces in your pictures. Git it a try'}
            </p>
            <div className='center'>
                <div className='form center pa4 ma3 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type="text" />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-purple'>Detect</button>
                </div>
            </div>
        </div >
    )
}

export default ImageLinkForm