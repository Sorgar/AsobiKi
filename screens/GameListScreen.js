import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { getGamesByPublisher } from '../services/rawgApi';
import { globalStyles } from '../styles/globalStyles';
import LoadingScreen from './LoadingScreen';

export default function GameListScreen({ route, navigation }) {
  const { studio } = route.params;
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      const data = await getGamesByPublisher(studio);
      setGames(data);
      setLoading(false);
    }
    fetchGames();
  }, [studio]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={globalStyles.card}
      onPress={() => navigation.navigate('GameDetail', { game: item })}
      activeOpacity={0.8}>
      <ImageBackground
        source={require('../assets/cartouche_bouton.png')}
        style={globalStyles.cartoucheBackground}
        imageStyle={{ resizeMode: 'contain' }}>
        {item.background_image ? (
          <Image source={{ uri: item.background_image }} style={globalStyles.gameListImage} />

        ) : (
          <View style={globalStyles.imagePlaceholder}>
          </View>
        )}
        <Text style={globalStyles.gameTitle} numberOfLines={2}>
          {item.name}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={globalStyles.backButton}
        activeOpacity={0.7}>
        <Image source={require('../assets/back.png')} style={globalStyles.backImage} />
      </TouchableOpacity>

      <Image source={require('../assets/asobiki_logo.png')} style={globalStyles.logo} />
      <Text style={globalStyles.title}>Voici les jeux de {studio}</Text>

      {loading ? (
        <LoadingScreen />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={globalStyles.list}/>
      )}
    </View>
  );
}
