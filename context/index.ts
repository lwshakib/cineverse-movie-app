import { create } from "zustand";

interface OnBoardingState {
  isOnBoarding: boolean;
  setIsOnBoarding: (isOnBoarding: boolean) => void;
}

export const useOnBoardingState = create<OnBoardingState>((set) => ({
  isOnBoarding: true,
  setIsOnBoarding: (isOnBoarding: boolean) => set({ isOnBoarding }),
}));
