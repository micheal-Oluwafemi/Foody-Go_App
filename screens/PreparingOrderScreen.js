import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    //After 5sec Navigate to another Screen
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 6700);
  }, []);

  return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
      <Image source={require('../asset/MyTaxi.gif')} className='w-96 h-96' />

      <Text className='text-lg my-10 text-white font-bold text-center'>
        Waiting for Restaurant to accept your order!
      </Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
