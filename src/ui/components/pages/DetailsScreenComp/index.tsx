import { Ionicons, Entypo } from "@expo/vector-icons";
import { View, ScrollView, Image, Text } from "react-native";
import { baseImgUrl } from "../../../../services/constants";
import { Movie } from "../../../../models/movie";
import { Series } from "../../../../models/series";
import HeaderComp from "../../organisms/DetailsHeaderComp";
import { ioniconStyle, styles } from "./style";
import { Props } from "./interface";

const DetailsScreenComp = ({ mediaItem, genreList }: Props) => {
  const isMovie = Object.keys(mediaItem).includes("title");

  return (
    <View style={styles.rootContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: baseImgUrl + mediaItem.poster_path,
            }}
          />
        </View>
        <View style={styles.horizontalSpaceContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {isMovie
                ? (mediaItem as Movie).title
                : (mediaItem as Series).name}
            </Text>
          </View>
          <View style={styles.voteContainer}>
            <Text style={styles.voteText}>
              {mediaItem.vote_average.toFixed(1) + " "}
            </Text>
            <Ionicons
              name="star"
              size={ioniconStyle.size}
              color={ioniconStyle.color}
            />
          </View>
        </View>
        <View style={styles.genresContainer}>
          {genreList.map((genre) => {
            return (
              <View style={styles.genreItem} key={genre.id}>
                <Entypo
                  name="dot-single"
                  color={"red"}
                  size={ioniconStyle.size}
                />
                <Text style={styles.genreText}>{genre.name + " "}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.overviewText}>{mediaItem.overview}</Text>
      </ScrollView>
      <HeaderComp isMovie={isMovie} mediaItem={mediaItem} />
    </View>
  );
};

export default DetailsScreenComp;
