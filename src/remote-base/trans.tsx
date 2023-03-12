import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Button} from 'react-native';

function TransactionTable({txns}) {
  const [tansData, setTansData] = useState(txns);
  const [selectedDate, setSelectedDate] = useState();

  const sort = () => {
    console.log('I was here');
    const compare = (a: any, b: any) => {
      const amountA = Number(a.amount);
      const amountB = Number(b.amount);

      let comparison = 0;
      if (amountA > amountB) {
        comparison = 1;
      } else if (amountA < amountB) {
        comparison = -1;
      }
      return comparison;
    };
    const k = [...tansData.sort(compare)];
    setTansData(k);
    console.log('I was hereeee', k);
  };

  const listTransaction = (trans: any, index: number) => {
    return (
      <View key={index} style={{flexDirection: 'row'}} testID={trans.balance}>
        <Text>{trans.date}</Text>
        <Text>{trans.type === 1 ? 'Debit' : 'Credit'}</Text>
        <Text>{trans.amount}</Text>
      </View>
    );
  };

  const listTransaction2 = () => {
    return tansData.map((trans: any, index: number) => {
      return (
        <View key={index} style={{flexDirection: 'row'}} testID={trans.balance}>
          <Text>{trans.date}</Text>
          <Text>{trans.type === 1 ? 'Debit' : 'Credit'}</Text>
          <Text>{trans.amount}</Text>
        </View>
      );
    });
  };

  const filterByDate = () => {
    if (!selectedDate) {
      setTansData(txns);
      return;
    }

    const isADate = Date.parse(selectedDate) > 0 ? true : false;
    console.log('isADate', isADate);
    if (!isADate) {
      setTansData(txns);
      return;
    }

    const newTrans = txns.filter(function (el: any) {
      if (el.date === selectedDate) {
        return el;
      }
    });
    setTansData(newTrans);
  };

  return (
    <View style={{alignContent: 'center', marginTop: 50}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{marginRight: 10}}>Transaction Date</Text>
        <TextInput
          style={{paddingLeft: 10, paddingRight: 10}}
          onChangeText={text => setSelectedDate(text)}
          value={selectedDate}
          testID="app-input"
          placeholder="YYYY-MM-DD"
        />
        <View>
          <Button
            title="Filter"
            testID="submit-button"
            onPress={filterByDate}
          />
        </View>
      </View>

      <View style={{minWidth: '65%'}}>
        <View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>Date</Text>
              <Text>Type</Text>
              <Text testID="amount" onPress={sort}>
                Amount ($)
              </Text>
            </View>
            <View testID="records-body">
              {listTransaction2()}
              {/* {tansData.length !== 0 ? (
                <FlatList
                  data={tansData}
                  renderItem={({item, index}) => listTransaction(item, index)}
                  keyExtractor={(item, index) => index.toString()}
                />
              ) : null} */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TransactionTable;
