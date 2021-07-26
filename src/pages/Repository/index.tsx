import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { Container, RepositoryInfo, Issues } from './styled';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

interface repositoryParams {
    repository: string;
}

interface repositoryProps {
    full_name: string;
    description: string;

    owner: {
        login: string;
        avatar_url: string;
    };

    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

interface issue {
    title: string;
    id: string;
    html_url: string;

    user: {
        login: string;
    };
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<repositoryParams>();

    const [repository, setRepository] = useState<repositoryProps | null>(null);
    const [issues, setIssues] = useState<issue[]>([]);
    
    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => 
            setRepository(response.data)
        );

        api.get(`repos/${params.repository}/issues`).then(response => 
            setIssues(response.data)
        );
    },[params.repository])

    return (
        <Container>
            <header>
                <div className="logo">
                    <img src={logo} alt="GitHub Explorer" />
                    <Link to="/">
                        <FiChevronLeft size={16}/>
                        Voltar 
                    </Link>
                </div>

                { repository && 
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />

                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>

                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>

                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
                }
            </header>

            <Issues>
                {issues.map(issue => 
                    <a href={issue.html_url} target="__blank" key={issue.id}>
                        <div>
                            <h3>{issue.title}</h3>
                            <p>{issue.user.login}</p>
                        </div>

                        <FiChevronRight size={20}/>
                    </a>
                )}
            </Issues>
        </Container>
    )
}; 

export default Repository;