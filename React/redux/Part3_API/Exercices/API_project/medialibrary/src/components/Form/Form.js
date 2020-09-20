import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Styles/Button';
import Choice from './Choice';
import Select from '../../Styles/Select';
import Textarea from '../../Styles/Textarea';
import Input from '../../Styles/Input';
import Container from '../../Styles/Container';


import styled, { css } from "styled-components";

const FormGroup = styled.div(props => css`
    flex: 1;
    flex-wrap: wrap;
    label {
        width : 10%;
    }
`);

const Form = () => {
    const dispatch = useDispatch();

    const { option, options, name, bio, books, book } = useSelector(state => state.author);

    const handleChange = e => {
        const { name, value } = e.target;
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Container>
            <FormGroup>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <Input name="name" value={name} onChange={handleChange} />
                    </div>
                    <div>Bio <Textarea name="bio" value={bio} onChange={handleChange} /></div>
                    <div>
                        <Select value={option}>
                            {[...options.entries()].map(([name, value], i) => <option value={name} key={i}>{value}</option>
                            )}
                        </Select>
                    </div>
                    <div>
                        <Choice />
                    </div>
                    <div>
                        <Button color="palevioletred">
                            Add Author
                        </Button>
                    </div>
                </form>
            </FormGroup>
        </Container>
    );
}

Form.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    shop_name: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string),
};

export default Form;