import { ReactNode, createContext, useState } from 'react'

interface ProductData {
  id: number
  name: string
  tags: Array<string>
  description: string
  imageName: string
  price: string
}

const catalog: ProductData[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageName: 'expresso',
    price: '9,90',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageName: 'americano',
    price: '9,90',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    imageName: 'expressoCremoso',
    price: '9,90',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageName: 'cafeGelado',
    price: '9,90',
  },
  {
    id: 5,
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageName: 'cafeComLeite',
    price: '9,90',
  },
  {
    id: 6,
    name: 'Latte',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageName: 'latte',
    price: '9,90',
  },
  {
    id: 7,
    name: 'Capuccino',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageName: 'capuccino',
    price: '9,90',
  },
  {
    id: 8,
    name: 'Macchiato',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageName: 'macchiato',
    price: '9,90',
  },
  {
    id: 9,
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imageName: 'mochaccino',
    price: '9,90',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageName: 'chocolateQuente',
    price: '9,90',
  },
  {
    id: 11,
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageName: 'cubano',
    price: '9,90',
  },
  {
    id: 12,
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageName: 'havaiano',
    price: '9,90',
  },
  {
    id: 13,
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageName: 'arabe',
    price: '9,90',
  },
  {
    id: 14,
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageName: 'irlandes',
    price: '9,90',
  },
]

interface ProductsContextType {
  products: ProductData[]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<ProductData[]>(catalog)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
