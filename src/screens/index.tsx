import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participante } from "~/components/Participante";

export function Home() {

   const [participantes, setParticipantes] = useState(["Roboute Guilliman"])

   //const participantes = ["Demetrian Titus", "John Doe", "Marneus Calgar", "Vulkan", "Rogal Dorn", "Gadriel", "Charion", "Lion El'Jonson", "Sanguinius", "Roboute Guilliman", "Fulgrim", "Angron", "Mortarion", "Magnus", "Leman Russ", "Jaghatai Khan", "Konrad Curze", "Perturabo", "Alpharius", "Omegon"];



   function handleAddParticipant() {
      if (participantes.includes("Demetrian Titus")) {
         return Alert.alert("Participante já adicionado", "Este participante já foi adicionado à lista de convidados.");
      };

      setParticipantes(prevState => [...prevState, "John Doe"]);
      console.log("Adicionando participante...");
   };

   function handleRemoverParticipante(nome: string) {
      Alert.alert("Remover participante", `Deseja remover o participante ${nome}?`, [
         {
            text: "Sim",
            onPress: () => Alert.alert("Participante removido")
         },
         {
            text: "Não",
            style: "cancel"
         }
      ]);

      console.log(`Removendo participante ${nome}...`);
   };

   return (
      <View className="flex-1 p-6 bg-[#131016]">
         <Text className="mt-12 text-[24px] font-bold text-[#FDFCFE]">
            Nome do Evento
         </Text>
         <Text className="text-gray-400">Terça-Feira, 10 de Dezembro de 2024</Text>
         <View className="flex flex-row gap-3 mt-5">
            <TextInput
               placeholder="Digite o nome do convidado"
               placeholderTextColor="#6B6B6B"
               className="h-[50px] bg-[#1F1E25] text-white p-[16px] font-[16px] rounded-[8px] flex-1"
            />
            <TextInput
               placeholder="N° Idade"
               placeholderTextColor="#6B6B6B"
               className="h-[50px] bg-[#1F1E25] text-white p-[16px] font-[16px] rounded-[8px]"
            />
            <TouchableOpacity onPress={handleAddParticipant} className=" bg-green-600 flex items-center justify-center rounded-[8px]">
               <Text className="text-4xl text-white px-6">+</Text>
            </TouchableOpacity>
         </View>
         <View className="mt-4 flex-1">
            <FlatList
               data={participantes}
               keyExtractor={item => item}
               renderItem={({ item }) => (
                  <Participante
                     key={item}
                     nome={item}
                     idade={Math.floor(Math.random() * 200)}
                     onRemove={() => handleRemoverParticipante(item)} />
               )}
               showsVerticalScrollIndicator={false}
               ListEmptyComponent={() => (
                  <Text className="text-[#6B6B6B] text-center mt-4">Nenhum participante adicionado</Text>
               )}
            />
         </View>
      </View>
   );
}
