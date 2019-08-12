import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Notes from './Notes/Notes'
import RefDemo from './Refs/RefDemo';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Notes</Link></li>
                            <li><Link to="/addnew">Add New</Link></li>
                        </ul>
                    </nav>
                </header>
                <hr />
                <Route path="/" exact component={Notes}></Route>
                <Route path="/addnew" exact component={RefDemo}></Route>
            </div>
        );
    }
}

export default Container;