import { useOnBoardingState } from "@/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import OnBoarding from "../components/OnBoarding";
  export default function Index() {
  const { isOnBoarding, setIsOnBoarding } = useOnBoardingState();

  const router = useRouter();

  useEffect(() => {
    const checkOnBoarding = async () => {
      const onBoarding = await AsyncStorage.getItem("onBoarding");
      if (onBoarding === null) {
        setIsOnBoarding(true);
      } else {
        setIsOnBoarding(false);
      }
    };
    checkOnBoarding();
  }, []);

  useEffect(() => {
    if (!isOnBoarding) {
      router.replace("/(tabs)");
    }
  }, [isOnBoarding]);

  if (isOnBoarding) {
    return <OnBoarding />;
  }

  return <></>;
}
