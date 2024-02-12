import { View, Image, Text, ScrollView } from 'react-native';
import { useLocalSearchParams, useNavigation, Redirect } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { PRODUCTS } from '@/utils/data/products';
import { formatCurrency } from '@/utils/functions/format-currency';
import { Button } from '@/components/button';
import { LinkButton } from '@/components/link-btn';
import { useCartStore } from '@/stores/cart-store';

export default function Product() {
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const { id } = useLocalSearchParams();
  const product = PRODUCTS.find((product) => product.id === id);

  function handleAddToCart() {
    cartStore.add(product!);
    navigation.goBack();
  }

  if (!product) {
    return <Redirect href="/" />
  }

  return (
    <ScrollView className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-50"
        resizeMode="cover"
      />

      <View className="p-4">
        <Text className="text-white text-xl font-bold">
          {product.title}
        </Text>

        <Text className="text-sky-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text className="text-slate-400 font-body text-base leading-6" key={ingredient}>
            {'\u2022'} {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>

          <Button.Text>
            Adicionar ao pedido
          </Button.Text>
        </Button>

        <LinkButton title="Voltar ao menu" href="/" />
      </View>
    </ScrollView>
  )
}