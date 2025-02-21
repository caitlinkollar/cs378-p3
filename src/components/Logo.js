import React from 'react';

function logo() {
    return (
        <img 
          src={`${process.env.PUBLIC_URL}/images/${"logo.jpg"}`}
          alt="Logo" 
          className="img-fluid" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
    );
}

function MenuSubtitle({ subtitle }) {
    return (
        <h2 className="subtitle">
            {subtitle}
        </h2>
    );
}

const LogoWithSubtitle = ({ subtitle }) => {
    return (
        <div className="text-center">
            {logo()}
            {MenuSubtitle({ subtitle })}
        </div>
    );
}

export default LogoWithSubtitle;


