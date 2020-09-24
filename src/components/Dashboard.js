import React, { Component } from 'react';
import { Card } from 'antd';
import ProfilePic from '../images/cyan.png';
import NavBar from './NavBar';

const { Meta } = Card;

export default class Dashboard extends Component {
    render() {

        return (

            <div>

                <NavBar />

                <div>  
                <Card>

                    <img src={ProfilePic} alt="Profile" />
             
                    <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Name"
                    extra={<a href="/forms">Edit</a>}
                    >
                        
                        <Meta 
                            description="This is the description"
                        />

                        <p>Inner Card content</p>
                      
                    </Card>

                </Card>
                </div>

        </div>  
        )
    }
}
