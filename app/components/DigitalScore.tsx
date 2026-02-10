import React from 'react';
import { Text } from 'react-native';

interface DigitalScoreProps {
  score: number | null | undefined;
  size?: number;
  rotation?: number;
  x?: number;
  y?: number;
}

const DigitalScore = ({ score, size = 128, rotation = 0, x = 0, y = 0 }: DigitalScoreProps) => {
  return (
    <Text
      className="text-red-700 text-center my-10"
      style={{
        fontFamily: 'SevenSegment',
        fontSize: size,
        transform: [{ translateX: x }, { translateY: y }, { rotate: `${rotation}deg` }],
      }}
    >
      {score}
    </Text>
  );
};

export default DigitalScore;