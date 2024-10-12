const hoteldata = [
  {
    "name": "The Grand Palace",
    "location": "New Delhi, India",
    "description": "A luxurious hotel in the heart of the city.",
    "amenities": ["Free Wi-Fi", "Swimming Pool", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Palace+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Palace+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@grandpalacenewdelhi.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Taj Mahal",
    "location": "New Delhi, India",
    "description": "An iconic hotel known for its grandeur.",
    "amenities": ["Gym", "Free Breakfast", "Airport Shuttle"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Taj+Mahal+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Taj+Mahal+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hoteltajmahal.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Oberoi",
    "location": "New Delhi, India",
    "description": "A premium hotel with top-notch services.",
    "amenities": ["Spa", "Fine Dining", "Valet Parking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@oberoihotels.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Radisson Blu",
    "location": "New Delhi, India",
    "description": "A modern hotel with excellent amenities.",
    "amenities": ["Pool", "Bar", "Conference Rooms"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+1",
      "https://dummyimage.com/600x400/000/fff&text=Radisson+Blu+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@radissonblu.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Leela Palace",
    "location": "New Delhi, India",
    "description": "A five-star hotel with a royal touch.",
    "amenities": ["Free Wi-Fi", "Spa", "Pool"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Leela+Palace+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Leela+Palace+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@leela.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Radisson",
    "location": "Noida, India",
    "description": "A premium hotel offering great services.",
    "amenities": ["Gym", "Free Breakfast", "Conference Rooms"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Radisson+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Radisson+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hotelradisson.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Grand Noida",
    "location": "Noida, India",
    "description": "A luxurious hotel in the bustling city.",
    "amenities": ["Free Wi-Fi", "Swimming Pool", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Noida+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Noida+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@grandnoida.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Park Noida",
    "location": "Noida, India",
    "description": "A modern hotel with great amenities.",
    "amenities": ["Free Breakfast", "Spa", "Bar"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Park+Noida+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Park+Noida+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info=theparknoida.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Clarks",
    "location": "Noida, India",
    "description": "An elegant hotel with premium services.",
    "amenities": ["Free Wi-Fi", "Conference Rooms", "Airport Shuttle"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Clarks+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Clarks+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@clarkshotels.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Novotel",
    "location": "Pune, India",
    "description": "A modern hotel with exceptional facilities.",
    "amenities": ["Pool", "Gym", "Free Wi-Fi"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Novotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Novotel+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@novotelpune.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Westin",
    "location": "Pune, India",
    "description": "A luxurious hotel in a serene setting.",
    "amenities": ["Spa", "Fine Dining", "Pool"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Westin+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Westin+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@westinpune.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hyatt Pune",
    "location": "Pune, India",
    "description": "A contemporary hotel with modern amenities.",
    "amenities": ["Gym", "Free Breakfast", "Bar"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hyatt+Pune+1",
      "https://dummyimage.com/600x400/000/fff&text=Hyatt+Pune+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hyattpune.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Radisson Pune",
    "location": "Pune, India",
    "description": "A stylish hotel with elegant rooms.",
    "amenities": ["Spa", "Pool", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Radisson+Pune+1",
      "https://dummyimage.com/600x400/000/fff&text=Radisson+Pune+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@radissonpune.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Crown Plaza",
    "location": "Pune, India",
    "description": "An upscale hotel with premium services.",
    "amenities": ["Free Wi-Fi", "Conference Rooms", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Crown+Plaza+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Crown+Plaza+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@crownplazapune.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Radisson",
    "location": "Bangalore, India",
    "description": "A premium hotel with top-notch services.",
    "amenities": ["Spa", "Free Breakfast", "Airport Shuttle"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Radisson+Bangalore+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Radisson+Bangalore+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@radissonbangalore.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Leela Palace Bangalore",
    "location": "Bangalore, India",
    "description": "A luxurious hotel with a royal touch.",
    "amenities": ["Free Wi-Fi", "Spa", "Pool"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Leela+Palace+Bangalore+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Leela+Palace+Bangalore+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@leelapalacebangalore.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Ritz",
    "location": "Bangalore, India",
    "description": "A chic hotel with modern amenities.",
    "amenities": ["Bar", "Free Breakfast", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Ritz+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Ritz+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hotelritzbangalore.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Oberoi Bangalore",
    "location": "Bangalore, India",
    "description": "A luxurious hotel with top-notch services.",
    "amenities": ["Spa", "Fine Dining", "Valet Parking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+Bangalore+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Oberoi+Bangalore+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@oberoibangalore.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Indigo",
    "location": "Bangalore, India",
    "description": "A modern hotel with great amenities.",
    "amenities": ["Free Wi-Fi", "Spa", "Pool"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Indigo+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Indigo+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hotelindigobangalore.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Hotel Hilltop",
    "location": "Uttarakhand, India",
    "description": "A serene hotel amidst nature.",
    "amenities": ["Free Breakfast", "Spa", "Hiking Trails"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Hilltop+1",
      "https://dummyimage.com/600x400/000/fff&text=Hotel+Hilltop+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@hilltoputtarakhand.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Mountain Resort",
    "location": "Uttarakhand, India",
    "description": "A beautiful resort with stunning views.",
    "amenities": ["Free Wi-Fi", "Spa", "Outdoor Activities"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Mountain+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Mountain+Resort+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@mountainresortuttarakhand.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "River Valley Inn",
    "location": "Uttarakhand, India",
    "description": "A tranquil hotel by the river.",
    "amenities": ["Free Wi-Fi", "Fishing", "Kayaking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=River+Valley+Inn+1",
      "https://dummyimage.com/600x400/000/fff&text=River+Valley+Inn+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@rivervalleyninn.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Himalayan Retreat",
    "location": "Uttarakhand, India",
    "description": "A cozy retreat surrounded by mountains.",
    "amenities": ["Free Wi-Fi", "Spa", "Yoga Classes"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Himalayan+Retreat+1",
      "https://dummyimage.com/600x400/000/fff&text=Himalayan+Retreat+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@himalayanretreat.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Nature's Paradise",
    "location": "Uttarakhand, India",
    "description": "A beautiful place to relax and unwind.",
    "amenities": ["Free Wi-Fi", "Nature Trails", "Picnic Areas"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Nature's+Paradise+1",
      "https://dummyimage.com/600x400/000/fff&text=Nature's+Paradise+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@naturesparadise.com",
    "password": "12345",
    "role": "admin"
  }
]


  module.exports= hoteldata