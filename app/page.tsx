import Slider from '../components/Slider';
import DynamicComponent from '../components/DynamicComponent';

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
    },
    {
      componentName: 'Chip',
      category: 'Beverage',
    },
    {
      componentName: 'Chip',
      category: 'Another category',
    },
  ];

  return (
    <div>
      <DynamicComponent props={data[1]} />
      {/* <Slider data={data} /> */}
    </div>
  );
}
