import { View, Text } from 'react-native';
import React from 'react';

const Currency = ({ price }) => {
  return (
    <View>
      <Text>${price}</Text>
    </View>
  );
};

export default Currency;
