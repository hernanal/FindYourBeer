import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBrews, getBrew, showModal } from '../actions';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import BrewDetails from './brew_details_modal';

class BrewList extends Component {
    componentDidMount() {
        this.props.getBrews();
        // this.props.getBrew(1);
    }

    renderListItems() {
        return _.map(this.props.brews, brew => {
            return (
                <tr className="brew-list-item" key={brew.id} id={brew.id} onClick={this.handleRowClick.bind(this)}>
                    <td>{brew.name}</td>
                    <td>{brew.brewery}</td>
                    <td>{brew.style}</td>
                    <td>{brew.ranking}</td>
                </tr>
            );
        })
    }

    handleRowClick(event) {
        console.log(event.target.parentNode.id);
        debugger;
        this.props.showModal();
        this.props.getBrew(event.target.parentNode.id);
    }

    render() {
        return (
            <div>
                <img src="src/images/brew-list-bkrd.jpg" id="images" />
                <div className="brew_list_bkd">
                    <div className="brew_list" >
                        <h3>Your Brews</h3>
                        <Link className="btn btn-primary" to="/brews/add" >Add a Brew</Link>
                        <BrewDetails />
                        <table className="table table-bordered table-hover" align="center" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Brewery</th>
                                    <th>Style</th>
                                    <th>Ranking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderListItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        brews: state.brews
    };
}

export default connect(mapStateToProps, { getBrews, getBrew, showModal })(BrewList);