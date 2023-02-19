import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const GET_COUNTRY = gql`
  query {
    countries {
      code
      currency
      emoji
      emojiU
      name
      phone
      native
      continent {
        code
        name
      }
      languages {
        name
        code
        native
      }
    }
  }
`;

type ItemProps = { data: { name: string; emoji: string; code: string } };

const Item = ({ data }: ItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate("Details" as never, { params: data } as never)
      }
    >
      <View style={styles.view}>
          <Text style={styles.flag}>{data?.emoji}</Text>
          <Text>{data?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface searchProps {
  search: string;
}
interface countryProps {
  code: string;
  currency: string;
  emoji: string;
  emojiU: string;
  name: string;
  phone: string;
  native: string;
}
export default function CountryCard(search: searchProps) {
  const { loading, error, data } = useQuery(GET_COUNTRY);
  

  const filterData = data?.countries?.filter((country: countryProps) =>
    country.name.toLowerCase().includes(search.search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green" />
        </View>
      )}
      {!loading && search?.search.length > 0 && filterData?.length === 0 && (
        <Text style={styles.nodata}>No country with the search name</Text>
      )}
      <View style={styles.view2}>
        <FlatList
          data={search?.search.length > 0 ? filterData : data?.countries}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item?.code}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar?.currentHeight || 0,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nodata: {
    marginTop: 80,
    textAlign: "center",
    fontSize: 16,
    fontweight: "600",
  },
  view2: { flex: 1, marginLeft: 20 },
  view: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 4,
    marginTop: 4,
    borderBottomWidth: 0.2,
  },
  text: {
    fontSize: 16,
  },
  button: {},
  h1: {
    fontWeight: "700",
    fontSize: 28,
  },
  flag: {
    marginHorizontal: 10,
  },
  search: {
    backgroundColor: "#fff",
    height: 60,
    width: 300,
    padding: 12,
    margin: 12,
    borderRadius: 20,
    borderWidth: 2,
  },
});
