import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './header/header.component';
import Content from './content/content.component';
import Button from '../reusableComponents/button/button.component';
import { RiAddCircleLine } from 'react-icons/ri';
import { add } from '../actions/actions';

const Component = () => {

    const dispatch = useDispatch();
    const ident = useSelector(state => state.ident);
    const { parentChapter, parentUnit } = useSelector(state => state.currentContainer);

    const addHandler = useCallback((e) => {
        let type;
        let name = prompt('enter name');
        if (ident === 1) {
            type = 'chapter';
        }
        else if (ident === 2) {
            type = 'unit';
        }
        else if (ident === 3) {
            type = 'topic';
        }
        dispatch(add({ type, name, parentChapter, parentUnit }));
    }, [dispatch, ident, parentChapter, parentUnit]);

    return (
        <>
            <Header />
            <Content />
            <Button
                type='button'
                fullWidth
                startIcon={<RiAddCircleLine size='25px' />}
                onClick={addHandler}
            >
                Add a standered
            </Button>
        </>
    );
}

export default Component;