import { View, Text, Touchable, TouchableOpacity } from "react-native";
import AdjustValueButton from "./AdjustValueButton";
import { useState } from "react";

type playerNumberArray = [number, number, number, number, number];


interface PlayerControlProps {
  label: string;
  score: number | null | undefined;
  setScore: (value: number) => void;
  sizes: playerNumberArray | null | undefined;
  setSizes: (value: playerNumberArray) => void;
  rotations: playerNumberArray | null | undefined;
  setRotations: (value: playerNumberArray) => void;
  playerNumber: number;
}

export default function PlayerControl({ label, score, setScore, sizes, setSizes, rotations, setRotations, playerNumber }: PlayerControlProps) {
  //show settings useState
  const [showSettings, setShowSettings] = useState(false);

  function changeStateForPlayer({ playerNumberArray, setter, amount }: { playerNumberArray: playerNumberArray, setter: (value: playerNumberArray) => void, amount: number }) {

    const replacedSizes = playerNumberArray?.map((size, index) => (index === playerNumber - 1) ? size + amount : size);


    setter(replacedSizes as playerNumberArray);
    console.log(`replacedSizes: ${replacedSizes}`);

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
          <View className="flex-row items-center justify-between w-full bg-slate-800 p-2 rounded-b-lg">

            <View className="flex-row gap-4 items-center">
              <Text className="text-white font-bold text-xl">Size:</Text>





              {sizes ? (
                <View className="flex-row gap-2 items-center">
                  <TouchableOpacity className="bg-slate-500 w-8 h-8 justify-center items-center flex rounded-full p-0" onPress={() => changeStateForPlayer({ playerNumberArray: sizes, setter: setSizes, amount: -10 })}>
                    <Text className="text-white font-bold text-xl">-</Text>
                  </TouchableOpacity>
                  <Text className="text-white font-bold text-xl"> {sizes[playerNumber - 1]}</Text>
                  <TouchableOpacity className="bg-slate-500 w-8 h-8 justify-center items-center flex rounded-full p-0" onPress={() => changeStateForPlayer({ playerNumberArray: sizes, setter: setSizes, amount: 10 })}>
                    <Text className="text-white font-bold text-xl">+</Text>
                  </TouchableOpacity>
                </View>
              ) : <Text className="text-white font-bold text-xl"> {"..."}</Text>}
            </View>


            <View className="flex-row gap-4 items-center">
              <Text className="text-white font-bold text-xl">Rotation:</Text>



              {rotations ? (
                <View className="flex-row gap-2 items-center">
                  <TouchableOpacity className="bg-slate-500 w-8 h-8 justify-center items-center flex rounded-full p-0" onPress={() => changeStateForPlayer({ playerNumberArray: rotations, setter: setRotations, amount: -90 })}>
                    <Text className="text-white font-bold text-xl">-</Text>
                  </TouchableOpacity>
                  <Text className="text-white font-bold text-xl"> {rotations[playerNumber - 1]}</Text>
                  <TouchableOpacity className="bg-slate-500 w-8 h-8 justify-center items-center flex rounded-full p-0" onPress={() => changeStateForPlayer({ playerNumberArray: rotations, setter: setRotations, amount: 90 })}>
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
