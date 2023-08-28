import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const scaledSizes = (size: number) => (width / 375) * size;

export const InputSheet = StyleSheet.create({
  textInput: {
    padding: scaledSizes(15),
    borderRadius: scaledSizes(5),
    borderWidth: 1.1,
    borderColor: "white",
    fontWeight: "700",
    color: "white",
    width: "100%",
    paddingHorizontal: scaledSizes(20),
    marginBottom: scaledSizes(5),
  },
});

export const CountryInfoStyle = StyleSheet.create({
  text: {
    color: "white",
    fontSize: scaledSizes(25),
    fontWeight: "700",
  },
  back: {
    fontStyle: "italic",
    fontWeight: "800",
    color: "gray",
    marginTop: scaledSizes(10),
  },
});

export const MainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scaledSizes(10),
  },
  countryContainer: {
    borderColor: "gray",
    borderRadius: scaledSizes(5),
    borderWidth: scaledSizes(1),
    marginBottom: scaledSizes(15),
    paddingVertical: scaledSizes(10),
    paddingLeft: scaledSizes(10),
  },
  countryItem: { fontSize: scaledSizes(25), fontWeight: "600", color: "white" },
});
