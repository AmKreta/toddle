import React from 'react';
import { useSelector } from 'react-redux';
import Row from './row/row.component';

const Content = () => {
    const list = useSelector(state => state.list);
    return (() => {
        let output = [];

        for (let chapter in list) {
            output.push({ type: 'chapter', name: chapter });
            for (let unit in list[chapter]) {
                output.push({ type: 'unit', name: unit, parentChapter: chapter });
                for (let topic of list[chapter][unit]) {
                    output.push({ type: 'topic', name: topic, parentUnit: unit, parentChapter: chapter });
                }
            }
        }

        return output.length > 0
            ? output.map((item, index) => (
                <Row
                    type={item.type}
                    name={item.name}
                    key={index}
                    parentChapter={item.parentChapter}
                    parentUnit={item.parentUnit}
                />
            ))
            : <Row disabled />;
    })()
};



export default Content;