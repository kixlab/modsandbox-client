import React from 'react';
import palette from '../../lib/styles/palette';
import styled, {css} from 'styled-components';

export interface FlairTextProps {
  text: string
}

function FlairText({text}: FlairTextProps) {
  if(text === '') {
    return null;
  }
  return (
    <FlairDiv>{text}</FlairDiv>
  )
}

const flairStyle = css`
  background: ${palette.gray2};
  color: ${palette.gray6};
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
`

const FlairDiv = styled.div`
  ${flairStyle}
`

export default FlairText
