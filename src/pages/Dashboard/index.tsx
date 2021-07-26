import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Repository } from './styled';
import logo from '../../assets/logo.svg';
import toast, { Toaster } from 'react-hot-toast';

import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

interface RepositoryProps {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(false)
    const [repositories, setRepositories] = useState<RepositoryProps[]>(() => {
        const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');
        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        } else {
            return []
        }
        
    });

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories])

    async function handleAddNewRepository (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(!inputValue) {
            toast.error('Digite o autor/nome do repositório.');
            setInputError(true);
            return;
        }
        
        try {
            const response = await api.get<RepositoryProps>(`/repos/${inputValue}`)
            const repository = response.data;

            setRepositories([...repositories, repository]);

            setInputError(false);
            setInputValue('');          
        } catch {
            toast.error('O repositório não foi encontrado');
            setInputError(true);
        }
    };

    return (
        <Container>
            <Toaster/>
            <header>
                <img src={logo} alt="Github Explorer" />
                <h1>Explore Repositórios no Github.</h1>
                
                <Form hasError={inputError} onSubmit={handleAddNewRepository}>
                    <input 
                        placeholder="Digite o nome do repositório"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button type="submit">Pesquisar</button>
                </Form>
            </header>

            <Repository>
                {repositories.map(repository =>                
                    <Link to={`/repository/${repository.full_name}`} key={repository.full_name}>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                        <div>
                            <h3>{repository.full_name}</h3>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20}/>
                    </Link>
                )}
            </Repository>
        </Container>
    )
}; 

export default Dashboard;