import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => (
    <Box
     display="flex"
    flexDirection="column"
    justifyContent="space-between"
    width="300px"
    backgroundColor="lightgrey"
    p={3}
    as="ul">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            />
        ))}
    </Box>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};