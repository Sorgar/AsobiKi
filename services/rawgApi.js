import { RAWG_API_KEY } from '@env';

const BASE_URL = 'https://api.rawg.io/api/';

const studioKeywords = {
  "Nintendo": "Mario Party Kart Zelda Smash Bros Luigi Crossing DK Pikmin Kirby Xenoblade",
  "Square Enix": "Final Fantasy Chrono Kingdom Hearts Dragon Quest Nier Automata Octopath",
  "Capcom": "Resident Evil Monster Hunter Street Fighter Devil May Cry Okami",
  "SEGA": "Sonic Shenmue Yakuza Project Diva",
  "Bandai Namco": "Dragon Ball Dark Souls Tales of Ni no Kuni Little Nightmares Tekken",
  "Konami": "Metal Gear Castlevania Silent Hill",
};

export async function getGamesByPublisher(studio) {
  const keyword = studioKeywords[studio] || studio; // Si studio connu ➔ utiliser les mots-clés, sinon nom du studio
  
  try {
    const response = await fetch(
      `${BASE_URL}games?key=${RAWG_API_KEY}&search=${encodeURIComponent(keyword)}&page_size=20`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erreur lors de la récupération des jeux:', error.message);
    console.error('Erreur complète:', error);
    return [];
  }
}
