import React, { useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { IoMdMove } from 'react-icons/io';
import { ImArrowLeft2, ImArrowRight2, ImBin } from 'react-icons/im';
import { remove, increaseIdentLevel, decreaseIdentLevel, identLeft, identRight, updateParentChapter, updateParentUnit } from '../../../actions/actions';
import IconButton from '../../../reusableComponents/iconButton/iconButton.component';

const Row = ({ disabled, name, type, parentUnit, parentChapter }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateParentChapter(parentChapter));
    }, [dispatch, parentChapter]);

    useEffect(() => {
        dispatch(updateParentUnit(parentUnit));
    }, [dispatch, parentUnit]);

    const identRightHandler = useCallback((e) => {
        if (type !== 'topic') {
            dispatch(identRight({
                name,
                type,
                parentChapter,
                parentUnit
            }));
            dispatch(increaseIdentLevel());
        }
    }, [dispatch, type, parentChapter, parentUnit, name]);

    const identLeftHandler = useCallback(() => {
        if (type !== 'chapter') {
            dispatch(identLeft({
                name,
                type,
                parentChapter,
                parentUnit
            }));
            dispatch(decreaseIdentLevel());
        }
    }, [dispatch, type, parentChapter, parentUnit, name]);

    const deleteHandler = useCallback(() => {
        dispatch(remove({
            type,
            name,
            parentChapter,
            parentUnit
        }));
    }, [dispatch, type, parentChapter, parentUnit, name]);

    return (
        <Container disabled={disabled}>
            <div className="icons">
                {
                    [
                        { icon: IoMdMove, helper: 'move' },
                        { icon: ImArrowLeft2, helper: 'ident', onClick: identLeftHandler },
                        { icon: ImArrowRight2, helper: 'ident', onClick: identRightHandler },
                        { icon: ImBin, helper: 'delete', onClick: deleteHandler }
                    ].map(({ icon, helper, onClick }, index) => (<IconButton helper={helper} key={index} onClick={onClick} icon={icon} />))
                }
            </div>
            <div className="ident">
                <p className={`ident1 ${type === 'chapter' ? 'active' : null}`}></p>
                <p className={`ident1 ${type === 'unit' ? 'active' : null}`}></p>
                <p className={`ident1 ${type === 'topic' ? 'active' : null}`}></p>
            </div>
            <div className={`content ${type}`}>
                {name || 'enter some text'}
            </div>
        </Container >
    );
}

const Container = styled.div`
    border-bottom:1px solid ${props => props.theme.border};
    display:flex;
    align-items:stretch;
    height:50px;

    &>.content{
        text-transform:capitalize;
        flex-grow:1;
        display:flex;
        align-items:center;
        outline:none;

        &.chapter{
            font-weight:500;
            font-size:1.1em;
            color:${props => props.theme.secondary};
        }

        &.unit{
            margin-left:50px;
            font-weight:500;
            color:${props => props.theme.text.regular};
        }

        &.topic{
            margin-left:100px;
            font-weight:500;
            font-size:.9em;
            color:${props => props.theme.text.light};
        }
    }

    &>.icons{
        display:flex;
        align-items:center;
        padding-top:4px;
    }

    &>.ident{
        margin:0px 16px;
        &>p{
            width:50px;
            height:101%;
            display:inline-block;
            &.active{
                background-color:${props => props.theme.border};
                opacity:.6;
            }
        }
    }

    ${props => props.disabled
        ? css`
                opacity:.5;
                pointer-events:none;
            `
        : null
    }
`;

export default Row;