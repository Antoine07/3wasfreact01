import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { add_choice, set_choice } from '../../actions/actions-types';
import Input from '../../Styles/Input';
import Button from '../../Styles/Button';

const Choice = () => {
    const dispatch = useDispatch();
    const { choices, choice} = useSelector(state => state.author);

    const handeChange = e => {
        const { value } = e.target;
        
        dispatch(set_choice(value));
    }

    const handleClick = e => {
        dispatch(add_choice());
    }

    return (
        <>
            <Input placeholder="choice book" value={choice} onChange={handeChange} />
            <Button small onClick={handleClick}>Add Book</Button>
            {choices.length > 0 && (
                <ul>
                    {choices.map((choice, i) => <li key={i}>{choice}</li>)}
                </ul>
            )}
        </>
    );
}

Choice.propTypes = {

};

export default Choice;