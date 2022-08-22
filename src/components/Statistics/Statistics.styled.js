import styled from 'styled-components';

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const StatTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

