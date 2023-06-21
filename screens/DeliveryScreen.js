import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XIcon, XMarkIcon } from 'react-native-heroicons/solid';
import { Image } from 'react-native';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className='bg-[#00ccbb] flex-1 '>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-5 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-3xl font-bold'>45-55 Minutes</Text>
            </View>
            <Image
              source={require('../asset/rideimg.jpeg')}
              className='h-20 w-20'
            />
          </View>

          <Text>
            Your order at{' '}
            <Text className='text-base font-semibold'>{restaurant.title}</Text>{' '}
            is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <Image
        className='flex-1 -mt-10 z-0'
        source={require('../asset/mappy.jpeg')}
      />

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image
          source={require('../asset/user-4.jpg')}
          className='h-12 w-12 rounded-full ml-5 p-4 bg-gray-300'
        />

        <View className='flex-1'>
          <Text className='text-lg'>Wandy Mike</Text>
          <Text className='text-gray-40'>Your Rider</Text>
        </View>

        <Text className='text-[#00ccbb] text-lg mr-5 font-bold'>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
