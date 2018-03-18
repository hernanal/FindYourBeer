import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBrew, closeModal } from '../actions';
import ReactModal from 'react-modal';

ReactModal.setAppElement('.container');

class BrewDetails extends Component {
    componentDidMount() {
        // this.props.getBrew();
        console.log(this.props.brew);
    }

    handleCloseModal() {
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.props.showModal}
                    contentLabel="onRequestClose Modal"
                    onRequestClose={this.handleCloseModal.bind(this)}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <h1>{this.props.brew.name}</h1>
                    <a href="https://placeholder.com"><img src="http://via.placeholder.com/300" className="brew_image" /></a>
                    <table id="brew_detail" className="table table-striped tableStyle">
                        <tbody >
                            <tr>
                                <td>
                                    <strong>
                                        Brewery
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.brewery}
                                </td>
                                <td>
                                    <strong>
                                        IBUs
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.ibu}
                                </td>
                                <td>
                                    <strong>
                                        Color
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.color}
                                </td>
                            </tr>
                            <tr className="brew_row" >
                                <td>
                                    <strong>
                                        Brewery Location
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.breweryLocation}
                                </td>
                                <td>
                                    <strong>
                                        Hops
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.hops}
                                </td>
                                <td>
                                    <strong>
                                        Ranking
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.ranking}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        Style
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.style}
                                </td>
                                <td>
                                    <strong>
                                        Malt
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.malt}
                                </td>
                                <td>
                                    <strong>
                                        Purchase Again?
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.purchaseAgain}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>
                                        ABV
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.abv}
                                </td>
                                <td>
                                    <strong>
                                        Yeast
                                    </strong>
                                </td>
                                <td>
                                    {this.props.brew.yeast}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </ReactModal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        brew: state.brew,
        showModal: state.showModal
    }
}

export default connect(mapStateToProps, { getBrew, closeModal })(BrewDetails);