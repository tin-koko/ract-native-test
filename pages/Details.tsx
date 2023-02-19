import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Details({ route }: any) {
  const data = route?.params?.params;
  interface languageTypes {
    code: string;
    name: string;
    native: string;
  }
  return (
    <View>
      {data && (
        <View style={styles.view}>
          <Text style={styles.flag}>{data?.emoji}</Text>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.name}>
            {data.name}({data?.code})
          </Text>
          <Text style={styles.label}>Currency:</Text>
          <Text style={styles.name}>{data.currency}</Text>
          <Text style={styles.label}>Phone code:</Text>
          <Text style={styles.name}>{data.phone}</Text>         
          {data?.languages?.map((x: languageTypes) => (
            <Fragment key={x.code}>
              <Text style={styles.label}>Language:</Text>
              <Text style={styles.name}>{x?.name}</Text>
              <Text style={styles.label}>Native:</Text>
              <Text style={styles.name}>{x?.native}</Text>
            </Fragment>
          ))}
          <Text style={styles.label}>Continent:</Text>
          <Text style={styles.name}>
            {data?.continent?.name}({data?.continent?.code})
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 20,
    marginBottom: 10
  },
  label: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 17,
    marginBottom: 2
  },
  flag: {
    fontSize: 180,
    textAlign: "center"
  },
  view: {
    fontWeight: "700",
    backgroundColor: "#fbfbfb",
    fontSize: 20,
    padding: 30,
    textAlign: "center",
  },
});
