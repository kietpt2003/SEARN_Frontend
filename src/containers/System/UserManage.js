import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManagement.scss';
import { handleGetAllUsers, handleCreateUser, handleDeleteUser } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from "../../utils/emitter"
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayUsers: [],
            isOpen: false
        }
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    handleOpenModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    createUser = async (user) => {
        try {
            let response = await handleCreateUser(user);
            if (response && response.errCode !== 0) {
                alert(response.erMessage)
            } else {
                this.getAllUsers();
                this.handleOpenModal();
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (error) {
            console.log(error);
        }
    }

    getAllUsers = async () => {
        let response = await handleGetAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrayUsers: response.users,
            })
        }
    }

    handleDelete = async (userId) => {
        try {
            let response = await handleDeleteUser(userId);
            if (response && response.errCode === 0) {
                this.getAllUsers();
            } else {
                alert(response.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="users-container">
                <div className='title text-center'>
                    Manage User with Kiet
                </div>
                <div className='mt-4 mx-1'>
                    <button className='btn btn-primary px-2' onClick={() => { this.handleOpenModal() }}><i className="fas fa-plus"></i> Add new user</button>
                </div>
                <div className='mt-2 mx-1'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                            {this.state.arrayUsers.map((user) => (
                                <tr className="tableRow" key={user.id}>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.firstName}
                                    </td>
                                    <td>
                                        {user.lastName}
                                    </td>
                                    <td>
                                        {user.address}
                                    </td>
                                    <td>
                                        <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="btn-delete" onClick={() => { this.handleDelete(user.id) }}><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ModalUser isOpen={this.state.isOpen} createUser={this.createUser} handleOpenModal={this.handleOpenModal} />
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
