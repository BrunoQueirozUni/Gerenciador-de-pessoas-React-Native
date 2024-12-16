import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Participante } from "~/components/Participante";

export function Home() {

   const participantes = ["Demetrian Titus", "John Doe", "Marneus Calgar", "Vulkan", "Rogal Dorn", "Gadriel", "Charion", "Lion El'Jonson", "Sanguinius", "Roboute Guilliman", "Fulgrim", "Angron", "Mortarion", "Magnus", "Leman Russ", "Jaghatai Khan", "Konrad Curze", "Perturabo", "Alpharius", "Omegon"];

   function handleAddParticipant() {
      console.log("Adicionando participante...");
   }

   function handleRemoverParticipante(nome: string) {
      console.log(`Removendo participante ${nome}...`);
   }

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
