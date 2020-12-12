import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    padding: 20px 40px;
    width: 100%;
    background-color: #ffffff;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.primary};
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 10px 25px;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.color.gray};
    }
`;

export const Input = styled.input`
    padding: 8px 10px;
    border: none;

    &:focus {
        border: 1px solid ${({ theme }) => theme.color.gray};
    }
`;
