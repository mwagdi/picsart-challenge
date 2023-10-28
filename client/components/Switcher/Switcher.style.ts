import styled from 'styled-components';

export const Wrapper = styled.div<{ on: string }>`
  width: 80px;
  background: #c8c7c7;
  border-radius: 4px;
  border: 1px solid #929292;
  cursor: pointer;
  display: flex;
  flex-direction: ${({ on }) => (on === 'true' ? 'row-reverse' : 'row')};
`;

export const SwitcherState = styled.div`
  width: 50%;
  border-radius: 4px;
  font-size: 12px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.switcher.backgroundColor};
  color: ${({ theme }) => theme.switcher.textColor};
  text-align: center;
  padding: 4px 0;
`;
