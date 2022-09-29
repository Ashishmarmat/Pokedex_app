import {
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { createRef, useEffect, useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import * as Progress from "react-native-progress";
import { useRoute } from '@react-navigation/native';
import { useGetPokemonByNameQuery } from '../services/Pokemon';
const _width = Dimensions.get("screen").width * 0.4;

const BaseStats = [
  {
    id: "01",
    ProgressPer: "45",
    BaseName: "HP",
  },
  {
    id: "02",
    ProgressPer: "60",
    BaseName: "Attack",
  },

  {
    id: "03",
    ProgressPer: "48",
    BaseName: "Defense",
  },
  {
    id: "04",
    ProgressPer: "65",
    BaseName: "Sp.Atk",
  },
  {
    id: "05",
    ProgressPer: "45",
    BaseName: "Sp. Def",
  },
  {
    id: "06",
    ProgressPer: "58",
    BaseName: "Speed",
  },
  {
    id: "07",
    ProgressPer: "317",
    BaseName: "Total",
  },
];

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const route = useRoute();
  // const pokemon_id = route.params.itemId;
  // const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon_id);
  console.log('Selected Pokemon :', route);

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"#71CEB1" }}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#71CEB1",
            flexDirection: "row",
            justifyContent: "space-between",
            // paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={()=>
          navigation.navigate('TabOne')}>
             <Image
            source={require("../assets/images/east_black.png")}
            style={{
              tintColor: "#fff",
              height: 26,
              width: 26,
              resizeMode: "contain",
            }}
          />
          </TouchableOpacity>
         
          <Image
            source={require("../assets/images/heart.png")}
            style={{
              tintColor: "#fff",
              height: 26,
              width: 26,
              resizeMode: "contain",
            }}
          />
        </View>

        <View style={{ top: 30 }}>
          <View
            style={{
              backgroundColor: "#71CEB1",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.TitleWhiteText}>Balbasaur</Text>
            <Text style={styles.codeText}>#001</Text>
          </View>

          <View
            style={{
              backgroundColor: "#71CEB1",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#71CEB1",
                flexDirection: "row",
                marginTop: 12,
              }}
            >
              <View style={styles.bubbleView}>
                <Text style={styles.bubbleViewText}>Grass</Text>
              </View>
              <View style={styles.bubbleView}>
                <Text style={styles.bubbleViewText}>Poison</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#71CEB1",
                marginTop: 12,
              }}
            >
              <Text style={styles.whiteMidiumText}>Seed Pokemon</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          marginTop: -40,
        }}
      >
        <Image
          source={require("../assets/images/001.png")}
          resizeMode="contain"
          style={{
            alignSelf: "center",
            top: 6.5,
            left: 8,
            height: _width * 1.4,
            width: _width * 1.55,
            marginTop: -222,
          }}
        />
      </View>
      <View style={{ flex: 6, paddingHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.greyBoldText}>About</Text>
          <Text style={[styles.greyBlackText]}>Base Stats</Text>
          <Text style={styles.greyBoldText}>Evolution</Text>
          <Text style={styles.greyBoldText}>Moves</Text>
        </View>
        <FlatList
          data={BaseStats}
          // keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                top: 40,
                marginBottom: 12,
              }}
            >
              <Text style={[styles.greyBoldText, { width: "20%" }]}>
                {item.BaseName}
              </Text>
              <Text style={styles.greyBlackText}>{item.ProgressPer}</Text>
              <View style={{ top: 5, width: "60%" }}>
                <Progress.Bar
                  // progress={0.45}
                   progress={Number(item.ProgressPer)/100}
                  width={210}
                  color={"#DD6571"}
                  unfilledColor={"#F5F3F6"}
                  borderColor={"#fff"}
                  height={6}
                  borderRadius={10}
                />
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: _width * 2.5,
    backgroundColor: "#71CEB1",
    top: 10,
    paddingHorizontal: 16,
  },
  title: {
    marginVertical: 5,
    fontSize: 24,
  },
  TitleWhiteText: {
    fontSize: 28,
    lineHeight: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  codeText: {
    fontSize: 18,
    lineHeight: 22,
    color: "#fff",
    // opacity: 0.6,
  },
  whiteMidiumText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#fff",
  },
  bubbleView: {
    width: _width * 0.45,
    height: _width * 0.14,
    backgroundColor: "#9CDDC9",
    borderRadius: 20,
    marginRight: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleViewText: {
    fontSize: 12,
    lineHeight: 12,
    color: "#fff",
  },
  greyBoldText: {
    fontSize: 18,
    lineHeight: 18,
    color: "grey",
    fontWeight: "bold",
  },
  greyBlackText: {
    fontSize: 18,
    lineHeight: 19,
    color: "#000",
    fontWeight: "bold",
  },
});
