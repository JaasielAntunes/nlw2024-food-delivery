import { View, Image, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { PRODUCTS } from '@/utils/data/products';
import { formatCurrency } from '@/utils/functions/format-currency';

export default function Product() {
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.filter((product) => product.id === id)[0];

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-50"
        resizeMode="cover"
      />

      <View className="p-4">
        <Text className="text-sky-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>
      </View>
    </View>
  )
}