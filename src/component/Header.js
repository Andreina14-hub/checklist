import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
const Header = ({ showComplet, setShowComplet }) => {
    const toggleComplet = () => {
        setShowComplet(!showComplet);
    }
    return (
        <header className="header">
            <h1 className="header__titulo">
                Lista de Tareas
            </h1>
            {showComplet ?
                <button
                    className="header__button"
                    onClick={() => toggleComplet()}>
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        className='header__icon-button' />
                </button>
                :
                <button
                    className="header__button"
                    onClick={() => toggleComplet()}>
                    <FontAwesomeIcon
                        icon={faEye}
                        className='header__icon-button' />
                </button>
            }
        </header>
    );
}
export default Header;