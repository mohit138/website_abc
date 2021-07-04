import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:10;
    width:100%;
    height:100%;
    background: #111;
    display:grid;
    align-items: center;
    top:0;
    left:0;
    transform: translateX(-100%);
    transition: 0.5s ease-in-out;
    // opacity: ${({open}) => (open ? '100%' : '0')};
    // top: ${({open}) => (open ? '0' : '-100%')};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;


export const SidebarWrapper = styled.div`
    padding-top: 100px;
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;
    padding:0;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
    @media screen and (max-height: 430px){
        grid-template-rows: repeat(6,57px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &.active{
        color:lightblue;
        transition: .3s ease-in-out;
    }

    &:hover{
        color:#777;
        transition: .3s ease-in-out;
    }

    

`;