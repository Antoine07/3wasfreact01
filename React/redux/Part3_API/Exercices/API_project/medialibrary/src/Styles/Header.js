import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.header`
   width : 90%; margin 0 auto;
   background: #6a71a1;
`;  

const Header = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Header;