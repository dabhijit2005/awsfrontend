import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import httpService from "src/HttpService";

export function LoginPage() {
    const [cognitoUrl, setCognitoUrl] = useState('');
    
    useEffect(() => {
        httpService.fetch({url: '/auth/url'})
        .then(response => response.json())
        .then(data => setCognitoUrl(data.url));
    }, []);
    return (<div>
        <Button onClick={() => {window.location.href = cognitoUrl}}> Sign in with Google </Button>
    </div>);
}

export default LoginPage;