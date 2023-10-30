import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 100%;
`;

export const BackLink = styled(Link)`
  text-decoration: underline;
  position: absolute;
  left: 8px;
`;
