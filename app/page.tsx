import Slider from '../components/Slider';

export default function Home() {
  const data = [
    // {
    //   componentName: 'ProductCard',
    //   name: 'Product 1',
    //   description: 'Description 1',
    //   image: '/next.svg',
    //   width: 100,
    // },
    {
      componentName: 'Chip',
      category: 'Fresh Produce',
      color: 'bg-cyan-200 text-cyan-900',
    },
    {
      componentName: 'Chip',
      category: 'Beverage',
      color: 'bg-green-200 text-green-900',
    },
    {
      componentName: 'Chip',
      category: 'Fruits',
      color: 'bg-rose-200 text-rose-900',
    },
    {
      componentName: 'Chip',
      category: 'Vegetables',
      color: 'bg-orange-200 text-orange-900',
    },
    {
      componentName: 'Chip',
      category: 'Soap',
      color: 'bg-blue-200 text-blue-900',
    },
    // {
    //   broken: 'something goes wrong',
    // },
    {
      componentName: 'Chip',
      category: 'Fresh Produce',
      color: 'bg-cyan-200 text-cyan-900',
    },
    {
      componentName: 'Chip',
      category: 'Beverage',
      color: 'bg-green-200 text-green-900',
    },
    {
      componentName: 'Chip',
      category: 'Fruits',
      color: 'bg-rose-200 text-rose-900',
    },
  ];

  return (
    <div className="p-2 flex justify-center">
      <Slider items={data} />
    </div>
  );
}
