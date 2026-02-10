import React from 'react';
import { Text } from 'react-native';

interface DigitalScoreProps {
  score: number | null | undefined;
  size?: number;
  rotation?: number;
}

const DigitalScore = ({ score, size = 128, rotation = 0 }: DigitalScoreProps) => {
  return (
    <Text
      className="text-red-700 text-center my-10"
      style={{
        fontFamily: 'SevenSegment',
        fontSize: size,
        transform: [{ rotate: `${rotation}deg` }],
      }}
    >
      {score}
    </Text>
  );
};

export default DigitalScore;