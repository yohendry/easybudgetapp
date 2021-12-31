import React from 'react';
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

function table() {
  return (
    <Table variant="simple" fontSize="sm">
      <TableCaption>Account transacctions</TableCaption>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Payee</Th>
          <Th>Category</Th>
          <Th>Description</Th>
          <Th isNumeric>Outflow</Th>
          <Th isNumeric>Inflow</Th>
          <Th isNumeric>Balance</Th>
        </Tr>
      </Thead>
      <Tbody>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15].map((i) => {
          const n = Math.floor(Math.random() * 2);
          const value = (n ? 1 : -1) * Math.floor(Math.random() * 1580);
          console.log(n, value, 'value');
          return (
            <Tr key={i}>
              <Td>31/12/2021</Td>
              <Td><Text color="gray.500" isTruncated>Yohendry</Text></Td>
              <Td><Text color="gray.500" isTruncated>Deposito Inicial</Text></Td>
              <Td isTruncated />
              <Td isNumeric>
                {value < 0 && (
                <Text color="red.500" isTruncated>
                    {value.toFixed(2)}
                </Text>
                )}
              </Td>
              <Td isNumeric>
                {value > 0 && (
                <Text color="green.500" isTruncated>
                    {value.toFixed(2)}
                </Text>
                )}
              </Td>
              <Td isNumeric>
                <Text color="gray.500" isTruncated>
                  {value}
                </Text>
              </Td>
            </Tr>
          );
        })}

      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Date</Th>
          <Th>Payee</Th>
          <Th>Category</Th>
          <Th>Description</Th>
          <Th isNumeric>Outflow</Th>
          <Th isNumeric>Inflow</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default table;
