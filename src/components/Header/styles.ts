import styled from 'styled-components';

export const Container = styled.header`
    background: linear-gradient(180deg, #6000FE 22.77%, #007AFF 100%);
    width: 100%;
    height: 12rem;

    .content { 
        display: flex;
        align-items: center;
        justify-content: space-between;

        img { 
                width: 240px;
                height: 80px;
            }
    }

    @media (max-width: 768px) {
        padding: 1rem;
        font-size: 0.8rem;

        .content { 
            
            img { 
                width: 120px;
                height: 40px;
            }
        }    
    }
`;