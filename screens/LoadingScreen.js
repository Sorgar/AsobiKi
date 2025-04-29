import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function LoadingScreen() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev === 0 ? 1 : 0));
    }, 500); // Alterne toutes les 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={
          frame === 0
            ? require('../assets/chargement1.png') // Première image
            : require('../assets/chargement2.png') // Deuxième image
        }
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300', // Fond jaune pour cohérence
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
