import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div id="landing_content"> 
                            <h1>Welcome to Find Your Brew!</h1>
                            <Link className="btn btn-primary btn-lg" to="/brews">
                                <i className="fa fa-beer">
                                </i> What can we get you?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}