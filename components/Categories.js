import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard imgUrl={require('../asset/pizzatag.jpeg')} title='Pizza' />
      <CategoryCard imgUrl={require('../asset/toshi.jpeg')} title='Thai' />
      <CategoryCard imgUrl={require('../asset/Sushi.jpeg')} title='Sushi' />
      <CategoryCard imgUrl={require('../asset/wagamama.jpeg')} title='Asian' />
      <CategoryCard imgUrl={require('../asset/Cake.jpeg')} title='Cakes' />
      <CategoryCard imgUrl={require('../asset/reftag.jpeg')} title='Refresh' />
      <CategoryCard
        imgUrl={require('../asset/icecream.jpeg')}
        title='Icecream'
      />
      <CategoryCard
        imgUrl={require('../asset/doughnuts.jpeg')}
        title='Doughnuts'
      />
      <CategoryCard
        imgUrl={require('../asset/beefpasta.jpeg')}
        title='Beef pasta'
      />
      <CategoryCard
        imgUrl={require('../asset/cocacola.jpeg')}
        title='Cocacola'
      />
      <CategoryCard imgUrl={require('../asset/corndog.jpeg')} title='Corndog' />
      <CategoryCard imgUrl={require('../asset/beef.jpeg')} title='Beef' />
      <CategoryCard
        imgUrl={require('../asset/chinchin.jpeg')}
        title='Chinchin'
      />
    </ScrollView>
  );
};

export default Categories;
