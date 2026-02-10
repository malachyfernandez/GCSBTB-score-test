import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type fetchableNumber = number | null | undefined;

interface Props {
    value: fetchableNumber;
    setValue: (value: number) => void;
    amount: number;
    label: string;
    color?: string;
}

const AdjustValueButton = ({ value, setValue, amount, label, color }: Props) => {
    let finalColor = "#1E88E5";
    if (color) {
        finalColor = color;
    }
    
    return (
        <TouchableOpacity
            onPress={() => {
                if (value !== undefined && value !== null) {
                    setValue(value + amount);
                }
            }}
            className="px-8 py-4 rounded-full active:opacity-80 items-center"
            style={{ backgroundColor: finalColor }}
        >
            <Text className="text-white text-xl font-bold">{label}</Text>
        </TouchableOpacity>
    );
};

export default AdjustValueButton;
