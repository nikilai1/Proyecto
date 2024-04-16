import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db/";
import { colors } from "../global/colors";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      })
      .then((result) => console.log(result))
      .catch(err => console.log(err.message))
    }
  }, [result]);

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");

      loginSchema.validateSync({ password, email });
      triggerSignin({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <InputForm label={"Correo Electrónico"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Contraseña"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate</Text>
      </Pressable>
      {result.isLoading ? (
        <ActivityIndicator size="large" color={colors.blue_500} />
      ) : (
        <SubmitButton title={"Iniciar Sesión"} onPress={onSubmit} />
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_50,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.blue_700,
  },
  linkText: {
    color: colors.blue_700,
    textDecorationLine: "underline",
    marginBottom: 20,
  },
});
