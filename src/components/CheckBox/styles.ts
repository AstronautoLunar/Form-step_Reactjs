import styled, { css } from 'styled-components';
import { Checkbox, FormControlLabel } from '@mui/material';
export const Container = styled(FormControlLabel)`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 0.4rem solid transparent;
    & span + span {
        font-size: 1.6rem;
        line-height: 3rem;
    }
    ${({ checked }) =>
        checked &&
        css`
            border-color: #91ab9f;
        `}
`;

type ContainerBorderColorProps = {
    checkedContainer: boolean;
};

export const Check = styled(Checkbox)``;
