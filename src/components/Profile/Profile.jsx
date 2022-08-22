import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Description, StatsList, StatsItem } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
    <Box
        display="flex"
        flexDirection="column"
        backgroundImage="linear-gradient(to bottom, #157cc7,#157cc7 40%,#ff0 60%, #ff0)"
        p={3}
        width="300px"
        as="div">
        <Description>
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                width="200px"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </Description>

        <StatsList>
            <StatsItem>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </StatsItem>
            <StatsItem>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </StatsItem>
        </StatsList>
    </Box>
);

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};