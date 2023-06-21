import { View, Text } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard';
import { restaurants } from '../constant/restaurants';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00ccbb' />
      </View>

      <Text className='text-gray-500 px-4 text-sm'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* RestaurantCard */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            // imgUrl={require('../asset/KFC.jpeg')}
            {...restaurant}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
