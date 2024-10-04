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
    "name": "Sea Breeze Resort",
    "location": "Goa, India",
    "description": "A beachside resort with stunning ocean views.",
    "amenities": ["Beach Access", "Water Sports", "Bar"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Sea+Breeze+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Sea+Breeze+Resort+2"
    ],
    "createdAt": "2023-08-05T09:00:00Z",
    "email": "info@seabreezegoa.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Mountain View Lodge",
    "location": "Manali, India",
    "description": "A cozy lodge with breathtaking mountain views.",
    "amenities": ["Hiking", "Fireplace", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Mountain+View+Lodge+1",
      "https://dummyimage.com/600x400/000/fff&text=Mountain+View+Lodge+2"
    ],
    "createdAt": "2023-06-15T15:00:00Z",
    "email": "contact@mountainviewmanali.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Royal Heritage Hotel",
    "location": "Agra, India",
    "description": "Experience the luxury of royal hospitality.",
    "amenities": ["Free Wi-Fi", "Fine Dining", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Royal+Heritage+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Royal+Heritage+Hotel+2"
    ],
    "createdAt": "2023-09-01T12:00:00Z",
    "email": "info@royalheritageagra.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Urban Chic Hotel",
    "location": "Mumbai, India",
    "description": "A modern hotel with chic interiors and vibrant nightlife.",
    "amenities": ["Rooftop Bar", "Gym", "Free Parking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Urban+Chic+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Urban+Chic+Hotel+2"
    ],
    "createdAt": "2023-08-25T11:00:00Z",
    "email": "contact@urbanchicmumbai.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Desert Oasis Hotel",
    "location": "Jaisalmer, India",
    "description": "A beautiful hotel in the heart of the Thar Desert.",
    "amenities": ["Camel Rides", "Pool", "Free Breakfast"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Desert+Oasis+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Desert+Oasis+Hotel+2"
    ],
    "createdAt": "2023-05-22T08:00:00Z",
    "email": "contact@desertoasisjaisalmer.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Lakeside Inn",
    "location": "Nainital, India",
    "description": "A charming inn with a view of the serene lake.",
    "amenities": ["Boating", "Fishing", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Lakeside+Inn+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Lakeside+Inn+2"
    ],
    "createdAt": "2023-03-18T14:00:00Z",
    "email": "info@thelakesideinnainital.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Heritage Villa",
    "location": "Jaipur, India",
    "description": "A heritage property reflecting traditional Rajasthani architecture.",
    "amenities": ["Free Wi-Fi", "Traditional Cuisine", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Heritage+Villa+1",
      "https://dummyimage.com/600x400/000/fff&text=Heritage+Villa+2"
    ],
    "createdAt": "2023-06-20T13:00:00Z",
    "email": "info@heritagevillajaipur.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Cozy Cottage",
    "location": "Shimla, India",
    "description": "A warm and welcoming cottage nestled in the mountains.",
    "amenities": ["Free Wi-Fi", "Garden", "Barbecue Facilities"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Cozy+Cottage+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Cozy+Cottage+2"
    ],
    "createdAt": "2023-02-10T11:00:00Z",
    "email": "contact@cozycottageshimla.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Cityscape Hotel",
    "location": "Chennai, India",
    "description": "A modern hotel with a panoramic city view.",
    "amenities": ["Swimming Pool", "Business Center", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Cityscape+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Cityscape+Hotel+2"
    ],
    "createdAt": "2023-07-05T10:30:00Z",
    "email": "info@cityscapechennai.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Serenity Resort",
    "location": "Kumarakom, India",
    "description": "A tranquil resort overlooking the backwaters.",
    "amenities": ["Ayurvedic Spa", "Yoga Classes", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Serenity+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Serenity+Resort+2"
    ],
    "createdAt": "2023-08-15T09:00:00Z",
    "email": "contact@serenityresortkumarakom.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Royal Palm Resort",
    "location": "Kerala, India",
    "description": "A resort surrounded by palm trees and beautiful landscapes.",
    "amenities": ["Beach Access", "Water Activities", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Royal+Palm+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Royal+Palm+Resort+2"
    ],
    "createdAt": "2023-05-30T12:00:00Z",
    "email": "info@royalpalmkerala.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Art Hotel",
    "location": "Pune, India",
    "description": "A hotel showcasing local art and culture.",
    "amenities": ["Gallery", "Restaurant", "Free Parking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Art+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Art+Hotel+2"
    ],
    "createdAt": "2023-04-21T16:00:00Z",
    "email": "contact@arthotelpune.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Eco Green Resort",
    "location": "Munnar, India",
    "description": "An eco-friendly resort nestled in the tea plantations.",
    "amenities": ["Organic Food", "Hiking", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Eco+Green+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Eco+Green+Resort+2"
    ],
    "createdAt": "2023-03-10T14:00:00Z",
    "email": "info@ecogreenmunnar.com",
    "password": "12345",
    "role": "admin"
  },
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
    "name": "Sea Breeze Resort",
    "location": "Goa, India",
    "description": "A beachside resort with stunning ocean views.",
    "amenities": ["Beach Access", "Water Sports", "Bar"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Sea+Breeze+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Sea+Breeze+Resort+2"
    ],
    "createdAt": "2023-08-05T09:00:00Z",
    "email": "info@seabreezegoa.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Mountain View Lodge",
    "location": "Manali, India",
    "description": "A cozy lodge with breathtaking mountain views.",
    "amenities": ["Hiking", "Fireplace", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Mountain+View+Lodge+1",
      "https://dummyimage.com/600x400/000/fff&text=Mountain+View+Lodge+2"
    ],
    "createdAt": "2023-06-15T15:00:00Z",
    "email": "contact@mountainviewmanali.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Royal Heritage Hotel",
    "location": "Agra, India",
    "description": "Experience the luxury of royal hospitality.",
    "amenities": ["Free Wi-Fi", "Fine Dining", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Royal+Heritage+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Royal+Heritage+Hotel+2"
    ],
    "createdAt": "2023-09-01T12:00:00Z",
    "email": "info@royalheritageagra.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Urban Chic Hotel",
    "location": "Mumbai, India",
    "description": "A modern hotel with chic interiors and vibrant nightlife.",
    "amenities": ["Rooftop Bar", "Gym", "Free Parking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Urban+Chic+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Urban+Chic+Hotel+2"
    ],
    "createdAt": "2023-08-25T11:00:00Z",
    "email": "contact@urbanchicmumbai.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Desert Oasis Hotel",
    "location": "Jaisalmer, India",
    "description": "A beautiful hotel in the heart of the Thar Desert.",
    "amenities": ["Camel Rides", "Pool", "Free Breakfast"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Desert+Oasis+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Desert+Oasis+Hotel+2"
    ],
    "createdAt": "2023-05-22T08:00:00Z",
    "email": "contact@desertoasisjaisalmer.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Lakeside Inn",
    "location": "Nainital, India",
    "description": "A charming inn with a view of the serene lake.",
    "amenities": ["Boating", "Fishing", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Lakeside+Inn+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Lakeside+Inn+2"
    ],
    "createdAt": "2023-03-18T14:00:00Z",
    "email": "info@thelakesideinnainital.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Heritage Villa",
    "location": "Jaipur, India",
    "description": "A heritage property reflecting traditional Rajasthani architecture.",
    "amenities": ["Free Wi-Fi", "Traditional Cuisine", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Heritage+Villa+1",
      "https://dummyimage.com/600x400/000/fff&text=Heritage+Villa+2"
    ],
    "createdAt": "2023-06-20T13:00:00Z",
    "email": "info@heritagevillajaipur.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Cozy Cottage",
    "location": "Shimla, India",
    "description": "A warm and welcoming cottage nestled in the mountains.",
    "amenities": ["Free Wi-Fi", "Garden", "Barbecue Facilities"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Cozy+Cottage+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Cozy+Cottage+2"
    ],
    "createdAt": "2023-02-10T11:00:00Z",
    "email": "contact@cozycottageshimla.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "Cityscape Hotel",
    "location": "Chennai, India",
    "description": "A modern hotel with a panoramic city view.",
    "amenities": ["Swimming Pool", "Business Center", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Cityscape+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Cityscape+Hotel+2"
    ],
    "createdAt": "2023-07-05T10:30:00Z",
    "email": "info@cityscapechennai.com",
    "password": "12345",
    "role": "admin"
  },
  {
    "name": "The Serenity Resort",
    "location": "Kumarakom, India",
    "description": "A tranquil resort overlooking the backwaters.",
    "amenities": ["Ayurvedic Spa", "Yoga Classes", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Serenity+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Serenity+Resort+2"
    ],
    "createdAt": "2023-08-15T09:00:00Z",
    "email": "contact@serenityresortkumarakom.com",
    "password": "12345",
    "role": "admin"
  },
];  

  module.exports= hoteldata