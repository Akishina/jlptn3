import React, {useState} from 'react';
import {Tab, TabView} from 'react-native-elements';
import KanjiList from '../components/word/KanjiList';
import VocabularyList from '../components/word/VocabularyList';
import {BannerAd, BannerAdSize} from '@react-native-admob/admob';

function WordScreen({route}) {
  const [index, setIndex] = useState(0);
  const {lesson} = route.params;

  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)} variant="primary">
        <Tab.Item
          title="Vocabulary"
          titleStyle={{fontSize: 12}}
          icon={{name: 'book', type: 'entypo', color: 'white'}}
        />
        <Tab.Item
          title="Kanji"
          titleStyle={{fontSize: 12}}
          icon={{name: 'language', type: 'entypo', color: 'white'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <VocabularyList lesson={lesson} />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <KanjiList lesson={lesson} />
        </TabView.Item>
      </TabView>

      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={'ca-app-pub-1562697422552853/5055386525'}
      />
    </>
  );
}

export default WordScreen;
