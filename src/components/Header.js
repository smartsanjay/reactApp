import React from 'react';
import history from '../history';
import { connect } from 'react-redux';
export const Header = (props) => {
    let path=history.location.pathname;
    return (
        <div className="row">
            <div className="header">
                <nav>
                    <ul>
                        <li><a href="#" onClick={(e)=>{e.preventDefault();history.push("/");}} className={(path==="/")?"active":""}>Add Book</a></li>
                        <li><a href="/list" onClick={(e)=>{e.preventDefault();history.push("/list");}} className={(path==="/list")?"active":""}>View Listings</a></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}
export default connect()
