import {ScrollView} from 'react-native';
import React from 'react';
import {ListItem, Icon} from 'react-native-elements';

function LessonsList({onPressItem, list}) {
  return (
    <ScrollView>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={() => onPressItem(l.id)}>
          <Icon raised name="ticket" type="font-awesome" color="#f50" />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
}

export default LessonsList;
