import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';


const Button = ({ children, onClick, startIcon, endIcon, fullWidth }) => {
    return (
        <StyledButton onClick={onClick} fullWidth={fullWidth}>
            {
                startIcon && (
                    <IconContext.Provider value={{ className: 'icon' }}>
                        {startIcon}
                    </IconContext.Provider>
                )
            }
            {children}
            {
                endIcon && (
                    <IconContext.Provider value={{ className: 'icon' }}>
                        {endIcon()}
                    </IconContext.Provider>
                )
            }
        </StyledButton>
    );
}

const StyledButton = styled.button`
    color:white;
    background-color:${props => props.theme.primary};
    padding:8px 24px;
    border:1px solid ${props => props.theme.primary};
    border-radius:5px;
    font-size:1.1em;
    font-weight:500;
    width:${props => props.fullWidth ? '100%' : 'auto'};
    position:relative;
    overflow:hidden;
    box-shadow:0 0 2px ${props => props.theme.primary};
    margin-top:16px;
    display:flex;
    align-items:center;
    justify-content:center;

    &>.icon{
        margin:0 8px;
    }

    &:hover{
        cursor:pointer;
        opacity:.9;
    }

    &:active{
        opacity:1;
    }
`;

export default Button;
