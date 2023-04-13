import { ProductProps } from '@/components/Card/Card';
import React, { Dispatch, SetStateAction } from 'react';
const CartContext = React.createContext<[ProductProps[], Dispatch<SetStateAction<ProductProps[]>>]>(
  [[] as ProductProps[], () => []]
);
export default CartContext;
