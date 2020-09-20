import styled from "styled-components";

const Textarea = styled.textarea`
    border-radius: 3px;
    border: 1px solid palevioletred;
    display: block;
    margin: 0 0 1em;
    padding: 1rem;
    ::placeholder {
      color: palevioletred;
    }
  `;

export default Textarea;