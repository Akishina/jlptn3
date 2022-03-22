import React from 'react';
import {Tab, TabView} from 'react-native-elements';
import LessonsList from '../components/home/LessonsList';

function WordScreen({onPressItem, list}) {
  const [index, setIndex] = useState(0);

  const onPressKanjiItem = id => {
    navigation.navigate('Kanji', {lesson: `lesson${id}`});
  };

  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)} variant="Vocabulary">
        <Tab.Item
          title="Vocabulary"
          titleStyle={{fontSize: 12}}
          icon={{name: 'timer', type: 'ionicon', color: 'white'}}
        />
        <Tab.Item
          title="Kanji"
          titleStyle={{fontSize: 12}}
          icon={{name: 'heart', type: 'ionicon', color: 'white'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <LessonsList
            list={listVocabulary}
            onPressItem={onPressVocabularyItem}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <LessonsList list={listKanji} onPressItem={onPressKanjiItem} />
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
