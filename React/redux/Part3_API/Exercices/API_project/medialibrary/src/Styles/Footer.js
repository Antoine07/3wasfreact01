import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.footer`
        width : 100%;
        background:  #6a71a1;
        padding : 1rem;
        color : #0f1f46;
`;

const Footer = ({ children}) => {
    return (
        <Wrapper >
            {children}
        </Wrapper>
    );
}

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default Footer;