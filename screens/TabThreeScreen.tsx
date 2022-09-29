import {
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { createRef, useEffect, useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useGetAllPokemonListQuery } from '../services/Pokemon';

const _width = Dimensions.get("screen").width * 0.4;

// const PokeData = [
//   {
//     id: "01",
//     name: "Balbasaur",
//     type1: "Grass",
//     type2: "Poison",
//     pokeImage: require("../assets/images/001.png"),
//   },
// ];

export default function TabThreeScreen() {
  const [offset] = useState(0);
  const { data, error, isLoading } = useGetAllPokemonListQuery(String(offset));
  // console.log('@@@@data',data?.results)
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Pokédex</Text>
        <Text style={styles.titleText}>
          Search for Pokémon by name or by using the National Pokédex number.
        </Text>

        <View style={styles.searchBarMainView}>
          <Image
            source={require("../assets/images/search_black.png")}
            style={styles.searchIconStyle}
          />
          <TextInput
            style={styles.placeHolderStyle}
            placeholder="What Pokémon are you looking for?"
          />
        </View>
        <View>
          <FlatList
            numColumns={1}
            data={data.results}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <View style={[styles.cardView]}>
                <View
                  style={{
                    backgroundColor: "#71CEB1",
                    justifyContent: "center",
                    left: 10,
                  }}
                >
                  <Text style={styles.codeText}>#{item.id}</Text>
                  <Text style={styles.TitleWhiteText}>{item.name}</Text>

                  <View
                    style={{
                      backgroundColor: "#71CEB1",
                      flexDirection: "row",
                    }}
                  >
                    <View style={styles.bubbleView}>
                      <Text style={styles.bubbleViewText}>{item.type1}</Text>
                    </View>
                    <View style={styles.bubbleView}>
                      <Text style={styles.bubbleViewText}>{item.type2}</Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#71CEB1",
                  }}
                >
                  <Image
                    // source={item.pokeImage}
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.url.slice(-3, -1)}.png`,
                    }}
                    resizeMode="contain"
                    style={{
                      height: 120,
                      width: 120,
                      right: 10,
                      top: 10,
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    top:10
  },
  title: {
    marginVertical: 5,
    fontSize: 24,
    paddingLeft: 15,
    fontWeight: "600",
  },
  titleText: {
    marginVertical: 5,
    fontSize: 16,
    paddingLeft: 15,
  },
  cardView: {
    // width: _width* 2,
    height: _width * 0.92,
    backgroundColor: "#71CEB1",
    borderRadius: 20,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeText: {
    fontSize: 18,
    lineHeight: 22,
    color: "#000",
    opacity: 0.6,
  },
  TitleWhiteText: {
    fontSize: 24,
    marginVertical: 8,
    color: "#fff",
    fontWeight: "bold",
  },
  bubbleView: {
    width: _width * 0.48,
    height: _width * 0.15,
    backgroundColor: "#9CDDC9",
    borderRadius: 20,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleViewText: {
    fontSize: 16,
    lineHeight: 16,
    color: "#fff",
  },
  searchBarMainView: {
    paddingLeft: 20,
    marginHorizontal: 15,
    marginVertical: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    flexDirection: "row",
    height: 48,
  },
  searchIconStyle: {
    alignSelf: "center",
    height: 24,
    width: 24,
    resizeMode: "contain",
    marginRight: 10,
  },
  placeHolderStyle: {
    alignSelf: "center",
    fontSize: 17,
  },
});
