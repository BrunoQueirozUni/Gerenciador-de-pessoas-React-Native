import { Text, TouchableOpacity, View } from "react-native";

interface ParticipanteProps {
   nome: string;
   idade: number;
   onRemove: () => void;
}

export function Participante({ nome, idade, onRemove }: ParticipanteProps) {
   return (
      <View className="bg-[#26252B] rounded-[5px] flex flex-row mt-4 items-center">
         <View className="flex-1 pl-4 p-2">
            <Text className="font-bold text-white flex-1">{nome}</Text>
            <Text className="text-gray-400">{idade} anos</Text>
         </View>
         <TouchableOpacity onPress={onRemove} className="bg-red-600 flex items-center justify-center rounded-[8px]">
            <Text className="text-4xl text-white px-6 py-2">-</Text>
         </TouchableOpacity>
      </View>
   );
}