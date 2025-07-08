import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  useEffect(() => {}, []);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 65 }}
      className="bg-white dark:bg-black"
    >
      <View className="w-full max-w-xl mx-auto items-center rounded-2xl p-8 shadow-lg mt-16 mb-16">
        {/* Profile Picture, Name, Email, Bio */}
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          className="w-24 h-24 rounded-full mb-4 bg-gray-200 dark:bg-gray-800"
        />
        <Text className="text-xl font-bold text-black dark:text-white mb-1">
          John Doe
        </Text>
        <Text className="text-base text-gray-600 dark:text-gray-300 mb-1">
          john.doe@example.com
        </Text>
        {/* Membership Badge */}
        <View className="flex-row items-center mb-3">
          <Ionicons name="star" size={18} color="#FFD700" />
          <Text className="ml-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
            Premium Member
          </Text>
        </View>
        <Text className="text-base text-gray-700 dark:text-gray-300 text-center mb-5">
          Movie enthusiast. Love to explore new films and share reviews. Always
          up for a good thriller or sci-fi adventure!
        </Text>
        {/* Statistics Row */}
        <View className="flex-row justify-between w-full mb-6">
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold text-black dark:text-white">
              128
            </Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">
              Watched
            </Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold text-black dark:text-white">
              34
            </Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">
              Reviews
            </Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold text-black dark:text-white">
              12
            </Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">
              Favorites
            </Text>
          </View>
        </View>
        {/* Favorites Preview */}
        <View className="w-full mb-6">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Favorites
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row"
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
            ].map((movie, i) => (
              <View key={i} className="mr-4 items-center">
                <Image
                  source={{ uri: movie.img }}
                  className="w-20 h-28 rounded-lg bg-gray-200 dark:bg-gray-800"
                />
                <Text
                  className="w-20 text-xs text-center text-black dark:text-white mt-1"
                  numberOfLines={1}
                >
                  {movie.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* Recent Activity */}
        <View className="w-full mb-6">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Recent Activity
          </Text>
          <View className="mb-2 flex-row items-center">
            <Ionicons name="create-outline" size={16} color="#4B5563" />
            <Text className="ml-2 text-gray-700 dark:text-gray-300 text-sm">
              Reviewed Inception
            </Text>
          </View>
          <View className="mb-2 flex-row items-center">
            <Ionicons name="heart-outline" size={16} color="#E11D48" />
            <Text className="ml-2 text-gray-700 dark:text-gray-300 text-sm">
              Added Interstellar to Favorites
            </Text>
          </View>
          <View className="mb-2 flex-row items-center">
            <Ionicons name="eye-outline" size={16} color="#2563EB" />
            <Text className="ml-2 text-gray-700 dark:text-gray-300 text-sm">
              Watched The Matrix
            </Text>
          </View>
        </View>
        {/* Edit Profile, Settings, Logout Buttons */}
        <TouchableOpacity className="bg-blue-600 dark:bg-blue-500 px-6 py-2 rounded-full mb-6">
          <Text className="text-white font-bold text-base">Edit Profile</Text>
        </TouchableOpacity>
        <View className="w-full mb-6">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Account Settings
          </Text>
          <TouchableOpacity className="py-3 border-b border-gray-200 dark:border-gray-700">
            <Text className="text-base text-gray-800 dark:text-gray-200">
              Change Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 border-b border-gray-200 dark:border-gray-700">
            <Text className="text-base text-gray-800 dark:text-gray-200">
              Notification Preferences
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3">
            <Text className="text-base text-gray-800 dark:text-gray-200">
              Privacy Settings
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-red-600 px-8 py-2 rounded-full mt-2">
          <Text className="text-white font-bold text-base">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
