import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    // destructuring props in to currentPhoto
    const {name, category, description, index} = currentPhoto;

    return (
        // JSX: markup for modal
        <div className='modalBackdrop'> 
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt='current category' />
                <p>
                    {description}
                </p>
                <button onClick={ onClose } type='button'>
                    Close this modal
                </button>
            </div>
        </div>
    );
};

export default Modal;