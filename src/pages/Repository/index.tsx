import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface repositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<repositoryParams>();
    console.log(params.repository);
    

    return (
        <h1>Repository</h1>
    )
}; 

export default Repository;