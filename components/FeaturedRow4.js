import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { yummy } from '../constant/restaurants';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow4 = ({ id, title, description }) => {
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
        {yummy?.map((yum) => (
          <RestaurantCard key={yum.id} id={yum.id} {...yum} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow4;
