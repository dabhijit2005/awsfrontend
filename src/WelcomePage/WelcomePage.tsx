import { SetStateAction, useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { data, useNavigate } from 'react-router';
import { httpService } from 'src/HttpService'; 

export function WelcomePage() {

    const navigate = useNavigate();
    const [content, setContent] = useState('');

    useEffect(() => {
        httpService.fetch('/api/public')
        .then((response: { json: () => any; }) => response.json())
        .then((data: { content: SetStateAction<string>; }) => setContent(data.content));
    }, []);

    return (
    <div>
        <p>Login first to see private content</p>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/private')}>Private content</button>
    </div>
);
}

export default WelcomePage;