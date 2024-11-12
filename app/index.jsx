import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,

      }}
    > 
      <Link href={'/login'}>
        <Text>Iniciar sesión</Text>
      </Link>
    </View>
  );
}

//Pressable nos permite hacer un boton que se pueda presionar