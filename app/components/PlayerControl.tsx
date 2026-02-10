import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AdjustValueButton from "./AdjustValueButton";
import React, { useState } from "react";

type playerNumberArray = [number, number, number, number, number];


interface PlayerControlProps {
  label: string;
  score: number | null | undefined;
  setScore: (value: number) => void;
  sizes: playerNumberArray | null | undefined;
  setSizes: (value: playerNumberArray) => void;
  rotations: playerNumberArray | null | undefined;
  setRotations: (value: playerNumberArray) => void;
  xPositions: playerNumberArray | null | undefined;
  setXPositions: (value: playerNumberArray) => void;
  yPositions: playerNumberArray | null | undefined;
  setYPositions: (value: playerNumberArray) => void;

  playerNumber: number;
}

export default function PlayerControl({ label, score, setScore, sizes, setSizes, rotations, setRotations, xPositions, setXPositions, yPositions, setYPositions, playerNumber }: PlayerControlProps) {
  //show settings useState
  const [showSettings, setShowSettings] = useState(false);

  function changeStateForPlayer({ playerNumberArray, setter, amount }: { playerNumberArray: playerNumberArray, setter: (value: playerNumberArray) => void, amount: number }) {

    const replacedSizes = playerNumberArray?.map((size, index) => (index === playerNumber - 1) ? size + amount : size);

    setter(replacedSizes as playerNumberArray);

  }

  function setStateForPlayer({ playerNumberArray, setter, value }: { playerNumberArray: playerNumberArray, setter: (value: playerNumberArray) => void, value: any }) {

    const fixedValue = (isNaN(parseInt(value))) ? 0 : parseInt(value);

    const replacedArray = playerNumberArray?.map((item, index) => (index === playerNumber - 1) ? fixedValue : item);

    setter(replacedArray as playerNumberArray);

  }

  return (
    <View className="flex-col">
      <View className="flex-row items-center justify-between w-full bg-slate-950 p-2 rounded-lg">
        <View className="flex-col">
          <View className="flex-row gap-2">
            <Text className="text-white font-bold text-xl">{label}:</Text>
            <Text className="text-white font-bold text-xl"> {score}</Text>
          </View>
          <TouchableOpacity onPress={() => setShowSettings(!showSettings)}>
            <Text className="text-slate-400 font-regular text-md">⇅ options</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-2">
          <AdjustValueButton value={score} setValue={setScore} amount={1} label="+" />
          <AdjustValueButton value={score} setValue={setScore} amount={-1} label="-" />
        </View>
      </View>
      {showSettings && (
        <View className="flex-col">
          <View className="flex-row items-center justify-between w-full bg-slate-800 p-2 rounded-b-lg flex-wrap gap-8">
            <View className="flex-row gap-4 items-center">
              <Text className="text-white font-bold text-xl">x:</Text>

              {xPositions ? (
                <View className="flex-row gap-2 items-center">

                  <TextInput className="text-white font-bold text-xl w-16 justify-center items-center text-center border border-white rounded-md" value={xPositions[playerNumber - 1].toString()} onChangeText={(e) => setStateForPlayer({ playerNumberArray: xPositions, setter: setXPositions, value: parseInt(e) })} />

                </View>
              ) : <Text className="text-white font-bold text-xl"> {"..."}</Text>}
            </View>

            <View className="flex-row gap-4 items-center">
              <Text className="text-white font-bold text-xl">y:</Text>

              {yPositions ? (
                <View className="flex-row gap-2 items-center">

                  <TextInput className="text-white font-bold text-xl w-16 justify-center items-center text-center border border-white rounded-md" value={yPositions[playerNumber - 1].toString()} onChangeText={(e) => setStateForPlayer({ playerNumberArray: yPositions, setter: setYPositions, value: parseInt(e) })} />

                </View>
              ) : <Text className="text-white font-bold text-xl"> {"..."}</Text>}
            </View>
            <View className="flex-row gap-4 items-center">
              <Text className="text-white font-bold text-xl">Size:</Text>

              {sizes ? (
                <View className="flex-row gap-2 items-center">

                  <TextInput className="text-white font-bold text-xl w-16 justify-center items-center text-center border border-white rounded-md" value={sizes[playerNumber - 1].toString()} onChangeText={(e) => setStateForPlayer({ playerNumberArray: sizes, setter: setSizes, value: parseInt(e) })} />

                </View>
              ) : <Text className="text-white font-bold text-xl"> {"..."}</Text>}
            </View>

            <View className="flex-row gap-4 items-center">
              <Text className="text-white font-bold text-xl">Rotation:</Text>

              {rotations ? (
                <View className="flex-row gap-2 items-center">
                  <TouchableOpacity className="bg-slate-500 w-8 h-8 justify-center items-center flex rounded-full p-0" onPress={() => setStateForPlayer({ playerNumberArray: rotations, setter: setRotations, value: Math.floor((rotations[playerNumber - 1] -1) / 90) * 90 })}>
                    <Text className="text-white font-bold text-xl">-</Text>
                  </TouchableOpacity>
                  <TextInput className="text-white font-bold text-xl w-16 justify-center items-center text-center border border-white rounded-md" value={rotations[playerNumber - 1].toString()} onChangeText={(e) => setStateForPlayer({ playerNumberArray: rotations, setter: setRotations, value: ( parseInt(e) ) })} />
                  <TouchableOpacity className="bg-slate-500 w-8 h-8 justify-center items-center flex rounded-full p-0" onPress={() => changeStateForPlayer({ playerNumberArray: rotations, setter: setRotations, amount: Math.floor((rotations[playerNumber - 1] + 90) / 90) * 90 - rotations[playerNumber - 1] })}>
                    <Text className="text-white font-bold text-xl">+</Text>
                  </TouchableOpacity>
                </View>
              ) : <Text className="text-white font-bold text-xl"> {"..."}</Text>}
            </View>






          </View>


        </View>


      )}
    </View>
  );
}
