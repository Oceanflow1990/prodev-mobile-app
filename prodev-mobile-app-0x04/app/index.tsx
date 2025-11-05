import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "@/styles/_mainstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  BACKGROUNDIMAGE,
  HEROLOGO,
  HEROLOGOGREEN,
  GOOGLELOGO,
  FACEBOOKLOGO,
} from "@/constants";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Find your favorite place here
              </Text>
              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>
                  The best prices for over 2{" "}
                </Text>
                <Text style={styles.titleSubText}>
                  million properties worldwide
                </Text>
              </View>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonPrimary}>
                  <Text style={styles.buttonPrimaryText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSecondary}>
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ ...styles.buttonGroupSubText, paddingBottom: 40 }}>
                <Text style={{ color: "white" }}>
                  Continue to home &gt;&gt;
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
