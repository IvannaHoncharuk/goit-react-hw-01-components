import PropTypes from 'prop-types';
import { FriendsItem, Status } from './FriendListItem.styled';


export const FriendListItem = ({ isOnline, avatar, name }) => (
    <FriendsItem>
        <Status isOnline={isOnline}></Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </FriendsItem>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

