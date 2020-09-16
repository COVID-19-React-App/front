import styled from 'styled-components';
import loader from './../../img/loader.svg';

const Loader = styled.div`
    height: 80px;
    width: 55px;
    position absolute;
    top: 50%;
    left: 50%;
    background-image: url(${loader});
    transform: translate(-50%, -50%);
    z-index: 1000
  `

export default Loader;