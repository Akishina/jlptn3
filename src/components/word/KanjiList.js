import {ScrollView} from 'react-native';
import React from 'react';
import {ListItem, Icon} from 'react-native-elements';
import Tts from 'react-native-tts';
import data from '../../assets/kanji';

Tts.setDefaultLanguage('ja-JP');

function KanjiList({lesson}) {
  return (
    <ScrollView>
      {data[lesson].map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Icon
            raised
            name="volume-up"
            type="font-awesome"
            color="#f50"
            onPress={() =>
              Tts.speak(l.Word, {
                androidParams: {KEY_PARAM_PAN: -1, KEY_PARAM_VOLUME: 0.5},
              })
            }
          />
          <ListItem.Content>
            <ListItem.Title>{l.Meaning}</ListItem.Title>
            <ListItem.Subtitle>{l.Word}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
}

export default KanjiList;
