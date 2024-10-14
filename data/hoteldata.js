const hoteldata = [
  {
    "name": "The Grand Palace",
    "location": "New Delhi, India",
    "description": "A luxurious hotel in the heart of the city.",
    "amenities": ["Free Wi-Fi", "Swimming Pool", "Spa"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxzP03q4rquRyQ6pOJAGIAkZKWVX718iXXQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVK0d8e888P1Ln7CGDCHNgHRPJFz6b9dftg&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@grandpalacenewdelhi.com",
    "password": "12345",
    "role": "admin",
    "price": 900
  },
  {
    "name": "Hotel Taj Mahal",
    "location": "New Delhi, India",
    "description": "An iconic hotel known for its grandeur.",
    "amenities": ["Gym", "Free Breakfast", "Airport Shuttle"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEpcA_5AX4kJy96Y9TFHp_FUUdNr1_KwkpA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4v7BFvtTaS_NBsocvtBJorrSupkA6la11g&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hoteltajmahal.com",
    "password": "12345",
    "role": "admin",
    "price": 1500
  },
  {
    "name": "The Oberoi",
    "location": "New Delhi, India",
    "description": "A premium hotel with top-notch services.",
    "amenities": ["Spa", "Fine Dining", "Valet Parking"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOP8sFcTn-l6HFgkFXwq61WiZ3thMyQuHZg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEt8kx1WiYYmjg57P1DF7uqDIxFSNfcCJUg&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@oberoihotels.com",
    "password": "12345",
    "role": "admin",
    "price": 1200
  },
  {
    "name": "Radisson Blu",
    "location": "New Delhi, India",
    "description": "A modern hotel with excellent amenities.",
    "amenities": ["Pool", "Bar", "Conference Rooms"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqFe6vwl_U9yIWPcFpEmqT8LUkXOILQWkyQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkoOdtyD2JNVKrlxTXT5HU2J__AUOpu41B_A&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@radissonblu.com",
    "password": "12345",
    "role": "admin",
    "price": 1800
  },
  {
    "name": "The Leela Palace",
    "location": "New Delhi, India",
    "description": "A five-star hotel with a royal touch.",
    "amenities": ["Free Wi-Fi", "Spa", "Pool"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcEkz5QKB4tAfyzvmNeA8Ulazeu_M_so5dA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vcOhsCzZ-t_qvkqXzeRivhQgVKrAW59BnQ&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@leela.com",
    "password": "12345",
    "role": "admin",
    "price": 600
  },
  {
    "name": "Hotel Radisson",
    "location": "Noida, India",
    "description": "A premium hotel offering great services.",
    "amenities": ["Gym", "Free Breakfast", "Conference Rooms"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYbacMCjJmoDATroA_6Qi276Hpm3UNRGl7A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpf1XhkPVfQIjBXErAEWXm4nVTYb-JlYDySw&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hotelradisson.com",
    "password": "12345",
    "role": "admin",
    "price": 1100
  },
  {
    "name": "The Grand Noida",
    "location": "Noida, India",
    "description": "A luxurious hotel in the bustling city.",
    "amenities": ["Free Wi-Fi", "Swimming Pool", "Spa"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-PrhwYUbv4c6qMybFyU4B2d7gjZHZYpmtQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4aHyPJfM4w6jrsRFiHClyJhCUtOTNTHi7A&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@grandnoida.com",
    "password": "12345",
    "role": "admin",
    "price": 1700
  },
  {
    "name": "The Park Noida",
    "location": "Noida, India",
    "description": "A modern hotel with great amenities.",
    "amenities": ["Free Breakfast", "Spa", "Bar"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DHyZfgvgOgSVXOJfQb1mIg1yFwq9D15WTA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK0Xku6aC6clUsqotrZvNGTqN8J6Aweh1Qg&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info=theparknoida.com",
    "password": "12345",
    "role": "admin",
    "price": 900
  },
  {
    "name": "Hotel Clarks",
    "location": "Noida, India",
    "description": "An elegant hotel with premium services.",
    "amenities": ["Free Wi-Fi", "Conference Rooms", "Airport Shuttle"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDGv7RdZiiFi6o9dnbh_DkHdFI32DonAu2w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gaQaTzpGzP3C7mWeG3ZqRDP5zmRcR5AhUg&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@clarkshotels.com",
    "password": "12345",
    "role": "admin",
    "price": 1050
  },
  {
    "name": "Hotel Novotel",
    "location": "Pune, India",
    "description": "A modern hotel with exceptional facilities.",
    "amenities": ["Pool", "Gym", "Free Wi-Fi"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cyOZKsW7YMIdu1dJ5umOPG4AWUHDeKJomw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAT1wVDjgHnr8UBVRkzX4v3bJcKVzEDVE-Q&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@novotelpune.com",
    "password": "12345",
    "role": "admin",
    "price": 1600
  },
  {
    "name": "The Westin",
    "location": "Pune, India",
    "description": "A luxurious hotel in a serene setting.",
    "amenities": ["Spa", "Fine Dining", "Pool"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlK_o8BVbkU5UsF7o4g9nYG9B_YW3W6N0nw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLNSwMTFdKKStXuOA91CTUwL3vqaehi-8DQ&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@westinpune.com",
    "password": "12345",
    "role": "admin",
    "price": 2000
  },
  {
    "name": "Hyatt Pune",
    "location": "Pune, India",
    "description": "A contemporary hotel with modern amenities.",
    "amenities": ["Gym", "Free Breakfast", "Bar"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JawQgWsVUreAT4L253McrMyMD0M0WzKP2g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPIM1_nR7KfmiXJ1Qaxc9L8gkaB4ZkG3QtA&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hyattpune.com",
    "password": "12345",
    "role": "admin",
    "price": 1300
  },
  {
    "name": "Radisson Pune",
    "location": "Pune, India",
    "description": "A stylish hotel with elegant rooms.",
    "amenities": ["Spa", "Pool", "Restaurant"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqG9n1LEeDkEdw_i-A5UHEdiUutjbTgugfA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68kG86j-LzLd6nJWLJBZiquCHMb6WOcaJdQ&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@radissonpune.com",
    "password": "12345",
    "role": "admin",
    "price": 750
  },
  {
    "name": "The Crown Plaza",
    "location": "Pune, India",
    "description": "An upscale hotel with premium services.",
    "amenities": ["Free Wi-Fi", "Conference Rooms", "Gym"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpS1aiPDRWI4KChr1MguxIuXKJfItNZG-eg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaclyxC_TobQOAGfX6WqyjASa9AI8bVHBVQ&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@crownplazapune.com",
    "password": "12345",
    "role": "admin",
    "price": 950
  },
  {
    "name": "Hotel Radisson",
    "location": "Bangalore, India",
    "description": "A premium hotel with top-notch services.",
    "amenities": ["Spa", "Free Breakfast", "Airport Shuttle"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvTzmDK0kjEH7VGhDIaINTVjo9SSEGUG4hQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPusUWJzF-u95ovt-SVD2QWY5pWAK2pOWc3w&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@radissonbangalore.com",
    "password": "12345",
    "role": "admin",
    "price": 1050
  },
  {
    "name": "The Leela Palace Bangalore",
    "location": "Bangalore, India",
    "description": "A luxurious hotel with a royal touch.",
    "amenities": ["Free Wi-Fi", "Spa", "Pool"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sh29di2WOzw-FlztZk3YB5wsgulPUkxaaA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEH_WQPPFG7pnyVXu3FOKwnU8BjMUymnVlQ&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@leelapalacebangalore.com",
    "password": "12345",
    "role": "admin",
    "price": 1800
  },
  {
    "name": "Hotel Ritz",
    "location": "Bangalore, India",
    "description": "A chic hotel with modern amenities.",
    "amenities": ["Bar", "Free Breakfast", "Gym"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1nmVsCDMSJzmW243x-fZ7PYL--2uCTyqJw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMGtPJEdwQpiy42W5J2B-V2BqkEUIrlAESA&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hotelritzbangalore.com",
    "password": "12345",
    "role": "admin",
    "price": 1650
  },
  {
    "name": "The Oberoi Bangalore",
    "location": "Bangalore, India",
    "description": "A luxurious hotel with top-notch services.",
    "amenities": ["Spa", "Fine Dining", "Valet Parking"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfviKqU0A-s9YIyPFzFKv3yp6WLlyFZDG5Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2cvKU-WdAAPIx13kf0u55eBry7AMWJdMmQ&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@oberoibangalore.com",
    "password": "12345",
    "role": "admin",
    "price": 1100
  },
  {
    "name": "Hotel Indigo",
    "location": "Bangalore, India",
    "description": "A modern hotel with great amenities.",
    "amenities": ["Free Wi-Fi", "Spa", "Pool"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TZCbN06d3L6fcdpVZDAWBEZoOT1MKrwVKA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjCLDRfgyhMrzDG3Z7kdVJc-MAi2jV2RZvQ&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hotelindigobangalore.com",
    "password": "12345",
    "role": "admin",
    "price": 1900
  },
  {
    "name": "Hotel Hilltop",
    "location": "Uttarakhand, India",
    "description": "A serene hotel amidst nature.",
    "amenities": ["Free Breakfast", "Spa", "Hiking Trails"],
    "images": [
      "https://www.linkhotelloughborough.co.uk/assets/img/quad-family-rooms.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVZ3EuZpR-t7mThxRru46jYUUHMoSFE4xMw&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hilltoputtarakhand.com",
    "password": "12345",
    "role": "admin",
    "price": 1650
  },
  {
    "name": "Mountain Resort",
    "location": "Uttarakhand, India",
    "description": "A beautiful resort with stunning views.",
    "amenities": ["Free Wi-Fi", "Spa", "Outdoor Activities"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTInf3760h1yi766D6e0pXi-UpnZzR_18yXA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVHWPdcj6Z4R3-AWJBH13vzfpwF0cTTqFWw&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@mountainresortuttarakhand.com",
    "password": "12345",
    "role": "admin",
    "price": 850
  },
  {
    "name": "River Valley Inn",
    "location": "Uttarakhand, India",
    "description": "A tranquil hotel by the river.",
    "amenities": ["Free Wi-Fi", "Fishing", "Kayaking"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxx2bSUqXarJka9OrjfJLG50QkUSTXNbtug&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR52tc8sXX9aAnL-N-5uTMTk9I5J6sdldy-A&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@rivervalleyninn.com",
    "password": "12345",
    "role": "admin",
    "price": 400
  },
  {
    "name": "Himalayan Retreat",
    "location": "Uttarakhand, India",
    "description": "A cozy retreat surrounded by mountains.",
    "amenities": ["Free Wi-Fi", "Spa", "Yoga Classes"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlLdpJXgfXm-xitmfqUjiyW_mR4tDNCJ6Ag&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2V-G6YNcG43ngctLxRRPSwuflDKDSX7wFA&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@himalayanretreat.com",
    "password": "12345",
    "role": "admin",
    "price": 450
  },
  {
    "name": "Nature's Paradise",
    "location": "Uttarakhand, India",
    "description": "A beautiful place to relax and unwind.",
    "amenities": ["Free Wi-Fi", "Nature Trails", "Picnic Areas"],
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeQiach9w7tV_dWyaBG5Ase17zfmaukPD3A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw43n8fjeypqG_pBJbrn5dZvamwiTqa3Qj1Q&s"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@naturesparadise.com",
    "password": "12345",
    "role": "admin",
    "price": 550
  }
]


  module.exports= hoteldata