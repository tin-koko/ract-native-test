import React from "react";
import { Image, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function About() {
  return (
    <SafeAreaView>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/tinkoko.png')}
      />
      <ScrollView style={styles.scrollview}>
        <Text style={styles.name}>
          Tinkoko is a social agro e-commerce company based in Nigeria. The
          Company is Pioneered to bridge the gap between Farmers and customers,
          assist the buying and Selling of Agricultural Products and Services
          while providing a customer centric platform for perfect consumer
          satisfaction.
        </Text>
        <Text style={styles.name}>
          Tinkoko aims at providing an online market place for Farmers,
          Agri-preneurs, Agri-investors, and Consumers to meet and transact on a
          trusted & reliable Platform
        </Text>
        <Text style={styles.name}>
          For many years producers of agricultural raw materials and finished
          products have found it difficult to communicate with the consumers of
          their product to be able to get feedbacks on the products they produce
          and know what to improve on, also finding it difficult to sell their
          produce easily. The era of internet has helped in the evolution of
          different platform to bring people together for a particular purpose.
        </Text>
        <Text style={styles.name}>
          Tinkoko.com is an online platform that brings agricultural producers,
          farmers and consumers together to advertise products, negotiate
          products and get reviews and feedback on how to improve their
          products.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 16,
    padding: 10,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  scrollview: {
    marginBottom: 80
  },
  flag: {
    fontSize: 100,
  },
  view: {
    fontWeight: "700",
    backgroundColor: "tomato",
    fontSize: 20,
    padding: 30,
    textAlign: "center",
  },
});
