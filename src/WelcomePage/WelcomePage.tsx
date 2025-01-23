import { SetStateAction, useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { data, useNavigate } from 'react-router';
import { httpService } from 'src/HttpService'; 

export function WelcomePage() {

    const navigate = useNavigate();
    const [content, setContent] = useState('');

    useEffect(() => {
        httpService.fetch({url :'/public'})
        .then((response: { json: () => any; }) => response.json())
        .then(data => setContent(data.message));
    }, []);

    return (
    <div>
        <p>Login first to see private content</p>
        <Button onClick={() => navigate('/login')}>Login</Button>
        <Button onClick={() => navigate('/private')}>Private content</Button>
        <div>By the way, the server says: {content}</div>
    </div>
);
}

export default WelcomePage;