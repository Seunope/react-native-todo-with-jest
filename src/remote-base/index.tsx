import React from 'react';
import {Text} from 'react-native';
import TransactionTable from './trans';

const title = 'Banking Application';

const txns = [
  {
    date: '2019-12-01',
    description: 'THE HACKERUNIVERSITY DES: CCD+ ID:0000232343',
    type: 0,
    amount: 1000,
    balance: '102,234.45',
  },
  {
    date: '2019-11-25',
    description: 'HACKERBANK DES:DEBIT O ID: 0000987945787897987987',
    type: 1,
    amount: 2450.45,
    balance: '1,234.45',
  },
  {
    date: '2019-11-29',
    description: 'HACKERBANK DES: CREDIT O ID:1223232323',
    type: 1,
    amount: 999,
    balance: '10,928',
  },
  {
    date: '2019-12-03',
    description: 'HACKERBANK INC. DES:CCD+ ID: 33375894749',
    type: 0,
    amount: 1985.4,
    balance: '2,234.45',
  },
  {
    date: '2019-11-29',
    description: 'HACKERBANK1 BP DES: MERCH PMT ID:1358570',
    type: 0,
    amount: 1520.34,
    balance: '12,234.4',
  },
  {
    date: '2019-11-29',
    description: 'HACKERBANK DES: DEBIT O ID:00097494729',
    type: 0,
    amount: 564,
    balance: '12,234.45',
  },
  {
    date: '2019-11-30',
    description: 'CREDIT CARD PAYMENT ID: 222349083',
    type: 1,
    amount: 1987,
    balance: '12,34.459',
  },
];

const RemoteBaseApp = () => {
  return (
    <>
      <Text>{title}</Text>
      <TransactionTable txns={txns} />
    </>
  );
};

export default RemoteBaseApp;
