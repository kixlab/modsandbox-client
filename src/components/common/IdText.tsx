import React from 'react'
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';

export interface IdTextProps {
  text: string
}

function IdText({text}: IdTextProps) {
  if(text === '') return null;
  return (
    <IdDiv>#{text}</IdDiv>
  )
}

const idStyle = css`
  font-weight: 300;
  font-style: italic;
  color: ${palette.gray7};
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
`
const IdDiv = styled.div`
  ${idStyle}
`;

export default IdText
