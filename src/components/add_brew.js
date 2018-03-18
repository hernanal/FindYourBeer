import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class AddBrew extends Component {
    renderInputField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help" >
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    renderSelectField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <select
                    className="form-control"
                    type="text"
                    {...field.input}
                >
                    <option></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <div className="text-help" >
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        debugger;
        this.props.addBrew(values, () => {
            this.props.history.push('/brews');
        });
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="add_brew">
                    <h1><span className="label label-default">Add a Brew</span></h1>
                    <table>
                        <tr>
                            <td className="inputStyle">
                                <Field
                                    label="Name"
                                    name="name"
                                    component={this.renderInputField}
                                    className="col-md-5"
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="Brewery"
                                    name="brewery"
                                    component={this.renderInputField}
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="Brewery Location"
                                    name="breweryLocation"
                                    component={this.renderInputField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="inputStyle">
                                <Field
                                    label="Style"
                                    name="style"
                                    component={this.renderInputField}
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="ABV"
                                    name="abv"
                                    component={this.renderInputField}
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="IBUs"
                                    name="ibu"
                                    component={this.renderInputField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="inputStyle">
                                <Field
                                    label="Hops"
                                    name="hops"
                                    component={this.renderInputField}
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="Malt"
                                    name="malt"
                                    component={this.renderInputField}
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="Yeast"
                                    name="yeast"
                                    component={this.renderInputField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="inputStyle">
                                <Field
                                    label="Color"
                                    name="color"
                                    component={this.renderInputField}
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="Image URL"
                                    name="imageUrl"
                                    component={this.renderInputField}
                                />
                            </td>
                            <td className="inputStyle">
                                <Field
                                    label="Ranking"
                                    name="ranking"
                                    component={this.renderInputField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="inputStyle">
                                <Field
                                    label="Purchase Again?"
                                    name="purchaseAgain"
                                    component={this.renderSelectField}
                                />
                            </td>
                        </tr>
                    </table>
                    <div className="add_brew-centerAlign">
                        <button
                            type="submit"
                            className="btn btn-success inputStyle"
                        >
                            Submit
                        </button>
                        <Link
                            className="btn btn-warning"
                            to="/brews"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {

        errors.name = "Enter the name of the brew!"
    }
    if(!values.purchaseAgain && values.purchaseAgain != "") {
        errors.purchaseAgain = "Select Yes or No!"
    }
    // ENTER THE REST OF THE VALIDATION LOGIC BELOW

    return errors;
}

export default reduxForm({
    validate,
    form: 'AddBrewForm'
})(
    connect(null, actions)(AddBrew)
    );


