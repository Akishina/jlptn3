import React from 'react';
import {BannerAd, BannerAdSize} from '@react-native-admob/admob';
import LessonsList from '../components/home/LessonsList';

const listVocabulary = [
  {
    id: 1,
    name: '第1週',
    subtitle: '家事をしましよう',
  },
  {
    id: 2,
    name: '第2週',
    subtitle: '外出しましよう',
  },
  {
    id: 3,
    name: '第3週',
    subtitle: '休日を楽しみましよう',
  },
  {
    id: 4,
    name: '第4週',
    subtitle: '勉強や仕事をしましよう',
  },
  {
    id: 5,
    name: '第5週',
    subtitle: 'いろいろ表現しましよう',
  },
  {
    id: 6,
    name: '第6週',
    subtitle: 'まとめて覚えましよう',
  },
];

function HomeScreen({navigation}) {
  const onPressVocabularyItem = id => {
    navigation.navigate('Word', {lesson: `lesson${id}`});
  };

  return (
    <>
      <LessonsList list={listVocabulary} onPressItem={onPressVocabularyItem} />

      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={'ca-app-pub-1562697422552853/5055386525'}
      />
    </>
  );
}

export default HomeScreen;
