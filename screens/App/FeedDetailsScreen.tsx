import { Text, View } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FeedStackParamList } from "../../util/navigation";

type Props = NativeStackScreenProps<FeedStackParamList, "FeedDetailsScreen", "FeedStack">

function FeedDetailsScreen({route}: Props){
    const data = route.params?.data
    // const feedbackData = useAppSelector((state) => state.feedbackData)

    return(
        <View>
            <Text>The entered text is: {data}</Text>
        </View>
    )
}

export default FeedDetailsScreen