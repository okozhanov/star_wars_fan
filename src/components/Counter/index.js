import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

// helpers
import {countGenders} from '../../helpers';

import styles from './styles';

const Counter = ({favourites}) => {
  const [genders, setGenders] = useState(null);

  useEffect(() => {
    if (favourites?.length > 0) {
      setGenders(countGenders(favourites));
    }
  }, [favourites]);

  return (
    <View style={styles.container}>
      <View style={styles.sublabelContainer}>
        <Text style={styles.sublabel}>Male</Text>
        <Text style={styles.sublabel}>Female</Text>
        <Text style={styles.sublabel}>Other</Text>
      </View>

      <View style={styles.line} />

      <View style={[styles.labelContainer, {height: '60%'}]}>
        <Text style={styles.label}>{genders?.male}</Text>
        <Text style={styles.label}>{genders?.female}</Text>
        <Text style={styles.label}>{genders?.other}</Text>
      </View>
    </View>
  );
};

export default Counter;
