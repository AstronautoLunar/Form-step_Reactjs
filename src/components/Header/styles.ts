import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;

    background-color: #a1a1a1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.li`
    list-style-type: none;
    background-color: #ffffff;
    padding: 16px;
    margin-right: 16px;

    &:link {
        text-decoration: none;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Text = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #a1a1a1;
`;
