import { Pressable, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Props } from "./interface";
import { useHeaderComp } from "./hooks/useHeaderComp";
import { styles } from "./style";


const HeaderComp = ({ isMovie, mediaItem }: Props) => {

  const {dimensions, navCallBack, favCallback, isFav} = useHeaderComp({isMovie, mediaItem})

  return (
    <View style={[styles.rootContainer, styles.headerAbs, {height: dimensions.window.height / 7}]}>
      <View style={[styles.center]}>
        <Pressable onPress={navCallBack}>
          <Fontisto name="angle-left" size={26} color="white" />
        </Pressable>
      </View>
      <View style={[styles.center]}>
        <Text style={styles.title}>Details</Text>
      </View>
      <View style={[styles.center]}>
        <Pressable onPress={favCallback}>
          <AntDesign
            name={isFav ? "heart" : "hearto"}
            size={32}
            color={"white"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderComp;
