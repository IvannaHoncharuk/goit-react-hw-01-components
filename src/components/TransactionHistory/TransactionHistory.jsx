import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TableHead, TableRow } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => (
   <Box width="600px" as="table">
        <TableHead>
            <TableRow>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </TableRow>
        </TableHead>

       <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <TableRow key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </TableRow>
            ))}
        </tbody>
    </Box>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};