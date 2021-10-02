import React from 'react';
import { CheckUserIsAdmin } from '../utils';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const AdminLink = () => {
    const { currentUser } = useSelector(mapState);

    const isAdmin = CheckUserIsAdmin(currentUser);
    if (!isAdmin) return null;
    return (
        <li><Link to="/santosh-pal">Only Admin</Link></li>
    )
}

export default AdminLink;
