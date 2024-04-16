import { Text, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../global/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

function OtherComponent({ title }) {
  const { localId, user } = useSelector((state) => state.authReducer.value);
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {user && (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </Pressable>
      )}
     
    </View>
  );
}

export default OtherComponent;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: colors.magenta_700,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  logoutIcon: {
    position: "absolute",
    right: 10,
  },
});
