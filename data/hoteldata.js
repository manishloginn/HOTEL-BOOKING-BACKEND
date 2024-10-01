const hoteldata = [
  {
    "name": "The Grand Palace",
    "location": "New Delhi, India",
    "describtion": "A luxurious hotel in the heart of the city.",
    "amenities": ["Free Wi-Fi", "Swimming Pool", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Palace+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Palace+2"
    ],
    "createdAt": "2023-07-12T10:00:00Z",
    "email": "info@grandpalacenewdelhi.com"
  },
  {
    "name": "Sea Breeze Resort",
    "location": "Goa, India",
    "describtion": "A beachside resort with stunning ocean views.",
    "amenities": ["Beach Access", "Water Sports", "Bar"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Sea+Breeze+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Sea+Breeze+Resort+2"
    ],
    "createdAt": "2023-08-05T09:00:00Z",
    "email": "info@seabreezegoa.com"
  },
  {
    "name": "Mountain View Lodge",
    "location": "Manali, India",
    "describtion": "A cozy lodge with breathtaking mountain views.",
    "amenities": ["Hiking", "Fireplace", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Mountain+View+Lodge+1",
      "https://dummyimage.com/600x400/000/fff&text=Mountain+View+Lodge+2"
    ],
    "createdAt": "2023-06-15T15:00:00Z",
    "email": "contact@mountainviewmanali.com"
  },
  {
    "name": "Royal Heritage Hotel",
    "location": "Agra, India",
    "describtion": "Experience the luxury of royal hospitality.",
    "amenities": ["Free Wi-Fi", "Fine Dining", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Royal+Heritage+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Royal+Heritage+Hotel+2"
    ],
    "createdAt": "2023-09-01T12:00:00Z",
    "email": "info@royalheritageagra.com"
  },
  {
    "name": "Urban Chic Hotel",
    "location": "Mumbai, India",
    "describtion": "A modern hotel with chic interiors and vibrant nightlife.",
    "amenities": ["Rooftop Bar", "Gym", "Free Parking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Urban+Chic+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Urban+Chic+Hotel+2"
    ],
    "createdAt": "2023-08-25T11:00:00Z",
    "email": "contact@urbanchicmumbai.com"
  },
  {
    "name": "Desert Oasis Hotel",
    "location": "Jaisalmer, India",
    "describtion": "A beautiful hotel in the heart of the Thar Desert.",
    "amenities": ["Camel Rides", "Pool", "Free Breakfast"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Desert+Oasis+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Desert+Oasis+Hotel+2"
    ],
    "createdAt": "2023-05-22T08:00:00Z",
    "email": "contact@desertoasisjaisalmer.com"
  },
  {
    "name": "The Lakeside Inn",
    "location": "Nainital, India",
    "describtion": "A charming inn with a view of the serene lake.",
    "amenities": ["Boating", "Fishing", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Lakeside+Inn+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Lakeside+Inn+2"
    ],
    "createdAt": "2023-03-18T14:00:00Z",
    "email": "info@thelakesideinnainital.com"
  },
  {
    "name": "Heritage Villa",
    "location": "Jaipur, India",
    "describtion": "A heritage property reflecting traditional Rajasthani architecture.",
    "amenities": ["Free Wi-Fi", "Traditional Cuisine", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Heritage+Villa+1",
      "https://dummyimage.com/600x400/000/fff&text=Heritage+Villa+2"
    ],
    "createdAt": "2023-06-20T13:00:00Z",
    "email": "info@heritagevillajaipur.com"
  },
  {
    "name": "The Cozy Cottage",
    "location": "Shimla, India",
    "describtion": "A warm and welcoming cottage nestled in the mountains.",
    "amenities": ["Free Wi-Fi", "Garden", "Barbecue Facilities"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Cozy+Cottage+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Cozy+Cottage+2"
    ],
    "createdAt": "2023-02-10T11:00:00Z",
    "email": "contact@cozycottageshimla.com"
  },
  {
    "name": "Cityscape Hotel",
    "location": "Chennai, India",
    "describtion": "A modern hotel with a panoramic city view.",
    "amenities": ["Swimming Pool", "Business Center", "Gym"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Cityscape+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=Cityscape+Hotel+2"
    ],
    "createdAt": "2023-07-05T10:30:00Z",
    "email": "info@cityscapechennai.com"
  },
  {
    "name": "The Serenity Resort",
    "location": "Kumarakom, India",
    "describtion": "A tranquil resort overlooking the backwaters.",
    "amenities": ["Ayurvedic Spa", "Yoga Classes", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Serenity+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Serenity+Resort+2"
    ],
    "createdAt": "2023-08-15T09:00:00Z",
    "email": "contact@serenityresortkumarakom.com"
  },
  {
    "name": "Royal Palm Resort",
    "location": "Kerala, India",
    "describtion": "A resort surrounded by palm trees and beautiful landscapes.",
    "amenities": ["Beach Access", "Water Activities", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Royal+Palm+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Royal+Palm+Resort+2"
    ],
    "createdAt": "2023-05-30T12:00:00Z",
    "email": "info@royalpalmkerala.com"
  },
  {
    "name": "The Art Hotel",
    "location": "Pune, India",
    "describtion": "A hotel showcasing local art and culture.",
    "amenities": ["Gallery", "Restaurant", "Free Parking"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Art+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Art+Hotel+2"
    ],
    "createdAt": "2023-04-21T16:00:00Z",
    "email": "info@arthotelpune.com"
  },
  {
    "name": "Tranquil Escape",
    "location": "Rishikesh, India",
    "describtion": "A peaceful hotel by the river for yoga enthusiasts.",
    "amenities": ["Yoga Classes", "River Rafting", "Meditation Hall"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Tranquil+Escape+1",
      "https://dummyimage.com/600x400/000/fff&text=Tranquil+Escape+2"
    ],
    "createdAt": "2023-01-10T09:00:00Z",
    "email": "contact@tranquilescaperishikesh.com"
  },
  {
    "name": "The Cliffside Retreat",
    "location": "Ooty, India",
    "describtion": "A serene retreat perched on a cliff overlooking the valley.",
    "amenities": ["Nature Walks", "Bonfire", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Cliffside+Retreat+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Cliffside+Retreat+2"
    ],
    "createdAt": "2023-06-10T10:00:00Z",
    "email": "info@cliffsideretreatooty.com"
  },
  {
    "name": "Majestic Meadows Resort",
    "location": "Lonavala, India",
    "describtion": "A beautiful resort nestled amidst lush green meadows.",
    "amenities": ["Outdoor Pool", "Spa", "Free Breakfast"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Majestic+Meadows+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Majestic+Meadows+Resort+2"
    ],
    "createdAt": "2023-07-20T12:00:00Z",
    "email": "contact@majesticmeadowslonavala.com"
  },
  {
    "name": "The Zen Garden Hotel",
    "location": "Dharamshala, India",
    "describtion": "A peaceful hotel surrounded by a beautifully maintained Zen garden.",
    "amenities": ["Meditation Room", "Garden View Rooms", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Zen+Garden+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Zen+Garden+Hotel+2"
    ],
    "createdAt": "2023-05-15T08:30:00Z",
    "email": "info@zengardendharamshala.com"
  },
  {
    "name": "Tropical Haven Resort",
    "location": "Andaman Islands, India",
    "describtion": "An exotic resort surrounded by pristine beaches and tropical forests.",
    "amenities": ["Scuba Diving", "Private Beach", "Spa"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Tropical+Haven+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Tropical+Haven+Resort+2"
    ],
    "createdAt": "2023-08-10T09:45:00Z",
    "email": "contact@tropicalhavenandamans.com"
  },
  {
    "name": "Forest Edge Lodge",
    "location": "Munnar, India",
    "describtion": "A tranquil lodge on the edge of a lush forest.",
    "amenities": ["Forest Walks", "Fireplace", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Forest+Edge+Lodge+1",
      "https://dummyimage.com/600x400/000/fff&text=Forest+Edge+Lodge+2"
    ],
    "createdAt": "2023-04-25T14:00:00Z",
    "email": "info@forestedgemunnar.com"
  },
  {
    "name": "The Safari Lodge",
    "location": "Ranthambore, India",
    "describtion": "A lodge that offers thrilling jungle safaris in Ranthambore.",
    "amenities": ["Safari Rides", "Wildlife Photography", "Outdoor Pool"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Safari+Lodge+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Safari+Lodge+2"
    ],
    "createdAt": "2023-09-01T07:30:00Z",
    "email": "contact@safarilodgeranthambore.com"
  },
  {
    "name": "Coconut Grove Resort",
    "location": "Alleppey, India",
    "describtion": "A picturesque resort by the backwaters, surrounded by coconut groves.",
    "amenities": ["Houseboat Rides", "Spa", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Coconut+Grove+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Coconut+Grove+Resort+2"
    ],
    "createdAt": "2023-03-12T16:00:00Z",
    "email": "info@coconutgrovealleppey.com"
  },
  {
    "name": "Hilltop Haven",
    "location": "Darjeeling, India",
    "describtion": "A peaceful hotel on top of the hills, offering panoramic views.",
    "amenities": ["Mountain Trekking", "Tea Garden Tours", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Hilltop+Haven+1",
      "https://dummyimage.com/600x400/000/fff&text=Hilltop+Haven+2"
    ],
    "createdAt": "2023-04-08T11:00:00Z",
    "email": "contact@hilltophavendarjeeling.com"
  },
  {
    "name": "The Mirage Hotel",
    "location": "Leh, India",
    "describtion": "A high-altitude hotel that offers breathtaking views of the Himalayas.",
    "amenities": ["Trekking", "Hot Springs", "Restaurant"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Mirage+Hotel+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Mirage+Hotel+2"
    ],
    "createdAt": "2023-02-18T09:30:00Z",
    "email": "info@miragehotelleh.com"
  },
  {
    "name": "The Floating Palace",
    "location": "Udaipur, India",
    "describtion": "A stunning hotel located on a lake, offering luxury like no other.",
    "amenities": ["Lake Tours", "Spa", "Fine Dining"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=The+Floating+Palace+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Floating+Palace+2"
    ],
    "createdAt": "2023-05-05T10:00:00Z",
    "email": "info@floatingpalaceudaipur.com"
  },
  {
    "name": "Desert Dunes Resort",
    "location": "Bikaner, India",
    "describtion": "A luxury resort in the heart of the desert, perfect for adventurous souls.",
    "amenities": ["Desert Safari", "Camel Rides", "Cultural Performances"],
    "images": [
      "https://dummyimage.com/600x400/000/fff&text=Desert+Dunes+Resort+1",
      "https://dummyimage.com/600x400/000/fff&text=Desert+Dunes+Resort+2"
    ],
    "createdAt": "2023-08-22T08:30:00Z",
    "email": "contact@desertdunesbikaner.com"
  }
];

  

  module.exports= hoteldata