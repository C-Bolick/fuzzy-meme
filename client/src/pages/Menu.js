import React from 'react';
import Header from '../components/Header';
import { useQuery } from '@apollo/client';
import { GET_MENU_ITEMS } from '../queries/queries'; // Import your GraphQL query


const Menu = () => {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const menuItems = data.menuItems; // Adjust this based on the structure of your query response


    return (
        <main>
            <Header />
            <div className="flex-row justify-center">
                <h1>Menu</h1>
            </div>
            {/* Render your menu items here */}
            <div>
                {menuItems.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        {/* Add a button to add to cart */}
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </main>
    );
  return (
      <main>
          <Header />
          <div className="flex-row justify-center">
              <h1>Menu</h1>
          </div>
          {/* Render your menu items here */}
          <div>
              {menuItems.map(item => (
                  <div key={item.id}>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      {/* Add a button to add to cart */}
                      <button>Add to Cart</button>
                  </div>
              ))}
          </div>
      </main>
  );
};

export default Menu;