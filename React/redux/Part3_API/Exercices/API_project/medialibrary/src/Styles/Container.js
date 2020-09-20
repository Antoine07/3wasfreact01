import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const Wrapper = styled.section`
    display : flex ;
    margin 1% auto;
    width : 90%;
    justify-content : space-between;
    @media screen and (max-width: 600px ){
       display : block;
    }
`;

const Container = ({ children, plain }) => {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    plain : PropTypes.string
};

export default Container;