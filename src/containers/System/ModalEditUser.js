import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from "lodash"

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '1',
            image: '',
            roleId: '1',
            positionId: '',
        };
    }


    componentDidMount() {
        let { currentUser } = this.props;
        if (currentUser && !_.isEmpty(currentUser)) {
            this.setState({
                ...currentUser
            })
        }
    }

    toggle = () => {
        this.props.handleOpenEditModal()
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
                <ModalHeader toggle={() => { this.toggle() }}>Edit a User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='custom-body'>
                            <div className="input-container">
                                <label htmlFor="inputEmail">Email:</label>
                                <input type="email" className="" placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "email")
                                    }}
                                    disabled />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputFirstName">First Name:</label>
                                <input type="text" className="" placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "firstName")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputLastName">Last Name:</label>
                                <input type="text" className="" placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "lastName")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputAddress">Address:</label>
                                <input type="text" className="" placeholder="1234 Main St"
                                    value={this.state.address}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "address")
                                    }} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="inputAddress">Phone Number:</label>
                                <input type="text" className="" placeholder="Phone Number"
                                    value={this.state.phoneNumber}
                                    onChange={(event) => {
                                        this.handleOnchangeInput(event, "phoneNumber")
                                    }}
                                    disabled />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-primary px-2' color="primary" onClick={() => { this.props.handleSaveUser(this.state) }}>
                        Save changes
                    </Button>{' '}
                    <Button className='btn btn-primary px-2' color="secondary" onClick={() => { this.toggle() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);



