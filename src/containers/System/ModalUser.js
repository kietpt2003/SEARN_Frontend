import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { handleGetAllUsers, handleCreateUser } from '../../services/userService';
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
            gender: '1',
            image: '',
            roleId: '1',
            positionId: '',
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.handleOpenModal()
    }

    handleOnchangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = async () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert(`Missing parameter ${arrInput[i]}`);
                break;
            }
        }
        return isValid;
    }

    handleCreateUser = async (user) => {
        let check = await this.checkValidateInput();
        if (!check) {
            return;
        }
        this.props.createUser(user);
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
                                        this.handleOnchangeInput(event, "email")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputPassword">Password:</label>
                                <input type="password" className="" placeholder="Password"
                                    name={this.state.password}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "password")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputFirstName">First Name:</label>
                                <input type="text" className="" placeholder="First Name"
                                    name={this.state.firstName}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "firstName")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputLastName">Last Name:</label>
                                <input type="text" className="" placeholder="Last Name"
                                    name={this.state.lastName}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "lastName")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputAddress">Address:</label>
                                <input type="text" className="" placeholder="1234 Main St"
                                    name={this.state.address}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "address")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputAddress">Phone Number:</label>
                                <input type="text" className="" placeholder="Phone Number"
                                    name={this.state.phoneNumber}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "phoneNumber")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputGender">Sex:</label>
                                <select name="gender"
                                    value={this.state.gender}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "gender")
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
                                        this.handleOnchangeInput(event, "roleId")
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
                    <Button color="primary" onClick={() => { this.handleCreateUser(this.state) }}>
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



