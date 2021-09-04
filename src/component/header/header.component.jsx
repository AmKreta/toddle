import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineUpload, AiOutlineDownload } from 'react-icons/ai';
import { FiRefreshCw } from 'react-icons/fi';
import IconButton from '../../reusableComponents/iconButton/iconButton.component';
import { resetList, resetIdentLevel, resetParentContainer, setList } from '../../actions/actions';

const Header = () => {

    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const importHandler = useCallback(() => {
        fileInputRef.current?.click();
    }, [fileInputRef]);

    const exportHandler = useCallback(() => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(
            new Blob([JSON.stringify(list, null, 4)], {
                type: "application/json"
            })
        );
        a.setAttribute("download", "data.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }, [list]);

    const refreshHandler = useCallback(() => {
        dispatch(resetList());
        dispatch(resetIdentLevel());
        dispatch(resetParentContainer());
    }, [dispatch]);

    const changeHandler = useCallback((e) => {
        let file = e.target.files[0];
        if (file) {
            let fileReader = new FileReader();
            fileReader.addEventListener('load', e => {
                dispatch(setList((JSON.parse(e.target.result))));
            });
            fileReader.readAsText(file);
        }
        else {
            alert('accepts only json files');
        }
    }, [dispatch]);

    return (
        <Container>
            <div className="subject">
                <p contentEditable >Enter Subject</p>
                <input type='file' style={{ display: 'none' }} ref={fileInputRef} onChange={changeHandler} />
                <span>
                    {
                        [
                            { icon: AiOutlineUpload, helper: 'import', onClick: importHandler },
                            { icon: AiOutlineDownload, helper: 'export', onClick: exportHandler },
                            { icon: FiRefreshCw, helper: 'refresh', onClick: refreshHandler }
                        ].map(({ icon, helper, onClick }, index) => <IconButton key={index} icon={icon} helper={helper} helperDown onClick={onClick} />)
                    }
                </span>
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
        display:flex;
        align-items:center;

        &>p{
            outline:none;
            flex-grow:1;
        }

        &>span>*{
            display:inline-block;
            verticle-align:middle;
            margin:0 8px;
            font-size:15px;
        }
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
