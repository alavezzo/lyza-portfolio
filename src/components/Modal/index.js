import React from 'react';

function Modal ({ currentPhoto, onClose }) {
    const {name, description, category, index} = currentPhoto;
    return ( 
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img alt={category} src={require(`../../assets/large/${category}/${index}.jpg`).default}/>
                <p>
                    {description}
                </p>
                <button onClick={onClose}  type ="button">
                    Close this modal
                </button>
            </div>
        </div>
    );

};

export default Modal;