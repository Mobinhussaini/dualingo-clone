import { StyleSheet, Text, View } from "react-native";

export default function Index() {
   return (
      <View className="flex-1 justify-center items-center">
         <Text className="text-xl text-indigo-600 text-center mt-90">
            {" "}
            Duoaling CLONE MBN
         </Text>

         <Text>The link to join the waitlist is down in the description.</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
});
