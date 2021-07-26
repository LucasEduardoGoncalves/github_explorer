import styled, { css } from 'styled-components';

import { shade } from 'polished';

type formProps = {
    hasError: boolean,
};

export const Container = styled.div`
    header {
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;

        img {
            max-width: 10rem;
        }

        h1 {            
            margin-top: 1rem;
            max-width: 28rem;

            font-size: 3rem;
            font-weight: 500;
            line-height: 3.5rem;

            color: #3a3a3a;
        }
    }
`;

export const Form = styled.form<formProps>`
    max-width: 47rem;

    display: flex;
    align-items: center;


    input {
        flex: 1;
        border-radius: 0.5rem 0 0 0.5rem;
        border: 2px solid #fff;
        border-right: 0;

        color: #3a3a3a;
        &::placeholder {
            color: #a8a8b3;
        }

        ${props => props.hasError && css`
            border-color: #c53030;
        `}
    }

    button {
        width: 14rem;
        border-radius: 0 0.5rem 0.5rem 0;

        background: #04d361;
        color: #fff;
        font-weight: 500;
        border: 0;

        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }

    input, button {
        padding: 0 1rem;
        height: 5rem;
    }
`;

export const Repository = styled.main`
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
        display: flex;
        align-items: center;

        width: 100%;
        max-width: 47rem;
        border-radius: 0.5rem;

        padding: 1rem;
        gap: 1rem;

        background: #fff;     
        text-decoration: none;
        transition: transform 0.2s;

        
        &:hover {
            transform: translateX(2rem);
        }
        
        img {
            width: 4rem;
            border-radius: 50%;
        }

        div {
            flex: 1;
            margin: 0 1rem;
            
            h3 {
                font-size: 1.2rem;
                color: #3d3d4d;
                font-weight: 600;
            }

            p {
                font-size: 1rem;
                color: #a8a8b3;
                
                margin-top: 0.2rem;
            }
        }

        svg { 
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;