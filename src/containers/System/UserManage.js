import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManagement.scss';
import { handleGetAllUsers } from '../../services/userService';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayUsers: []
        }
    }

    async componentDidMount() {
        let response = await handleGetAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrayUsers: response.users
            })
        }
    }

    render() {
        return (
            <div className="users-container">
                <div className='title text-center'>
                    Manage User with Kiet
                </div>
                <div className='mt-4 mx-1'>
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
                                        <button className="btn-edit"><i class="fas fa-pencil-alt"></i></button>
                                        <button className="btn-delete"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
