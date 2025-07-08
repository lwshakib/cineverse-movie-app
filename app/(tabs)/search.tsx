import { searchMovies } from "@/TMDB/config";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Refetch function for search icon and pull-to-refresh
  const refetch = async () => {
    if (!query.trim()) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setLoading(true);
    setSearched(false);
    try {
      const res = await searchMovies({ query });
      setResults(res.results || []);
    } catch (e) {
      setResults([]);
    }
    setLoading(false);
    setSearched(true);
  };

  // Pull-to-refresh handler
  const onRefresh = async () => {
    if (!query.trim()) return;
    setRefreshing(true);
    try {
      const res = await searchMovies({ query });
      setResults(res.results || []);
    } catch (e) {
      setResults([]);
    }
    setRefreshing(false);
    setSearched(true);
  };

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSearched(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    setSearched(false);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await searchMovies({ query });
        setResults(res.results || []);
      } catch (e) {
        setResults([]);
      }
      setLoading(false);
      setSearched(true);
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  return (
    <View className="flex-1 items-center bg-white dark:bg-black px-4">
      <View className="w-full mb-4 flex-row items-center relative">
        <TextInput
          className="flex-1 h-12 border border-gray-300 dark:border-gray-700 rounded-lg px-4 text-base bg-gray-100 dark:bg-gray-900 text-black dark:text-white pr-10"
          placeholder="Search movies..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
        />
        {query.trim().length > 0 && (
          <TouchableOpacity
            onPress={refetch}
            className="absolute right-3 top-0 h-12 justify-center items-center"
            style={{ width: 36 }}
            activeOpacity={0.7}
          >
            <Ionicons
              name="search"
              size={22}
              color="#4B5563"
              darkColor="#D1D5DB"
            />
          </TouchableOpacity>
        )}
      </View>
      {loading ? (
        <View className="w-full" style={{ flex: 1 }}>
          {[0, 1].map((row) => (
            <View key={row} className="flex-row justify-between mb-4">
              {[0, 1, 2].map((col) => (
                <View
                  key={col}
                  className="flex-1 m-1 my-4 items-center bg-transparent rounded-xl p-0"
                  style={{ maxWidth: "32%" }}
                >
                  <View
                    className="w-full h-44 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"
                    style={{ aspectRatio: 2 / 3, width: "100%", maxWidth: 110 }}
                  />
                  <View className="w-full mt-2 px-1">
                    <View className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                    <View className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      ) : (
        <>
          {!loading && searched && results.length === 0 && (
            <Text className="mt-5 text-gray-500 dark:text-gray-400">
              No results found.
            </Text>
          )}
          <FlatList
            data={results}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="flex-1 m-1 my-4 items-center bg-transparent rounded-xl p-0"
                onPress={() =>
                  router.push({
                    pathname: "/movie/[id]",
                    params: { id: item.id.toString() },
                  })
                }
                activeOpacity={0.8}
                style={{ maxWidth: "32%" }}
              >
                <Image
                  source={{
                    uri: item.poster_path
                      ? `https://image.tmdb.org/t/p/w185${item.poster_path}`
                      : "https://img.myloview.com/stickers/whitelaptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstractcircle-random-dots-vector-illustration-400-176057922.jpg",
                  }}
                  className="w-full h-44 rounded-lg bg-gray-300 dark:bg-gray-700"
                  style={{ aspectRatio: 2 / 3, width: "100%", maxWidth: 110 }}
                />
                <View className="w-full mt-2 px-1">
                  <Text
                    className="text-xs font-bold text-black dark:text-white mb-1"
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text className="text-xs text-gray-600 dark:text-gray-300">
                    {item.release_date}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingBottom: 32 }}
            refreshing={refreshing}
            onRefresh={refetch}
          />
        </>
      )}
    </View>
  );
}
