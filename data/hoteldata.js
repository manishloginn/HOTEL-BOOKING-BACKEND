const hoteldata = [
    {
        "name": "Novotel",
        "location": "Pune",
        "description": "A modern hotel with comfortable accommodations.",
        "amenities": ["Free Wi-Fi", "Pool", "Gym"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Novotel+1",
            "https://dummyimage.com/600x400/000/fff&text=Novotel+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-11"
    },
    {
        "name": "Four Seasons",
        "location": "Mumbai",
        "description": "A luxurious hotel with stunning views and exceptional service.",
        "amenities": ["Free Wi-Fi", "Spa", "Pool"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Four+Seasons+1",
            "https://dummyimage.com/600x400/000/fff&text=Four+Seasons+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-12"
    },
    {
        "name": "JW Marriott",
        "location": "Mumbai",
        "description": "A lavish hotel offering top-notch amenities and services.",
        "amenities": ["Free Wi-Fi", "Restaurants", "Spa"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=JW+Marriott+1",
            "https://dummyimage.com/600x400/000/fff&text=JW+Marriott+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-13"
    },
    {
        "name": "Renaissance",
        "location": "Mumbai",
        "description": "A contemporary hotel with stylish accommodations and facilities.",
        "amenities": ["Free Wi-Fi", "Pool", "Gym"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Renaissance+1",
            "https://dummyimage.com/600x400/000/fff&text=Renaissance+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-14"
    },
    {
        "name": "The Westin",
        "location": "Gurugram",
        "description": "A wellness-focused hotel with rejuvenating facilities.",
        "amenities": ["Spa", "Pool", "Gym"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=The+Westin+1",
            "https://dummyimage.com/600x400/000/fff&text=The+Westin+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-15"
    },
    {
        "name": "The Leela",
        "location": "Delhi",
        "description": "An elegant hotel with luxurious rooms and exceptional dining.",
        "amenities": ["Free Wi-Fi", "Restaurants", "Spa"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=The+Leela+1",
            "https://dummyimage.com/600x400/000/fff&text=The+Leela+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-16"
    },
    {
        "name": "Taj Lands End",
        "location": "Mumbai",
        "description": "A luxurious hotel with breathtaking views of the Arabian Sea.",
        "amenities": ["Free Wi-Fi", "Restaurants", "Spa"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Taj+Lands+End+1",
            "https://dummyimage.com/600x400/000/fff&text=Taj+Lands+End+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-17"
    },
    {
        "name": "Radisson Blu",
        "location": "Noida",
        "description": "A modern hotel with exceptional hospitality and comfort.",
        "amenities": ["Free Wi-Fi", "Spa", "Pool"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+1",
            "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+2"
        ],
        "rooms": [
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
            }
        ],
        "createdAt": "2022-01-18"
    },
    {
        "name": "The Oberoi",
        "location": "New Delhi",
        "description": "A luxury hotel with world-class amenities and exceptional service.",
        "amenities": ["Pool", "Spa", "Restaurants"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+1",
            "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+2"
        ],
        "rooms": [
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
                "roomtype": "Honeymoon Suite",
                "price": 30000,
                "availability": true,
                "capacity": 2,
                "amenities": ["Free Wi-Fi", "Jacuzzi", "Balcony"]
            }
        ],
        "createdAt": "2022-01-01"
    },
    {
        "name": "Radisson Blu",
        "location": "Gurugram",
        "description": "An upscale hotel offering luxury accommodations.",
        "amenities": ["Gym", "Free Breakfast", "Pool"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+1",
            "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+2"
        ],
        "rooms": [
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
                "roomtype": "Presidential Suite",
                "price": 30000,
                "availability": true,
                "capacity": 5,
                "amenities": ["Free Wi-Fi", "Dining Area", "Living Room"]
            }
        ],
        "createdAt": "2022-01-02"
    },
    {
        "name": "ITC Maurya",
        "location": "New Delhi",
        "description": "A luxurious hotel with spacious rooms and fine dining.",
        "amenities": ["Spa", "Pool", "Restaurants"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=ITC+Maurya+1",
            "https://dummyimage.com/600x400/000/fff&text=ITC+Maurya+2"
        ],
        "rooms": [
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
                "roomtype": "Executive Room",
                "price": 17000,
                "availability": true,
                "capacity": 3,
                "amenities": ["Free Wi-Fi", "Air Conditioning", "Mini Bar"]
            }
        ],
        "createdAt": "2022-01-03"
    },
    {
        "name": "Holiday Inn",
        "location": "Mumbai",
        "description": "A comfortable hotel with family-friendly amenities.",
        "amenities": ["Gym", "Free Breakfast"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Holiday+Inn+1",
            "https://dummyimage.com/600x400/000/fff&text=Holiday+Inn+2"
        ],
        "rooms": [
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
                "price": 12000,
                "availability": true,
                "capacity": 2,
                "amenities": ["Free Wi-Fi", "Air Conditioning"]
            }
        ],
        "createdAt": "2022-01-04"
    },
    {
        "name": "Crowne Plaza",
        "location": "New Delhi",
        "description": "An upscale hotel with luxurious accommodations and services.",
        "amenities": ["Spa", "Pool", "Restaurants"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Crowne+Plaza+1",
            "https://dummyimage.com/600x400/000/fff&text=Crowne+Plaza+2"
        ],
        "rooms": [
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
                "roomtype": "Executive Suite",
                "price": 22000,
                "availability": true,
                "capacity": 4,
                "amenities": ["Free Wi-Fi", "Living Room", "Dining Area"]
            }
        ],
        "createdAt": "2022-01-05"
    },
    {
        "name": "Sheraton Grand",
        "location": "Bengaluru",
        "description": "A luxurious hotel offering comfort and modern amenities.",
        "amenities": ["Free Wi-Fi", "Pool", "Spa"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Sheraton+Grand+1",
            "https://dummyimage.com/600x400/000/fff&text=Sheraton+Grand+2"
        ],
        "rooms": [
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
                "roomtype": "Presidential Suite",
                "price": 35000,
                "availability": true,
                "capacity": 5,
                "amenities": ["Free Wi-Fi", "Private Pool", "Balcony"]
            }
        ],
        "createdAt": "2022-01-06"
    },
    {
        "name": "Marriott",
        "location": "Hyderabad",
        "description": "A modern hotel with luxurious accommodations.",
        "amenities": ["Free Wi-Fi", "Restaurants", "Pool"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Marriott+1",
            "https://dummyimage.com/600x400/000/fff&text=Marriott+2"
        ],
        "rooms": [
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
                "roomtype": "Presidential Suite",
                "price": 30000,
                "availability": true,
                "capacity": 5,
                "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
            }
        ],
        "createdAt": "2022-01-07"
    },
    {
        "name": "Hyatt Regency",
        "location": "Chennai",
        "description": "A stylish hotel with spacious accommodations and excellent dining options.",
        "amenities": ["Free Wi-Fi", "Spa", "Pool"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Hyatt+Regency+1",
            "https://dummyimage.com/600x400/000/fff&text=Hyatt+Regency+2"
        ],
        "rooms": [
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
                "roomtype": "Presidential Suite",
                "price": 32000,
                "availability": true,
                "capacity": 5,
                "amenities": ["Free Wi-Fi", "Dining Area", "Living Room"]
            }
        ],
        "createdAt": "2022-01-08"
    },
    {
        "name": "Leela Palace",
        "location": "Bengaluru",
        "description": "An iconic hotel with opulent design and luxurious amenities.",
        "amenities": ["Spa", "Pool", "Restaurants"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Leela+Palace+1",
            "https://dummyimage.com/600x400/000/fff&text=Leela+Palace+2"
        ],
        "rooms": [
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
                "roomtype": "Club Room",
                "price": 20000,
                "availability": true,
                "capacity": 2,
                "amenities": ["Free Wi-Fi", "Access to Club Lounge", "Air Conditioning"]
            }
        ],
        "createdAt": "2022-01-09"
    },
    {
        "name": "Taj Mahal Palace",
        "location": "Mumbai",
        "description": "An iconic hotel with luxurious accommodations and stunning views.",
        "amenities": ["Free Wi-Fi", "Restaurants", "Spa"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Taj+Mahal+Palace+1",
            "https://dummyimage.com/600x400/000/fff&text=Taj+Mahal+Palace+2"
        ],
        "rooms": [
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
                "roomtype": "Executive Room",
                "price": 20000,
                "availability": true,
                "capacity": 2,
                "amenities": ["Free Wi-Fi", "Access to Executive Lounge", "Air Conditioning"]
            }
        ],
        "createdAt": "2022-01-10"
    },
    {
        "name": "Novotel",
        "location": "Pune",
        "description": "A modern hotel with comfortable accommodations.",
        "amenities": ["Free Wi-Fi", "Pool", "Gym"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Novotel+1",
            "https://dummyimage.com/600x400/000/fff&text=Novotel+2"
        ],
        "rooms": [
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
                "roomtype": "Presidential Suite",
                "price": 35000,
                "availability": true,
                "capacity": 5,
                "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
            }
        ],
        "createdAt": "2022-01-11"
    },
    {
        "name": "Radisson Blu",
        "location": "Delhi",
        "description": "A luxurious hotel with modern facilities.",
        "amenities": ["Free Wi-Fi", "Spa", "Pool"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+1",
            "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+2"
        ],
        "rooms": [
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
                "roomtype": "Presidential Suite",
                "price": 40000,
                "availability": true,
                "capacity": 5,
                "amenities": ["Free Wi-Fi", "Private Pool", "Dining Room"]
            }
        ],
        "createdAt": "2022-01-12"
    },
    {
        "name": "The Oberoi",
        "location": "Kolkata",
        "description": "An elegant hotel offering exceptional service.",
        "amenities": ["Free Wi-Fi", "Spa", "Gym"],
        "images": [
            "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+1",
            "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+2"
        ],
        "rooms": [
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
                "roomtype": "Club Room",
                "price": 20000,
                "availability": true,
                "capacity": 2,
                "amenities": ["Free Wi-Fi", "Access to Club Lounge", "Air Conditioning"]
            }
        ],
        "createdAt": "2022-01-13"
    },
     {
    "name": "Waldorf Astoria",
    "location": "Chicago",
    "description": "An iconic hotel known for its luxurious accommodations.",
    "amenities": ["Free Wi-Fi", "Spa", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Waldorf+Astoria+1",
      "https://dummyimage.com/600x400/000/fff&text=Waldorf+Astoria+2"
    ],
    "rooms": [
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
      }
    ],
    "createdAt": "2022-01-21"
  },
  {
    "name": "Sheraton",
    "location": "Boston",
    "description": "A classic hotel offering modern amenities.",
    "amenities": ["Free Wi-Fi", "Pool", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Sheraton+1",
      "https://dummyimage.com/600x400/000/fff&text=Sheraton+2"
    ],
    "rooms": [
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
      }
    ],
    "createdAt": "2022-01-22"
  },
  {
    "name": "InterContinental",
    "location": "Los Angeles",
    "description": "A luxury hotel offering sophisticated rooms and amenities.",
    "amenities": ["Free Wi-Fi", "Restaurants", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=InterContinental+1",
      "https://dummyimage.com/600x400/000/fff&text=InterContinental+2"
    ],
    "rooms": [
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
      }
    ],
    "createdAt": "2022-01-23"
  },
  {
    "name": "Hilton Garden Inn",
    "location": "Atlanta",
    "description": "A comfortable hotel perfect for business and leisure travelers.",
    "amenities": ["Free Wi-Fi", "Pool", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hilton+Garden+Inn+1",
      "https://dummyimage.com/600x400/000/fff&text=Hilton+Garden+Inn+2"
    ],
    "rooms": [
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
    ],
    "createdAt": "2022-01-24"
  }
]

module.exports = hoteldata