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
      color: 'bg-orange-200 text-orange-900',
    },
    {
      componentName: 'Chip',
      category: 'Beverage',
      color: 'bg-green-200 text-green-900',
    },
    {
      componentName: 'Chip',
      category: 'Another category',
      color: 'bg-rose-200 text-rose-900',
    },
    // {
    //   broken: 'something goes wrong',
    // },
  ];

  return (
    <div className="p-2">
      <Slider items={data} />
    </div>
  );
}
