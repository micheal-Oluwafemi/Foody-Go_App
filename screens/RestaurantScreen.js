import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import { dishes } from '../constant/restaurants';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: { id, title, img, rating, address, genre, short_description },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        title,
        img,
        rating,
        address,
        genre,
        short_description,
      })
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className='relative'>
          <Image source={img} className='w-full h-56 bg-gray-200 p-4' />

          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
          >
            <ArrowLeftIcon size={20} color='#00ccbb' />
          </TouchableOpacity>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row items-center space-x-1'>
              <StarIcon color='green' opacity={0.5} size={22} />
              <Text className='text-xs text-gray-500 '>
                <Text className='text-green-500'>{rating}</Text> . {genre}
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <MapPinIcon color='gray' opacity={0.4} size={22} />
              <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
            </View>

            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>

          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <Text className='flex-1 pt-2 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00ccbb' />
          </TouchableOpacity>
        </View>

        <View className='pb-36'>
          <Text className='pt-6 px-4 mb-3 font-bold text-xl'>Menu</Text>

          {/* DishRow */}
          {dishes.map((dish) => (
            <DishRow key={dish.id} id={dish.id} {...dish} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
