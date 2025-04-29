import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function GameDetailScreen({ route, navigation }) {
  const { game } = route.params;

  const platforms = game.platforms ? game.platforms.map(p => p.platform.name).join(', ') : 'Non spécifié';
  const genres = game.genres ? game.genres.map(g => g.name).join(', ') : 'Non spécifié';
  const tags = game.tags ? game.tags.map(t => t.name).slice(0, 5).join(', ') : 'Non spécifié';
  const developers = game.developers ? game.developers.map(d => d.name).join(', ') : 'Non spécifié';

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={globalStyles.backButton}
        activeOpacity={0.7}>
        <Image source={require('../assets/back.png')} style={globalStyles.backImage}/>
      </TouchableOpacity>

      {game.background_image && (
        <Image source={{ uri: game.background_image }} style={globalStyles.gameDetailImage}/>
      )}

      <Text style={globalStyles.title}>{game.name}</Text>

      <View style={globalStyles.section}>
        {game.released && <Text style={globalStyles.info}>🗓️ Sorti le : {game.released}</Text>}
        {game.rating && <Text style={globalStyles.info}>⭐ Note : {game.rating} / 5</Text>}
        {game.metacritic && <Text style={globalStyles.info}>🎯 Metacritic : {game.metacritic} / 100</Text>}
        {game.playtime > 0 && <Text style={globalStyles.info}>⏳ Durée moyenne : {game.playtime}h</Text>}
      </View>

      <View style={globalStyles.separator}/>

      <View style={globalStyles.section}>
        <Text style={globalStyles.subtitle}>Plateformes :</Text>
        <Text style={globalStyles.info}>{platforms}</Text>
      </View>

      <View style={globalStyles.separator}/>

      <View style={globalStyles.section}>
        <Text style={globalStyles.subtitle}>Genres :</Text>
        <Text style={globalStyles.info}>{genres}</Text>
      </View>

      <View style={globalStyles.separator}/>

      <View style={globalStyles.section}>
        <Text style={globalStyles.subtitle}>Tags :</Text>
        <Text style={globalStyles.info}>{tags}</Text>
      </View>

      <View style={globalStyles.separator}/>

      <View style={globalStyles.section}>
        <Text style={globalStyles.subtitle}>Développeur(s) :</Text>
        <Text style={globalStyles.info}>{developers}</Text>
      </View>
    </ScrollView>
  );
}
