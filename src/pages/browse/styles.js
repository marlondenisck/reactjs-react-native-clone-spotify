import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  /* flex 1 ocupa todo espaco */
  flex: 1;
  margin-top: 55px; /* 110px */
  display: flex;
  /* deixa um abaixo do outro */
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  /* deixa um ao lado do outro */
  display: flex;
  margin-top: 20px;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;
  color: #fff;
  img {
    height: 250px;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
  }
  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:first-child {
    margin: 0;
  }

  &:hover img {
    opacity: 0.4;
  }
`;
