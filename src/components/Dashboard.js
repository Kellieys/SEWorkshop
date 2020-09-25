import React, { Component } from 'react';
import { Card } from 'antd';
import ProfilePic from '../images/cyan.png';
import NavBar from './NavBar';
import '../styles/Dashboard.css';

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

                <div className={"mainContainer"}>  
                <Card
                    style={{ borderWidth: 6, padding: 50, borderBottomColor:'#8357c5' }}
                >

                    <img src={ProfilePic} alt="Profile"  className={"profilePic"}/>
             
                    <div className={"innerCard"}>
                            <Card
                                style={{ marginTop: 16, padding: 20 }}
                                type="inner"
                                title={name}
                                extra={<a href="/forms">Edit</a>}
                            >
                                
                                <Meta 
                                    description={email} 
                                />

                                    <p className={"intro"}>{introduction}</p>
                            
                            </Card>
                    </div>

                </Card>
                </div>

        </div>  
        )
    }
}