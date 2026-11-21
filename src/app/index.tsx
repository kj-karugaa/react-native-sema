import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { brand, neutral, semantic } from "@/theme";

// Temporary preview of the design system. Replace once real screens exist.
const swatchGroups = [
  { title: "Primary", colors: brand },
  { title: "Semantic", colors: semantic },
  { title: "Neutrals", colors: neutral },
];

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: neutral.background }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        <Link href="/onboarding" className="card">
          <Text className="heading--h3 text-lingua-purple">
            Open onboarding screen →
          </Text>
        </Link>

        <View className="card gap-3">
          <Text className="overline--brand">Typography</Text>
          <View className="divider" />
          <Text className="heading--h1">H1 Screen Title</Text>
          <Text className="heading--h2">H2 Section Title</Text>
          <Text className="heading--h3">H3 Card Title</Text>
          <Text className="heading--h4">H4 Subheading</Text>
          <Text className="body--lg">Body Large – important content</Text>
          <Text className="body--md">Body Medium – body text</Text>
          <Text className="body--sm">Body Small – supporting text</Text>
          <Text className="caption">Caption – labels, meta text</Text>
        </View>

        <View className="card gap-4">
          <Text className="overline--brand">Colors</Text>
          <View className="divider" />
          {swatchGroups.map((group) => (
            <View key={group.title} className="gap-3">
              <Text className="overline">{group.title}</Text>
              <View className="flex-row flex-wrap gap-3">
                {Object.entries(group.colors).map(([name, hex]) => (
                  <View key={name} className="w-[60px] gap-1">
                    <View
                      className="h-[60px] w-[60px] rounded-xl border border-border"
                      style={{ backgroundColor: hex }}
                    />
                    <Text className="caption">{hex}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
