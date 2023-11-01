type CoffeeListProps = {
    title: string;
    slug: string;
    description: string;
    ingredients: string[];
    image: string;
    id: number;
}

import { Link } from 'react-router-dom';
import { coffeeList } from '../../data';

function CoffeeList() {
  return (
    <div>
      <h1>Nossos cafés</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee: CoffeeListProps) => (
              <Link to={ `/coffees/${coffee.slug}` } key={ coffee.id }>
                <li>{ coffee.title }</li>
              </Link>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default CoffeeList;
