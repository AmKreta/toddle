import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <div className="subject" contentEditable>
                Enter Subject
            </div>
            <div className="subHeader">
                <div className="actions">
                    <p><strong>Actions</strong></p>
                    <p>Move, Ident, <br />Outdent, Delete</p>
                </div>
                <div className="standard">
                    <p><strong>Standard</strong></p>
                    <p>The text of standard</p>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.header`
    &>.subject{
        color:${props => props.theme.text.light};
        font-size:30px;
        outline:none;
    }

    &>.subHeader{
        display:flex;
        border-top:1px solid ${props => props.theme.border};
        border-bottom:1px solid ${props => props.theme.border};
        padding:8px;

        &>.actions{
            width:300px;
        }

        &>div>p:last-child{
            color:${props => props.theme.text.light};
            font-size:.9em;
        }
    }
`;

export default React.memo(Header);
