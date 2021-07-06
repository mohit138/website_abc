import styled, { keyframes } from 'styled-components';
import { bounce,fadeInLeft,fadeInRight,fadeIn } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInAnimation = keyframes`${fadeIn}`;

export const BouncyDiv = styled.div`
  animation: ${props => props.time} ${bounceAnimation};
`;

export const FadeInLeftDiv= styled.div`
    animation: ${props => props.time} ${fadeInLeftAnimation};  
`;

export const FadeInRightDiv= styled.div`
    animation: ${props => props.time} ${fadeInRightAnimation};  
`;

export const FadeInDiv= styled.div`
    animation: ${props => props.time} ${fadeInAnimation};  
`;