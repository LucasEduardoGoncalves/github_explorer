import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    header {
        .logo {
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                max-width: 10rem;
            }

            a {
                text-decoration: none;
                display: flex;
                align-items: center;

                color: #a8a8b3;
                transition: color 0.2s;

                svg {
                    margin-right: 0.3rem;
                    transition: transform 0.2s;
                }

                &:hover {
                    color: ${shade(0.2, '#a8a8b3')};
                    svg {
                        transform: translateX(-0.5rem);
                    }                    
                }
            }
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 5rem;

    header {
        display: flex;
        align-items: center;

        img {
            max-width: 8rem;
            max-height: 8rem;
            border-radius: 50%;;
        }

        div {
            margin-left: 2rem;

            strong {
                font-size: 1.8rem;
                color: #3d3d4d;
            }

            p {
                font-size: 1.3rem;
                color: #737380;

                margin-top: 0.5rem;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;

        margin-top: 2.3rem;
        gap: 5rem;

        li {
            strong {
                display: block;
                font-size: 1.8rem;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 0.5rem;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
        display: flex;
        align-items: center;

        width: 100%;
        border-radius: 0.5rem;

        padding: 1rem;
        gap: 1rem;

        background: #fff;     
        text-decoration: none;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(2rem);
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