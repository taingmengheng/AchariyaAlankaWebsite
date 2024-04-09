import { useState, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import LandingPage from "./assets/Components/LandingPage";

function App() {
  const [jewelry, setJewelry] = useState([
    {
      id: 1,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (1).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 2,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (2).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 3,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (3).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 4,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (4).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 5,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (5).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 6,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (6).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 7,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (7).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 8,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (8).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 9,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (9).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
    {
      id: 10,
      name: 'Gold Ring',
      description: 'Gold Ring',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 20, 
      discountStartDate: '2024-04-10',
      discountEndDate: '2024-04-20',
      materials: ['gold', 'diamond'],
      variant: ['gold'],
      images: ['18k Jewelry/Ring/Ring (10).JPG', ''],
      category: 'ring',
      tags: ['gold', 'diamond', 'pendant'],
      inventory: 10,
      created_at: '2024-04-08T10:00:00Z'
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        jewelry,
        setJewelry
      }}
    >
      <LandingPage />
    </AppContext.Provider>
  )
}

export default App;
