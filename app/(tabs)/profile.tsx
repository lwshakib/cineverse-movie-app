import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  useEffect(() => {}, []);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 65, paddingTop: 20 }}
      className="bg-gray-100 dark:bg-gray-900"
    >
      <View className="w-full max-w-xl mx-auto items-center rounded-2xl p-6 shadow-xl mt-12 mb-12 bg-white dark:bg-black">
        {/* Profile Picture, Name, Email, Bio */}
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          className="w-32 h-32 rounded-full mb-6 bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-gray-700 shadow-lg"
        />
        <Text className="text-2xl font-bold text-black dark:text-white mb-2">
          John Doe
        </Text>
        <Text className="text-lg text-gray-600 dark:text-gray-300 mb-2">
          john.doe@example.com
        </Text>
        {/* Membership Badge */}
        <View className="flex-row items-center mb-4">
          <Ionicons name="star" size={20} color="#FFD700" />
          <Text className="ml-2 text-base font-semibold text-yellow-600 dark:text-yellow-400">
            Premium Member
          </Text>
        </View>
        <Text className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 px-4">
          Movie enthusiast. Love to explore new films and share reviews. Always
          up for a good thriller or sci-fi adventure!
        </Text>
        {/* Statistics Row */}
        <View className="flex-row justify-around w-full mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow">
          <View className="items-center">
            <Ionicons name="film-outline" size={28} color="#3B82F6" className="mb-1" />
            <Text className="text-xl font-bold text-black dark:text-white">
              128
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Watched
            </Text>
          </View>
          <View className="items-center">
            <Ionicons name="chatbubble-ellipses-outline" size={28} color="#22C55E" className="mb-1" />
            <Text className="text-xl font-bold text-black dark:text-white">
              34
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Reviews
            </Text>
          </View>
          <View className="items-center">
            <Ionicons name="heart-outline" size={28} color="#EF4444" className="mb-1" />
            <Text className="text-xl font-bold text-black dark:text-white">
              12
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Favorites
            </Text>
          </View>
        </View>
        {/* Favorites Preview */}
        <View className="w-full mb-8">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Favorites
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row -mx-1"
          >
            {[
              {
                name: "Interstellar",
                img: "https://image.tmdb.org/t/p/w185/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
              },
              {
                name: "The Matrix",
                img: "https://image.tmdb.org/t/p/w185/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
              },
              {
                name: "The Dark Knight",
                img: "https://image.tmdb.org/t/p/w185/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
              },
              {
                name: "Pulp Fiction",
                img: "https://image.tmdb.org/t/p/w185/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
              },
            ].map((movie, i) => (
              <View key={i} className="mx-1 items-center w-28">
                <Image
                  source={{ uri: movie.img }}
                  className="w-24 h-36 rounded-lg bg-gray-200 dark:bg-gray-800 shadow-md mb-1"
                />
                <Text
                  className="w-24 text-xs text-center text-black dark:text-white mt-1"
                  numberOfLines={2}
                >
                  {movie.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* Recent Activity */}
        <View className="w-full mb-8">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <Ionicons name="star-outline" size={20} color="#F59E0B" />
              <Text className="ml-3 text-gray-700 dark:text-gray-300 text-base">
                Reviewed Inception
              </Text>
            </View>
            <View className="flex-row items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <Ionicons name="heart-circle-outline" size={20} color="#EF4444" />
              <Text className="ml-3 text-gray-700 dark:text-gray-300 text-base">
                Added Interstellar to Favorites
              </Text>
            </View>
            <View className="flex-row items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <Ionicons name="eye-sharp" size={20} color="#3B82F6" />
              <Text className="ml-3 text-gray-700 dark:text-gray-300 text-base">
                Watched The Matrix
              </Text>
            </View>
          </View>
        </View>
        {/* Edit Profile, Settings, Logout Buttons */}
        <TouchableOpacity className="bg-blue-600 dark:bg-blue-500 px-8 py-3 rounded-lg shadow-md mb-8 w-full items-center">
          <Text className="text-white font-bold text-lg">Edit Profile</Text>
        </TouchableOpacity>
        <View className="w-full mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow">
          <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Account Settings
          </Text>
          <TouchableOpacity className="py-3 border-b border-gray-200 dark:border-gray-700 flex-row justify-between items-center">
            <Text className="text-lg text-gray-800 dark:text-gray-200">
              Change Password
            </Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="py-3 border-b border-gray-200 dark:border-gray-700 flex-row justify-between items-center">
            <Text className="text-lg text-gray-800 dark:text-gray-200">
              Notification Preferences
            </Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="py-3 flex-row justify-between items-center">
            <Text className="text-lg text-gray-800 dark:text-gray-200">
              Privacy Settings
            </Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-red-600 dark:bg-red-500 px-8 py-3 rounded-lg shadow-md mt-4 w-full items-center">
          <Text className="text-white font-bold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
