import Slider from '../components/Slider';

export default function Home() {
  const data = [
    {
      componentName: 'Chip',
      category: 'Fresh Produce',
      color: 'bg-cyan-200 text-cyan-900',
      id: 1,
    },
    {
      componentName: 'Chip',
      category: 'Beverage',
      color: 'bg-green-200 text-green-900',
      id: 2,
    },
    {
      componentName: 'Chip',
      category: 'Fruits',
      color: 'bg-rose-200 text-rose-900',
      id: 3,
    },
    {
      componentName: 'Chip',
      category: 'Vegetables',
      color: 'bg-orange-200 text-orange-900',
      id: 4,
    },
    {
      componentName: 'Chip',
      category: 'Soap',
      color: 'bg-blue-200 text-blue-900',
      id: 5,
    },
    // {
    //   broken: 'something goes wrong',
    // },
    {
      componentName: 'ProductCard',
      name: 'Red apples',
      description:
        'Crisp, juicy, and packed with natural sweetness. Perfect for snacking, baking, or fresh juices.',
      image: '/apple.jpg',
      width: 100,
      id: 6,
    },
    {
      componentName: 'ProductCard',
      name: 'Ripe bananas',
      description:
        'Sweet and creamy bananas are the perfect snack for any time of the day.',
      image: '/banana.jpg',
      width: 100,
      id: 7,
    },
    {
      componentName: 'ProductCard',
      name: 'Fresh carrots',
      description:
        'Crunchy and packed with vitamins. Great for snacking, salads, or fresh juices.',
      image: '/carrot.jpg',
      width: 100,
      id: 8,
    },
    {
      componentName: 'ProductCard',
      name: 'Green grapes',
      description:
        'Juicy and flavorful, these grapes are ideal for a refreshing snack or a tasty addition to desserts.',
      image: '/grape.jpg',
      width: 100,
      id: 9,
    },
    {
      componentName: 'ProductCard',
      name: 'Red grapes',
      description:
        'Bursting with sweet flavor, these grapes are perfect for snacking, salads, or making fresh juices. Tool long description here, that doesn`t fit in the card.',
      image: '/grape1.jpg',
      width: 100,
      id: 10,
    },
  ];

  return (
    <div className="p-2 flex justify-center">
      <Slider items={data} />
    </div>
  );
}
