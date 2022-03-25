import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function GitHubCard({ userInfo }) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userInfo.avatar_url} style={{height: '100px'}} />
                <Card.Body>
                    <Card.Title>{userInfo.name}</Card.Title>
                    <Card.Text>
                        {userInfo.bio}
                    </Card.Text>
                    <Button variant="primary" ><a href={userInfo.html_url}>Go somewhere</a></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default GitHubCard