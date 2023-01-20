import React from 'react';
import {View, FlatList} from 'react-native';

// components
import HeroLine from '../HeroLine';
import Pager from '../Pager';

const HeroesList = ({heroes, navigation}) => {
  const nextPage = !heroes.next
    ? null
    : heroes.next.slice(heroes.next.indexOf('?page=') + 6);

  const previousPage = !heroes.previous
    ? null
    : heroes.previous.slice(heroes.previous.indexOf('?page=') + 6);

  return (
    <View>
      <FlatList
        scrollEnabled
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={heroes.results}
        renderItem={item => <HeroLine item={item} navigation={navigation} />}
        keyExtractor={item => item.url}
      />

      <Pager
        nextPage={nextPage}
        previousPage={previousPage}
        total={heroes.count}
        number={heroes.results.length}
      />
    </View>
  );
};

export default HeroesList;
