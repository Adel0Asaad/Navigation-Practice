import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import Colors from "../../util/Colors";

type Props = {
  title: string;
  content: string;
};

const Tuple = ({ title, content }: Props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
};

export default Tuple;

const styles = StyleSheet.create({
  rootContainer: {
    minHeight: 50,
    width: "100%",
    flexDirection: "row",
    borderColor: "#5c898f",
    backgroundColor: "#5c898f",
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    flex: 3,
    backgroundColor: "#234234",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: Colors.primary500,
    fontSize: 20,
    fontWeight: "bold",
  },
  contentText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
