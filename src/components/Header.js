import React from 'react';

const Header = ({ toggleSidebar }) => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            backgroundColor: '#000033',
            color: 'goldenrod',
            padding: '12px 15px',
            alignItems: 'center',
            zIndex: 1000,
            textAlign: 'initial',
            boxShadow: '0px 0px 22px -8px whitesmoke',
        }}>
            <img alt=""
                style={{ cursor: "pointer" }}
                onClick={toggleSidebar}
                src="https://img.icons8.com/material-outlined/24/ffffff/menu--v2.png" />
            <img
                alt=""
                style={{ maxHeight: '40px', paddingLeft: '15px', paddingRight: '15px' }}
                src='./images/mob-wlogo.png'
            />
        </div>
    )
}

export default Header;