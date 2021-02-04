import styled from 'styled-components';

export const Form = styled.form`
display: flex;
margin: 1.5rem 0 0;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const FormInput = styled.input`
  padding: 2rem !important;
  margin: 0rem 5rem 2rem;
  background: white;
  border-radius: 5px;
  border: 1px solid #E6E6E6;
  color: none;
  box-sizing: border-box;
  width: 462px;
  outline: none;
  `;


  export const Button = styled.button`
  background-color: #C9DAB8;
  min-width: 448px;
  padding: 24px 12px;
  font-size: 15px;
  color: white; 
  margin-top: 1rem;
  border: none;
  border-radius: 25px;
  box-sizing: content-box;
  height: 100%;
  `;

  export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `