import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'components/data/user.json';
import data from 'components/data/data.json';
import friends from 'components/data/friends.json';
import transactions from 'components/data/transactions.json';

export const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Box display="flex" justifyContent="space-around">
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
          <FriendList friends={friends} />
          <TransactionHistory items={transactions}/>
        </Box>
      </>
  );
};
