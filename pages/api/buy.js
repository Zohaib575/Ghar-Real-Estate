const productData = [
  {
    id: 2,
    title: "Cozy Downtown Apartment",
    image:
      "https://img.playbook.com/IN-7K7Kur6uCkoVddHEJ3tMAEaTodA27fWCur4hZC4o/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhhYmQ3ZTc4/LWJhNmQtNDNlYS04/OWQ1LTIyNjg2Y2I4/MzhjOQ",
    price: 250000,
    address: "456 Main Street, City Center",
    favorite: false,
    viewCount: 800,
    parking: "Street parking",
    bathroom: "2 bathrooms",
    bedroom: "2 bedrooms",
  },
  {
    id: 4,
    title: "Mountain Retreat Cabin",
    image:
      "https://img.playbook.com/T52YKxIYDkcVziqV2p2N5UjfG5ORjIt3ea5HUO5QOg0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdiYmNlMTYx/LTgyZTQtNDRjYS1h/NDhiLWZlZDQ4M2M5/ODk4Yg",
    price: 350000,
    address: "101 Forest Trail, Mountain Village",
    favorite: false,
    viewCount: 600,
    parking: "Driveway parking",
    bathroom: "1 bathroom",
    bedroom: "2 bedrooms",
  },
  {
    id: 6,
    title: "Elegant Suburban Home",
    image:
      "https://img.playbook.com/CAuTnTH_x9zaWV_S0gD1qAXm17U6tV3wFpul9oM9Jyc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM4ODljYmFk/LTM0N2QtNGRlNC1i/NzE0LTQ5ZmU3NGI2/NWQxYw",
    price: 550000,
    address: "456 Green Meadow Lane, Suburbia Park",
    favorite: false,
    viewCount: 700,
    parking: "2-car garage",
    bathroom: "3 bathrooms",
    bedroom: "4 bedrooms",
  },
  {
    id: 8,
    title: "Ski Chalet in the Mountains",
    image:
      "https://img.playbook.com/JU5bpVXDoWALcT6BgLgNLhHNmJhZ9o_30fPzML2T0kk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNhMjYwOTZj/LTMxM2UtNDU3Ny04/MzJhLWQzNmVlZjli/ZWYyYg",
    price: 600000,
    address: "101 Snowy Peaks Trail, Winter Wonderland",
    favorite: false,
    viewCount: 800,
    parking: "1-car garage",
    bathroom: "2 bathrooms",
    bedroom: "3 bedrooms",
  },
  {
    id: 10,
    title: "Downtown Penthouse",
    image:
      "https://img.playbook.com/zvimow74y1q5NaBQYeb6zI8KaxzmtS6n9Vhqi-hInTs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdjMDZlODMx/LWQwOTUtNDVhZi04/OGEyLTMyNTk2Nzc1/MGM4ZA",
    price: 850000,
    address: "456 Skyline Avenue, Urban Heights",
    favorite: false,
    viewCount: 1500,
    parking: "Private rooftop parking",
    bathroom: "4 bathrooms",
    bedroom: "3 bedrooms",
  },
  {
    id: 16,
    title: "Tropical Beachfront Villa",
    image:
      "https://img.playbook.com/Uvpix_BmGVknCj5Z6iRilJEs9pQsAjU7nkxJ8l39uuQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VmMzFhNWY0/LTk2NDQtNDI1OS1h/ODg3LWU0YzQ0YzZk/NzY2YQ",
    price: 1250000,
    address: "101 Seashore Drive, Paradise Cove",
    favorite: false,
    viewCount: 1400,
    parking: "Private beachside parking",
    bathroom: "5 bathrooms",
    bedroom: "6 bedrooms",
  },
  {
    id: 17,
    title: "Charming Lakeside Cottage",
    image:
      "https://img.playbook.com/SgUzYOrd_mkRi1VykitTJFG_LGVeIRMbQUpmUUlM4o4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzVhNDViYzYz/LWRlZTAtNGE2Yi04/OTY3LTYyZDY2MzRm/MDEyNA",
    price: 375000,
    address: "23 Lakeshore Lane, Lakeside Haven",
    favorite: false,
    viewCount: 400,
    parking: "Open parking",
    bathroom: "1 bathroom",
    bedroom: "2 bedrooms",
  },
  {
    id: 18,
    title: "Rustic Log Cabin",
    image:
      "https://img.playbook.com/pTmFhvT8XzpUNPNm0XTBXBCjsdAdZoRjmGYc79Lnfzk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IwYTBlNjRj/LWRlZDYtNGEwNC04/MDkwLWZmMDg2NjY1/MTBjNw",
    price: 280000,
    address: "456 Forest Road, Woodland Retreat",
    favorite: false,
    viewCount: 600,
    parking: "Driveway parking",
    bathroom: "2 bathrooms",
    bedroom: "3 bedrooms",
  },
  {
    id: 19,
    title: "City View Apartment",
    image:
      "https://img.playbook.com/nUzojsk9KWxbm00CkowZkKaxD4k-rkavqW8RI8lb--M/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U4NWIzMWQw/LTZkOTctNDI5Yi05/Yzc5LWZkNjljZWEx/ZjUwMg",
    price: 275000,
    address: "789 Skyline Avenue, Metro View Towers",
    favorite: false,
    viewCount: 700,
    parking: "Garage parking",
    bathroom: "2 bathrooms",
    bedroom: "2 bedrooms",
  },
  {
    id: 20,
    title: "Country Farmhouse",
    image:
      "https://img.playbook.com/F3oEGHa0h9_W74iLSc_G6HuuIAbQ4EGz3X1otb80mWI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VmNDcxYjlj/LWMwMzgtNDI0Yi1h/ZWYzLWI3MjFlZTQ5/NjA4YQ",
    price: 380000,
    address: "101 Countryside Road, Farm Life Estates",
    favorite: false,
    viewCount: 550,
    parking: "Open parking",
    bathroom: "2 bathrooms",
    bedroom: "4 bedrooms",
  },
];
export default productData;