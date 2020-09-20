import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { show_details } from '../actions/actions-types';

import Container from '../Styles/Container';
import Author from './Author';
import Col from '../Styles/Col';
import Footer from '../Styles/Footer';

import styled, { css } from 'styled-components';

const Detail = styled.div(props => css`
       width : 90%;
       ul{
         li{ list-style : none ; margin 0.4rem 0 ;}
       }
       transform: translateY(${props => (props.scrollPosition)}px);
`);

const Home = () => {

  const { author, authors, isLoading, books, count } = useSelector(
    state => ({
      authors: state.author.authors,
      isLoading: state.load.isLoading,
      books: state.author.books,
      author: state.author.author,
      count: state.author.authors.length
    })
  );
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handeClick = (details, pos) => {
    dispatch(show_details(details));
    const h = 200 * pos;
    setScrollPosition(h);
  }

  if (isLoading === false)
    return (
      <>
        <Container>
          <Col bg="#c4d5ff" >
            {authors.map((author, pos) => <Author
              key={pos}
              {...author}
              handeClick={details => handeClick(details, pos)}

            />)}
          </Col>
          <Col bg="#c4d5ff" >
            {books.length > 0 && (
              <Detail scrollPosition={scrollPosition}  >
                <ul  >
                  <h3>Liste de livres {author} </h3>
                  {books.map((book, i) => (
                    <li  >{book}</li>
                  ))}
                </ul>
              </Detail>
            )
            }
          </Col>
        </Container>
        <Container>
          <Footer>
            <p>Footer</p>
          </Footer>
        </Container>
      </>
    )

  return (
    <Container>
      <p>Is loading ....</p>
    </Container>
  )
}

export default Home;