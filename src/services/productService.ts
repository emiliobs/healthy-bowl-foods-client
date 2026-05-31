import type { Product } from '../types/product';

export const getProducts = (): Promise<Product[]> => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const shouldFail = Math.random() < 0.2;

            if(shouldFail)
            {
              reject(new Error('Network error: could not reach the API server.'));
              return;    
            }

            resolve([
                { id: 1, name: 'Organic Turmeric Root', price: 15.99, isAvailable: true  },
                { id: 2, name: 'Fresh Ginger Root',     price: 12.49, isAvailable: true  },
                { id: 3, name: 'Dried Chia Seeds',      price: 12.00, isAvailable: false },
                { id: 4, name: 'Raw Cacao Powder',      price: 18.75, isAvailable: true  },
                { id: 5, name: 'Matcha Green Tea',      price: 24.99, isAvailable: true  },
            ]);
        }, 1500);
    });
};