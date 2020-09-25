import React, { Component } from 'react';
import { Card } from 'antd';
import ProfilePic from '../images/cyan.png';
import NavBar from './NavBar';

const { Meta } = Card;

export default class Dashboard extends Component {
    
    render() {

       let name = "Name"
       let email = "This is user email"
       let introduction = "This user is lazy and did not put introduction"

       if(this.props.location.formInfo != undefined){
           name = this.props.location.formInfo.name
           email = this.props.location.formInfo.email
           introduction = this.props.location.formInfo.intro
       }
       else{
           name = "Name"
           email = "This is user email"
           introduction = "This user is lazy and did not put introduction"
       }

        return (

            <div>

                <NavBar />

                <div>  
                <Card>

                    <img src={ProfilePic} alt="Profile" />
             
                    <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title={name}
                        extra={<a href="/forms">Edit</a>}
                    >
                        
                        <Meta 
                            description={email}
                        />

                            <p>{introduction}</p>
                      
                    </Card>

                </Card>
                </div>

        </div>  
        )
    }
}