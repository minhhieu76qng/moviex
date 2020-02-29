import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import ListMovie from '../../components/ListMovie';
import SearchBar from '../../components/SearchBar';

const NowPlaying = () => {
  const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = useCallback(() => {}, [refreshing]);
  const onRefresh = () => {};

  return (
    <View style={styles.homeWrapper}>
      <SearchBar />
      <View style={styles.list}>
        <ListMovie
          movies={movies}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    position: 'relative',
    backgroundColor: '#3d3d3d',
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 15,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

const movies = [
  {
    poster_path: '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
    adult: false,
    overview:
      'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
    release_date: '2016-08-03',
    genre_ids: [14, 28, 80],
    id: 297761,
    original_title: 'Suicide Squad',
    original_language: 'en',
    title: 'Suicide Squad',
    backdrop_path: '/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg',
    popularity: 48.261451,
    vote_count: 1466,
    video: false,
    vote_average: 5.91,
  },
  {
    poster_path: '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg',
    adult: false,
    overview:
      'The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.',
    release_date: '2016-07-27',
    genre_ids: [28, 53],
    id: 324668,
    original_title: 'Jason Bourne',
    original_language: 'en',
    title: 'Jason Bourne',
    backdrop_path: '/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg',
    popularity: 30.690177,
    vote_count: 649,
    video: false,
    vote_average: 5.25,
  },
  {
    poster_path: '/tgfRDJs5PFW20Aoh1orEzuxW8cN.jpg',
    adult: false,
    overview:
      'Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.',
    release_date: '2016-08-25',
    genre_ids: [80, 28, 53],
    id: 278924,
    original_title: 'Mechanic: Resurrection',
    original_language: 'en',
    title: 'Mechanic: Resurrection',
    backdrop_path: '/3oRHlbxMLBXHfMqUsx1emwqiuQ3.jpg',
    popularity: 20.375179,
    vote_count: 119,
    video: false,
    vote_average: 4.59,
  },
  {
    poster_path: '/3ioyAtm0wXDyPy330Y7mJAJEHpU.jpg',
    adult: false,
    overview:
      'A high school senior finds herself immersed in an online game of truth or dare, where her every move starts to be manipulated by an anonymous community of "watchers."',
    release_date: '2016-07-27',
    genre_ids: [18, 53],
    id: 328387,
    original_title: 'Nerve',
    original_language: 'en',
    title: 'Nerve',
    backdrop_path: '/a0wohltYr7Tzkgg2X6QKBe3txj1.jpg',
    popularity: 7.17729,
    vote_count: 86,
    video: false,
    vote_average: 6.84,
  },
  {
    poster_path: '/3S7V2Jd2G61LltoCsYUj4GwON5p.jpg',
    adult: false,
    overview:
      "A woman with a seemingly perfect life - a great marriage, overachieving kids, beautiful home, stunning looks and still holding down a career. However she's over-worked, over committed and exhausted to the point that she's about to snap. Fed up, she joins forces with two other over-stressed moms and all go on a quest to liberate themselves from conventional responsibilities, going on a wild un-mom like binge of freedom, fun and self-indulgence - putting them on a collision course with PTA Queen Bee Gwendolyn and her clique of devoted perfect moms.",
    release_date: '2016-07-28',
    genre_ids: [35],
    id: 376659,
    original_title: 'Bad Moms',
    original_language: 'en',
    title: 'Bad Moms',
    backdrop_path: '/l9aqTBdafSo0n7u0Azuqo01YVIC.jpg',
    popularity: 6.450367,
    vote_count: 107,
    video: false,
    vote_average: 5.49,
  },
  {
    poster_path: '/sRxazAAodkAWVPJighRAsls2zCo.jpg',
    adult: false,
    overview:
      'A falsely accused nobleman survives years of slavery to take vengeance on his best friend who betrayed him.',
    release_date: '2016-08-17',
    genre_ids: [12, 36, 18],
    id: 271969,
    original_title: 'Ben-Hur',
    original_language: 'en',
    title: 'Ben-Hur',
    backdrop_path: '/A4xbEpe9LevQCdvaNC0z6r8AfYk.jpg',
    popularity: 6.379067,
    vote_count: 60,
    video: false,
    vote_average: 3.83,
  },
  {
    poster_path: '/aRRLpsusORQxOpFkZvXdk00TkoY.jpg',
    adult: false,
    overview:
      'Nate Foster, a young, idealistic FBI agent, goes undercover to take down a radical white supremacy terrorist group. The bright up-and-coming analyst must confront the challenge of sticking to a new identity while maintaining his real principles as he navigates the dangerous underworld of white supremacy. Inspired by real events.',
    release_date: '2016-08-19',
    genre_ids: [80, 18, 53],
    id: 374617,
    original_title: 'Imperium',
    original_language: 'en',
    title: 'Imperium',
    backdrop_path: '/9dMvJJ0eTVetq3kLwUXcphsY5H.jpg',
    popularity: 5.855316,
    vote_count: 33,
    video: false,
    vote_average: 6.05,
  },
];

export default NowPlaying;
