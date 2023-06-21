import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
  id,
  title,
  img,
  rating,
  address,
  genre,
  short_description,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className='bg-white mr-3 shadow'
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          title,
          img,
          rating,
          address,
          genre,
          short_description,
        });
      }}
    >
      <Image source={img} className='h-36 w-64 rounded-sm' />

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='text-gray-500 text-xs'>
            <Text className='text-green-500'>{rating}</Text> . {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='grey' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500 '>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
