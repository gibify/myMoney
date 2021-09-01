import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: transparent;
    margin-top: -5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .card { 
        background: var(--white);
        padding: 1.5rem 2rem;
        border-radius: 4px;
        font-style: normal;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        color: var(--title);

        display: flex;
        flex-direction: column;

        header { 
            display: flex;
            align-items: center;
            justify-content: space-between;
           
            span { 
                font-size: 1rem;
                line-height: 1.5rem;
                text-transform: uppercase;
            }
        }

        h3 { 
            margin-top: 1rem;
            font-size: 2.25rem;
            line-height: 3.75rem;
        }
    }

    #total { 
        background: var(--green);
        color: var(--white);

        h3 { 
            color: var(--white); 
        }
    }

    @media (max-width: 768px) {
       flex-direction: column;
       padding: 1rem;

       .card { 
           width: 100%;
            padding: 0.5rem 1rem;

           & + .card { 
               margin-top: 1.5rem;
           }
       }
    }
`;