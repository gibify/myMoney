import styled from 'styled-components';

export const Container = styled.button`
    background: var(--green);
    width: 180px;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    color: var(--white);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 500;


    @media (max-width: 768px) {
        width: 120px;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }
`;