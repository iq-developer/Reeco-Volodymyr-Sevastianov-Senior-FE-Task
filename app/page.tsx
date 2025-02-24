import Slider from '../components/Slider';
import ProductCard from '../components/ProductCard';
import Chip from '../components/Chip';

export default function Home() {
  const data = [
    {
      component: 'ProductCard',
      props: {
        name: 'Product 1',
        description: 'Description 1',
        image: '/next.svg',
        width: 100,
      },
    },
    {
      component: 'Chip',
      props: {
        category: 'Fresh Produce',
      },
    },
  ];

  return (
    <div>
      <Slider data={data} />
    </div>
  );
}
