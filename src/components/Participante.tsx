import { Text, TouchableOpacity, View } from "react-native";

interface ParticipanteProps {
   nome: string;
   onRemove: () => void;
}

export function Participante({ nome, onRemove }: ParticipanteProps) {
   return (
      <View className="bg-[#26252B] pl-4 rounded-[5px] flex flex-row mt-4 items-center">
         <Text className="text- text-white flex-1">{nome}</Text>
         <TouchableOpacity onPress={onRemove} className="bg-red-600 flex items-center justify-center rounded-[8px]">
            <Text className="text-4xl text-white px-5 py-1">-</Text>
         </TouchableOpacity>
      </View>
   );
}