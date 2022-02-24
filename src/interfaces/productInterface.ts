interface Product {
  name: string;
  amount: string;
  orderId?: number | null;
}

interface CreatedProduct extends Product {
  id: number;
}

interface UpdateProduct {
  name?: string;
  amount?: string;
  orderId?: number | null;
}
export { Product, CreatedProduct, UpdateProduct };
