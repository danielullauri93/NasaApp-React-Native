import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';
import fetchApi from '../../utils/fetch';
import {PostImage} from '../../types';
import {format, sub} from 'date-fns';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgo = format(sub(date, {days: 5}), 'yyyy-MM-dd');

        const last5DaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgo}&end_date=${todaysDate}`,
        );
        setLastFiveDaysImages(last5DaysImagesResponse);
      } catch (error) {
        console.log(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default Home;
