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
      "createdAt": "2023-07-12T10:00:00Z"
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
      "createdAt": "2023-08-05T09:00:00Z"
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
      "createdAt": "2023-06-15T15:00:00Z"
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
      "createdAt": "2023-09-01T12:00:00Z"
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
      "createdAt": "2023-08-25T11:00:00Z"
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
      "createdAt": "2023-05-22T08:00:00Z"
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
      "createdAt": "2023-03-18T14:00:00Z"
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
      "createdAt": "2023-06-20T13:00:00Z"
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
      "createdAt": "2023-02-10T11:00:00Z"
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
      "createdAt": "2023-07-05T10:30:00Z"
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
      "createdAt": "2023-08-15T09:00:00Z"
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
      "createdAt": "2023-05-30T12:00:00Z"
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
      "createdAt": "2023-04-21T16:00:00Z"
    },
    {
      "name": "Tranquil Escape",
      "location": "Rishikesh, India",
      "describtion": "A peaceful hotel by the river for yoga enthusiasts.",
      "amenities": ["Yoga Classes", "River Rafting", "Spa"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Tranquil+Escape+1",
        "https://dummyimage.com/600x400/000/fff&text=Tranquil+Escape+2"
      ],
      "createdAt": "2023-03-10T15:00:00Z"
    },
    {
      "name": "The Royal Fort",
      "location": "Jodhpur, India",
      "describtion": "A hotel with heritage fort architecture and royal hospitality.",
      "amenities": ["Free Wi-Fi", "Swimming Pool", "Restaurant"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=The+Royal+Fort+1",
        "https://dummyimage.com/600x400/000/fff&text=The+Royal+Fort+2"
      ],
      "createdAt": "2023-02-01T10:00:00Z"
    },
    {
      "name": "Coastal Breeze Hotel",
      "location": "Puducherry, India",
      "describtion": "A charming coastal hotel with beach access.",
      "amenities": ["Beach Access", "Free Breakfast", "Bar"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Coastal+Breeze+Hotel+1",
        "https://dummyimage.com/600x400/000/fff&text=Coastal+Breeze+Hotel+2"
      ],
      "createdAt": "2023-04-15T11:00:00Z"
    },
    {
      "name": "Skyline Hotel",
      "location": "Hyderabad, India",
      "describtion": "A modern hotel with a stunning skyline view.",
      "amenities": ["Rooftop Restaurant", "Free Wi-Fi", "Pool"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Skyline+Hotel+1",
        "https://dummyimage.com/600x400/000/fff&text=Skyline+Hotel+2"
      ],
      "createdAt": "2023-06-30T13:00:00Z"
    },
    {
      "name": "Sunset Villa",
      "location": "Coorg, India",
      "describtion": "A tranquil villa with beautiful sunset views.",
      "amenities": ["Coffee Plantation", "Spa", "Hiking"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Sunset+Villa+1",
        "https://dummyimage.com/600x400/000/fff&text=Sunset+Villa+2"
      ],
      "createdAt": "2023-08-03T12:00:00Z"
    },
    {
      "name": "Cultural Heritage Hotel",
      "location": "Varanasi, India",
      "describtion": "A hotel reflecting the rich culture of Varanasi.",
      "amenities": ["Free Wi-Fi", "Cultural Shows", "Spa"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Cultural+Heritage+Hotel+1",
        "https://dummyimage.com/600x400/000/fff&text=Cultural+Heritage+Hotel+2"
      ],
      "createdAt": "2023-07-18T09:00:00Z"
    },
    {
      "name": "Island Getaway Resort",
      "location": "Andaman, India",
      "describtion": "A secluded resort on a private island.",
      "amenities": ["Private Beach", "Diving", "Water Sports"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Island+Getaway+Resort+1",
        "https://dummyimage.com/600x400/000/fff&text=Island+Getaway+Resort+2"
      ],
      "createdAt": "2023-05-28T10:00:00Z"
    },
    {
      "name": "Sapphire Bay Hotel",
      "location": "Kolkata, India",
      "describtion": "A luxury hotel with a view of the bay.",
      "amenities": ["Spa", "Free Breakfast", "Swimming Pool"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Sapphire+Bay+Hotel+1",
        "https://dummyimage.com/600x400/000/fff&text=Sapphire+Bay+Hotel+2"
      ],
      "createdAt": "2023-08-22T14:00:00Z"
    },
    {
      "name": "Golden Leaf Hotel",
      "location": "Chandigarh, India",
      "describtion": "A hotel surrounded by beautiful gardens.",
      "amenities": ["Garden", "Free Parking", "Restaurant"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Golden+Leaf+Hotel+1",
        "https://dummyimage.com/600x400/000/fff&text=Golden+Leaf+Hotel+2"
      ],
      "createdAt": "2023-06-12T11:00:00Z"
    },
    {
      "name": "The Luxury Stay",
      "location": "Bangalore, India",
      "describtion": "A premium hotel for business and leisure travelers.",
      "amenities": ["Business Center", "Gym", "Spa"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=The+Luxury+Stay+1",
        "https://dummyimage.com/600x400/000/fff&text=The+Luxury+Stay+2"
      ],
      "createdAt": "2023-09-10T09:30:00Z"
    },
    {
      "name": "The Green Valley",
      "location": "Munnar, India",
      "describtion": "A beautiful hotel set amidst lush green valleys.",
      "amenities": ["Nature Trails", "Spa", "Free Breakfast"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=The+Green+Valley+1",
        "https://dummyimage.com/600x400/000/fff&text=The+Green+Valley+2"
      ],
      "createdAt": "2023-08-28T10:00:00Z"
    },
    {
      "name": "Heritage Palace Hotel",
      "location": "Lucknow, India",
      "describtion": "A heritage hotel with a rich history.",
      "amenities": ["Free Wi-Fi", "Traditional Cuisine", "Spa"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=Heritage+Palace+Hotel+1",
        "https://dummyimage.com/600x400/000/fff&text=Heritage+Palace+Hotel+2"
      ],
      "createdAt": "2023-05-19T11:30:00Z"
    },
    {
      "name": "The Urban Stay",
      "location": "Delhi, India",
      "describtion": "A modern hotel in the city center.",
      "amenities": ["Free Wi-Fi", "Gym", "Rooftop Restaurant"],
      "images": [
        "https://dummyimage.com/600x400/000/fff&text=The+Urban+Stay+1",
        "https://dummyimage.com/600x400/000/fff&text=The+Urban+Stay+2"
      ],
      "createdAt": "2023-07-01T12:45:00Z"
    }
  ]
  

  module.exports= hoteldata