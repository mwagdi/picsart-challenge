import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 200px;
  aspect-ratio: 1 / 1;
  max-width: 100%;
  border-radius: 50%;
  background: #c8c7c7;
`;

export const BackLink = styled(Link)`
  text-decoration: underline;
  position: absolute;
  left: 8px;
`;
