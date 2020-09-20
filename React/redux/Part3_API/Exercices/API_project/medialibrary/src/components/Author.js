import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Styles/Button';

const Author = ({ name, bio, shop_name, books, handeClick }) => {

    return (
        <div >
            <h1>{name}</h1>
            <p>Bio: {bio}</p>
            <p>Shop: {shop_name}</p>
            {books.length > 0 && (
                <Button color="#6a71a1" onClick={() => handeClick({ books: books, author: name} )}>Show details</Button>
            )}
        </div>
    );
}

Author.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    shop_name: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string),
};

export default Author;