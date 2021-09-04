import React from 'react';
import styled, { css } from 'styled-components';
import { IconContext } from 'react-icons';

const IconButton = ({ icon, onClick, helper, helperDown }) => {
    return (
        <Button helper={helper} onClick={onClick} helperDown={helperDown}>
            <IconContext.Provider value={{ className: 'iconButton' }}>
                {icon({ size: '20px' })}
            </IconContext.Provider>
        </Button>
    );
}

const Button = styled.div`
    position: relative;
    margin: 8px 0;

    &:hover {
        &::before{
            content: '${props => props.helper}';
            ${
                props=>props.helperDown
                ?css`
                    top:100%;
                    clip-path: polygon(0 15%, 0 100%, 100% 100%, 100% 15%, 60% 15%, 50% 0, 40% 15%);
                    padding: 8px 16px;
                `
                :css`
                    clip-path: polygon(0 15%, 100% 15%, 99% 85%, 59% 85%, 50% 100%, 38% 85%, 0 85%);
                    bottom: 100%;
                    padding:16px;
                `
            }
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-color:${props => props.theme.text.dark};
            color: white;
            z-index: 3;
            border-radius: 3px;
            box-shadow: 0 0 3px ${props => props.theme.text.dark};
        }
    }

    &>.iconButton{
        color:${props => props.theme.text.light};
        margin: 0 4px;
        
        &:first - child{
            transform: scale(1.1);
        }
        
        &:hover{
            cursor: pointer;
            color:${props => props.theme.secondary};
        }
    }
}
`;

export default IconButton;