import {
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
import React, { createRef, useEffect, useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useGetAllPokemonListQuery } from '../services/Pokemon';
const _width = Dimensions.get("screen").width * 0.4;
import { useNavigation } from '@react-navigation/native';

// const PokeData = [
//   {
//     id: "01",
//     name: "Balbasaur",
//     type1: "Grass",
//     type2: "Poison",
//     pokeImage: require("../assets/images/001.png"),
//   },
// ];

export default function TabOneScreen({
  // navigation,
}: RootTabScreenProps<"TabOne">) {
  const navigation = useNavigation();
  const [offset] = useState(0);
  const { data, error, isLoading } = useGetAllPokemonListQuery(String(offset));
  console.log('@@@@data',data.results)
  return (

    <SafeAreaView style={styles.container}>
        <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Image
          source={require("../assets/images/east_black.png")}
          style={{
            height: 24,
            width: 24,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../assets/images/list_black.png")}
          style={{
            height: 24,
            width: 24,
            resizeMode: "contain",
          }}
        />
      </View>

      <Text style={styles.title}>Pokedex</Text>
      <View>
        <FlatList
          numColumns={2}
          data={data.results}
          keyExtractor={(item, index) => index}
          // keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
            onPress={() => 
              navigation.navigate('TabTwo')}
              >
            <View style={styles.cardView}>
              <Text style={styles.TitleWhiteText}>{item.name}</Text>
              <View
                style={{
                  backgroundColor: "#71CEB1",
                  top: "5%",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#71CEB1",
                  }}
                >
                  <View style={styles.bubbleView}>
                    <Text style={styles.bubbleViewText}>{item.type1}</Text>
                  </View>
                  <View style={styles.bubbleView}>
                    <Text style={styles.bubbleViewText}>{item.type2}</Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#71CEB1",
                  }}
                >
                  <Image
                   source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.url.slice(-3, -1)}.png`,
                  }}
                    // source={item.url}
                    // resizeMode="contain"
                    style={{
                      top: 6.5,
                      left: 8,
                      height: _width * 0.5,
                      width: _width * 0.52,
                    }}
                  />
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
      </View>
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    top:10
  },
  title: {
    marginVertical: 5,
    fontSize: 24,
    paddingLeft: 10,
  },
  cardView: {
    width: _width * 1.13,
    height: _width * 0.84,
    backgroundColor: "#71CEB1",
    borderRadius: 20,
    padding: 18,
    marginVertical: 5,
    marginHorizontal: 8,
  },
  TitleWhiteText: {
    fontSize: 18,
    lineHeight: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  bubbleView: {
    width: _width * 0.45,
    height: _width * 0.14,
    backgroundColor: "#9CDDC9",
    borderRadius: 20,
    marginVertical: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleViewText: {
    fontSize: 14,
    lineHeight: 14,
    color: "#fff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
