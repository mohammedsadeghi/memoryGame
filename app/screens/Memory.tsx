import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {changeDifficulty} from '../store/tasksSlice';
import {RootState} from '../store/store';

import {useTheme} from '../theme/useTheme';
import Layout from '../components/Layout';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import {Button} from '../components/Button/Button';
import Text from '../components/Text';

const ButtonText = ({text}: {text: string}) => {
  const {theme} = useTheme();
  return (
    <Text
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color: theme?.layoutBg,
        },
      ]}>
      {text}
    </Text>
  );
};
const Tasks = () => {
  const {theme} = useTheme();

  const difficulty = useSelector(
    (state: RootState) => state.difficulty.entities.id,
  );
  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [difficultyLevel, setDifficultyLevel] = useState<
    'Easy' | 'Medium' | 'Hard'
  >(difficulty);

  const setGlobalDifficultyLevel = (difficultyLevelInput: string) => {
    dispatch(changeDifficulty(difficultyLevelInput));
  };
  const changeDifficultyLevel = (level: 'Easy' | 'Medium' | 'Hard') => {
    setDifficultyLevel(level);
    setGlobalDifficultyLevel(level);
  };

  const renderItem = ({item, index}: {index: number}) => (
    <ListItem item={item} index={index} onPress={onCheckedHandler} />
  );

  const keyExtractor = item => `task-${item.id}`;

  return (
    <Layout testID="Screen.Tasks">
      {/* Tasks Listing starts here */}
      <FlatList
        data={[]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
      {/* Tasks Listing ends here */}

      <Card
        style={[styles.difficulty, {borderTopColor: theme?.cardBorderColor}]}>
        {/* TextInput and InputButton starts here */}
        <View style={styles.difficultyBtnRow}>
          <Button
            onPress={() => changeDifficultyLevel('Easy')}
            style={styles.btnDifficulty}
            backgroundColor={
              difficultyLevel === 'Easy' ? undefined : theme.color
            }>
            <ButtonText text="Easy" />
          </Button>
          <Button
            onPress={() => changeDifficultyLevel('Medium')}
            style={styles.btnDifficulty}
            backgroundColor={
              difficultyLevel === 'Medium' ? undefined : theme.color
            }>
            <ButtonText text="Medium" />
          </Button>
          <Button
            onPress={() => changeDifficultyLevel('Hard')}
            style={styles.btnDifficulty}
            backgroundColor={
              difficultyLevel === 'Hard' ? undefined : theme.color
            }>
            <ButtonText text="Hard" />
          </Button>
        </View>
      </Card>
    </Layout>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  tickIcon: {
    width: 22,
    height: 22,
  },
  difficulty: {
    borderTopWidth: StyleSheet.hairlineWidth,
    elevation: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  difficultyBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  difficultyBtnWrp: {
    flexDirection: 'row',
    flex: 1,
  },
  btnDifficulty: {
    borderRadius: 5,
    padding: 6,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    height: 42,
    marginLeft: 5,
  },
  btnDifficultyText: {
    color: '#fff',
    fontSize: 14,
  },
  btnClear: {
    borderRadius: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#c50e29',
    marginRight: 8,
  },
  btnClearText: {
    color: '#c50e29',
    fontSize: 14,
  },
});
