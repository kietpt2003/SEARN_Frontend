import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            image: '',
            roleId: '',
            positionId: '',
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.handleOpenModal()
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                className={'customModal'}
                size='md'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='custom-body'>
                            <div className="input-container">
                                <label htmlFor="inputEmail">Email:</label>
                                <input type="email" className="" placeholder="Email"
                                    name={this.state.email}
                                    onChange={(event) => {
                                        this.setState({
                                            email: event.target.value
                                        })
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputPassword">Password:</label>
                                <input type="password" className="" placeholder="Password"
                                    name={this.state.password}
                                    onChange={(event) => {
                                        this.setState({
                                            password: event.target.value
                                        })
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputFirstName">First Name:</label>
                                <input type="text" className="" placeholder="First Name"
                                    name={this.state.firstName}
                                    onChange={(event) => {
                                        this.setState({
                                            firstName: event.target.value
                                        })
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputLastName">Last Name:</label>
                                <input type="text" className="" placeholder="Last Name"
                                    name={this.state.lastName}
                                    onChange={(event) => {
                                        this.setState({
                                            lastName: event.target.value
                                        })
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputAddress">Address:</label>
                                <input type="text" className="" placeholder="1234 Main St"
                                    name={this.state.address}
                                    onChange={(event) => {
                                        this.setState({
                                            address: event.target.value
                                        })
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputAddress">Phone Number:</label>
                                <input type="text" className="" placeholder="Phone Number"
                                    name={this.state.phoneNumber}
                                    onChange={(event) => {
                                        this.setState({
                                            phoneNumber: event.target.value
                                        })
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputGender">Sex:</label>
                                <select name="gender"
                                    value={this.state.gender}
                                    onChange={(event) => {
                                        this.setState({
                                            gender: event.target.value
                                        })
                                    }}
                                >
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputRole">Role:</label>
                                <select name="roleId"
                                    value={this.state.roleId}
                                    onChange={(event) => {
                                        this.setState({
                                            roleId: event.target.value
                                        })
                                    }}
                                >
                                    <option value="1">Admin</option>
                                    <option value="2">Doctor</option>
                                    <option value="3">Patient</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.props.handleCreateUser(this.state) }}>
                        Add
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal >
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



