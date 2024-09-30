const roomdata = [
  {
    "roomtype": "Standard Room",
    "price": 7500,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning"]
  },
  {
    "roomtype": "Superior Room",
    "price": 9500,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Tea/Coffee Maker"]
  },
  {
    "roomtype": "Executive Suite",
    "price": 18000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Family Room",
    "price": 12000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Air Conditioning"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 16000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Tea/Coffee Maker"]
  },
  {
    "roomtype": "Luxury Suite",
    "price": 40000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Living Room"]
  },
  {
    "roomtype": "Executive Room",
    "price": 20000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Balcony"]
  },
  {
    "roomtype": "Family Room",
    "price": 25000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Area"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 12000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Club Room",
    "price": 20000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Access to Club Lounge", "Living Room"]
  },
  {
    "roomtype": "Executive Suite",
    "price": 30000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Dining Area"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 50000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
  },

  {
    "roomtype": "Standard Room",
    "price": 9500,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning"]
  },
  {
    "roomtype": "Deluxe Room",
    "price": 14000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Tea/Coffee Maker"]
  },
  {
    "roomtype": "Business Class Room",
    "price": 16000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Desk", "Refrigerator"]
  },
  {
    "roomtype": "Family Room",
    "price": 22000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Dining Area", "Air Conditioning"]
  },

  {
    "roomtype": "Heavenly Room",
    "price": 15000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Executive Suite",
    "price": 25000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 50000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Private Pool", "Balcony"]
  },
  {
    "roomtype": "Family Room",
    "price": 22000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Area"]
  },

  {
    "roomtype": "Luxury Room",
    "price": 18000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Royal Suite",
    "price": 40000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Living Room"]
  },
  {
    "roomtype": "Club Room",
    "price": 25000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Access to Club Lounge", "Air Conditioning"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 60000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
  },

  {
    "roomtype": "Superior Room",
    "price": 15000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Executive Suite",
    "price": 30000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Dining Area"]
  },
  {
    "roomtype": "Luxury Suite",
    "price": 45000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Private Pool", "Balcony"]
  },
  {
    "roomtype": "Family Room",
    "price": 25000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Area"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 12000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Tea/Coffee Maker"]
  },
  {
    "roomtype": "Business Class Room",
    "price": 18000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Desk", "Refrigerator"]
  },
  {
    "roomtype": "Suite",
    "price": 30000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Family Room",
    "price": 22000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Area"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 10000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Mini Bar"]
  },
  {
    "roomtype": "Luxury Suite",
    "price": 20000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Breakfast", "Living Room"]
  },
  {
    "roomtype": "Executive Room",
    "price": 15000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Tea/Coffee Maker"]
  },
  {
    "roomtype": "Family Room",
    "price": 25000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Mini Bar"]
  },

  {
    "roomtype": "Standard Room",
    "price": 8000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning"]
  },
  {
    "roomtype": "Executive Suite",
    "price": 15000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Living Room", "Kitchenette"]
  },
  {
    "roomtype": "Business Class Room",
    "price": 12000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Desk", "Mini Bar"]
  },
  {
    "roomtype": "Family Room",
    "price": 20000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Refrigerator"]
  },

  {
    "roomtype": "King Room",
    "price": 12000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Mini Bar"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 30000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
  },
  {
    "roomtype": "Deluxe Room",
    "price": 15000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Coffee Maker", "Air Conditioning"]
  },
  {
    "roomtype": "Royal Suite",
    "price": 35000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Balcony"]
  },

  {
    "roomtype": "Family Room",
    "price": 9000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Refrigerator"]
  },
  {
    "roomtype": "Business Room",
    "price": 11000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Desk", "Air Conditioning"]
  },
  {
    "roomtype": "Standard Room",
    "price": 8000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Coffee Maker", "Air Conditioning"]
  },
  {
    "roomtype": "Suite",
    "price": 15000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Dining Area"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 8500,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Coffee Maker", "Air Conditioning"]
  },
  {
    "roomtype": "Junior Suite",
    "price": 17000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Superior Room",
    "price": 9500,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Business Room",
    "price": 12000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Desk", "Mini Bar"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 10000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Mini Bar"]
  },
  {
    "roomtype": "Club Room",
    "price": 14000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Access to Club Lounge", "Air Conditioning"]
  },
  {
    "roomtype": "Executive Suite",
    "price": 25000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Family Room",
    "price": 18000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 9000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Refrigerator"]
  },
  {
    "roomtype": "Club Room",
    "price": 14000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Access to Club Lounge", "Air Conditioning"]
  },
  {
    "roomtype": "Suite",
    "price": 22000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Family Room",
    "price": 15000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },

  {
    "roomtype": "Standard Room",
    "price": 8000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning"]
  },
  {
    "roomtype": "Deluxe Room",
    "price": 11000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Family Room",
    "price": 16000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Air Conditioning"]
  },
  {
    "roomtype": "Business Class Room",
    "price": 15000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Desk", "Mini Bar"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 12000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Royal Suite",
    "price": 40000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Living Room"]
  },
  {
    "roomtype": "Luxury Room",
    "price": 18000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Tea/Coffee Maker", "Air Conditioning"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 50000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 14000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Luxury Suite",
    "price": 30000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Living Room"]
  },
  {
    "roomtype": "Superior Room",
    "price": 10000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Tea/Coffee Maker", "Air Conditioning"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 60000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
  },

  {
    "roomtype": "Standard Room",
    "price": 7000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning"]
  },
  {
    "roomtype": "Deluxe Room",
    "price": 11000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Family Room",
    "price": 16000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Air Conditioning"]
  },
  {
    "roomtype": "Suite",
    "price": 25000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },

  {
    "roomtype": "Standard Room",
    "price": 8000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning"]
  },
  {
    "roomtype": "Deluxe Room",
    "price": 12000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Family Room",
    "price": 18000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Air Conditioning"]
  },
  {
    "roomtype": "Executive Room",
    "price": 22000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 9500,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Luxury Room",
    "price": 15000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Tea/Coffee Maker", "Air Conditioning"]
  },
  {
    "roomtype": "Family Room",
    "price": 17000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Air Conditioning"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 60000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 28000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Air Conditioning"]
  },
  {
    "roomtype": "Executive Suite",
    "price": 60000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Jacuzzi", "Living Room"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 80000,
    "availability": true,
    "capacity": 6,
    "amenities": ["Free Wi-Fi", "Dining Room", "Private Terrace"]
  },
  {
    "roomtype": "Family Room",
    "price": 35000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Area"]
  },
  {
    "roomtype": "Standard Room",
    "price": 18000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning"]
  },
  {
    "roomtype": "King Room",
    "price": 24000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Coffee Maker"]
  },
  {
    "roomtype": "Club Room",
    "price": 35000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Access to Club Lounge", "Living Room"]
  },
  {
    "roomtype": "Family Suite",
    "price": 30000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Area"]
  },

  {
    "roomtype": "Deluxe Room",
    "price": 22000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Tea/Coffee Maker"]
  },
  {
    "roomtype": "Premium Suite",
    "price": 40000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Presidential Suite",
    "price": 60000,
    "availability": true,
    "capacity": 6,
    "amenities": ["Free Wi-Fi", "Private Pool", "Balcony"]
  },
  {
    "roomtype": "Family Room",
    "price": 28000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Area"]
  },

  {
    "roomtype": "Standard Room",
    "price": 13000,
    "availability": true,
    "capacity": 2,
    "amenities": ["Free Wi-Fi", "Air Conditioning", "Tea/Coffee Maker"]
  },
  {
    "roomtype": "King Room",
    "price": 20000,
    "availability": true,
    "capacity": 3,
    "amenities": ["Free Wi-Fi", "Mini Bar", "Refrigerator"]
  },
  {
    "roomtype": "Suite",
    "price": 28000,
    "availability": true,
    "capacity": 4,
    "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
  },
  {
    "roomtype": "Family Room",
    "price": 23000,
    "availability": true,
    "capacity": 5,
    "amenities": ["Free Wi-Fi", "Refrigerator", "Dining Table"]
  }

]


module.exports = roomdata