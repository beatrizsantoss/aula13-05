import { Image, Text, StyleSheet, Platform } from 'react-native';

import { Standard } from "@typebot.io/react";


export default function HomeScreen() {
  return (
    <div>
      <Text> Olá Mundo!!! </Text>
      <Standard
      typebot="my-typebot-b3jeis4"
      style={{ width: "100%", height: "600px" }}
    />

    </div>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
