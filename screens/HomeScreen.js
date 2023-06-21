import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import { ViewComponent } from 'react-native';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FeaturedRow2 from '../components/FeaturedRow2';
import FeaturedRow3 from '../components/FeaturedRow3';
import FeaturedRow4 from '../components/FeaturedRow4';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-4 mb-24'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={require('../asset/user.png')}
          className='h-10 w-10 bg-grey-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now! </Text>
          <Text className='font-bold text-xl leading-[20px]'>
            Current Location
            <ChevronDownIcon size={20} color='#00ccbb' />
          </Text>
        </View>

        <UserIcon size={35} color='#00ccbb' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row bg-gray-200 p-3 flex-1'>
          <MagnifyingGlassIcon color='grey' size={20} />
          <TextInput
            placeholder='Restaurants at cuisines'
            placeholderTextColor='#aaa'
            keyboardType='default'
            className='mx-1'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00ccbb' />
      </View>

      {/* Body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id='12'
          title='Featured'
          description='Paid placements from our partners'
        />

        {/* Tasty Discounts */}
        <FeaturedRow2
          id='123'
          title='Tasty Discounts'
          description="Everyone's been enjoying there juicy discounts"
        />

        {/* Offers near you */}
        <FeaturedRow3
          id='1234'
          title='Offers near you'
          description='Why not support your local restaurant tonight'
        />
        <FeaturedRow4
          id='1235'
          title='Nurishing Appitizers'
          description='What are you waiting for start ordering...'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
