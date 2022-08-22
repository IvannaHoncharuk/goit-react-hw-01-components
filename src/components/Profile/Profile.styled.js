import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid black;
`;