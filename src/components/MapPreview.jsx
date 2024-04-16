import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { googleAPI } from "../firebase/googleAPI";

const MapPreview = ({ location, onConfirm, onReturn }) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}&markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C40.718217,-73.998284
    &key=${googleAPI.mapStatic}`;

  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
        </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.turquoise_100,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  mapImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: colors.magenta_700,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "InterBold",
    textAlign: "center",
  },
  returnButton: {
    backgroundColor: colors.magenta_700,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  returnButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "InterBold",
    textAlign: "center",
  },
});
