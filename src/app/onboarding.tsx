import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { neutral } from "@/theme";

type SpeechBubbleProps = {
  text: string;
  bg: string;
  textColor: string;
  className: string;
  tailClassName: string;
};

// Small one-off bubble used only on this screen to recreate the
// "fox says hello in different languages" illustration.
function SpeechBubble({
  text,
  bg,
  textColor,
  className,
  tailClassName,
}: SpeechBubbleProps) {
  return (
    <View className={`absolute items-center ${className}`}>
      <View
        className="rounded-2xl px-4 py-2"
        style={{ backgroundColor: bg }}
      >
        <Text className="font-poppins-semibold text-body-lg" style={{ color: textColor }}>
          {text}
        </Text>
      </View>
      <View
        className={`absolute h-3 w-3 rotate-45 rounded-sm ${tailClassName}`}
        style={{ backgroundColor: bg }}
      />
    </View>
  );
}

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: neutral.background }}>
      <View className="flex-1 px-6">
        {/* Logo */}
        <View className="mt-2 flex-row items-center justify-center gap-2">
          <Image
            source={images.mascotLogo}
            style={{ width: 36, height: 36 }}
            contentFit="contain"
          />
          <Text className="font-poppins-bold text-h1">sema</Text>
        </View>

        {/* Headline */}
        <View className="mt-10 gap-3">
          <Text className="font-poppins-bold text-h1 leading-[38px]">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="body--md">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Illustration */}
        <View className="relative flex-1 items-center justify-center">
          <SpeechBubble
            text="Hello!"
            bg="#EAF3FE"
            textColor="#1E293B"
            className="left-8 top-36"
            tailClassName="-bottom-1 left-10"
          />
          <SpeechBubble
            text="¡Hola!"
            bg="#EDEBFD"
            textColor="#4F46E5"
            className="right-8 top-24"
            tailClassName="-bottom-1 left-8"
          />
          <SpeechBubble
            text="你好!"
            bg="#FDEEE6"
            textColor="#E1574B"
            className="right-4 top-44"
            tailClassName="-bottom-1 left-8"
          />

          <Image
            source={images.mascotWelcome}
            style={{ width: "85%", aspectRatio: 1 }}
            contentFit="contain"
          />
        </View>

        {/* CTA */}
        <TouchableOpacity
          className="mb-6 flex-row items-center justify-center rounded-2xl bg-lingua-deep-purple py-4"
          activeOpacity={0.85}
          onPress={() => router.push("/")}
        >
          <Text className="font-poppins-semibold text-body-lg text-white">
            Get Started
          </Text>
          <Text className="font-poppins-bold text-body-lg ml-2 text-white">
            ›
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
