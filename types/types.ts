interface Component {
  componentName: string;
  id: number;
}

export interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export interface ChipProps {
  category: string;
  color?: string;
}

export type Item = Component & (ProductCardProps | ChipProps);
