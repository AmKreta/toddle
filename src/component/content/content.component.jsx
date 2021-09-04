import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Row from './row/row.component';
import { v4 as uuidv4 } from 'uuid';

const Content = () => {
    const list = useSelector(state => state.list);

    const [data, setData] = useState({});

    useEffect(() => {
        console.log('ran');
        setData(() => {
            let output = [];
            for (let chapter in list) {
                output.push({ type: 'chapter', name: chapter, key: uuidv4() });
                for (let unit in list[chapter]) {
                    output.push({ type: 'unit', name: unit, parentChapter: chapter, key: uuidv4() });
                    for (let topic of list[chapter][unit]) {
                        output.push({ type: 'topic', name: topic, parentUnit: unit, parentChapter: chapter, key: uuidv4() });
                    }
                }
            }
            return output;
        });
    }, [list]);

    return data.length > 0
        ? data.map((item, index) => (
            <Row
                type={item.type}
                name={item.name}
                key={item.key}
                parentChapter={item.parentChapter}
                parentUnit={item.parentUnit}
            />
        ))
        : <Row disabled />;
};



export default Content;