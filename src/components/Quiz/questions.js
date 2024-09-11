const questions = [

  {
    question: "How long does it take the Earth to travel once around the Sun?",
    options: ["A year", "A day", "12 hours"],
    answer: "A year",
    category: "Explore Our Special Planet 🌍",
    Image:"https://cdn.pixabay.com/photo/2016/12/05/17/51/sun-1884518_1280.jpg"
  },
  {
    question:
      "Venus and Earth have similar size and composition. Yet Venus is much, much hotter. Why?",
    options: [
      "Venus's magnetic field is very strong",
      "Venus's rotation is very fast",
      "Venus's atmosphere is very thick",
    ],
    answer: "Venus's atmosphere is very thick",
    category: "Explore Our Special Planet 🌍",
    Image:"https://cdn.mos.cms.futurecdn.net/vxfUmMMbjTBgJgDgqhMSCm.jpg",
  },
  {
    question: "What protects us from most space rocks?",
    options: ["Atmosphere", "Moon", "Magnetosphere"],
    answer: "Atmosphere",
    category: "Explore Our Special Planet 🌍",
    Image:"https://i.insider.com/562f5662dd0895b64c8b4616?width=800&format=jpeg&auto=webp",
  },
  {
    question:
      "The Earth is the only rocky planet in the Solar System where you can use a traditional compass. Why?",
    options: [
      "There is no North Pole on other planets",
      "Earth has a magnetic field",
      "Compasses are forbidden beyond Earth",
    ],
    answer: "Earth has a magnetic field",
    category: "Explore Our Special Planet 🌍",
    Image:"https://cdn.pixabay.com/photo/2019/08/24/11/05/planet-earth-4427436_1280.jpg",

  },
  {
    question:
      "Which celestial body could potentially host life, like the Earth?",
    options: ["Jupiter", "Mercury", "Saturn's moon Enceladus"],
    answer: "Saturn's moon Enceladus",
    category: "Explore Our Special Planet 🌍",
    Image:"https://cdn.hswstatic.com/gif/exoplanets-1.jpg",

  },

  {
    question: "What is the Sun mostly made of?",
    options: ["Hydrogen", "Helium", "Oxygen"],
    answer: "Hydrogen",
    category: "Discover the Sun's Secrets ☀️",
    Image:"https://science.nasa.gov/wp-content/uploads/2023/07/823_cover-1920_detail.jpg?w=4096&format=jpeg",

  },
  {
    question: "What is the Sun's surface temperature?",
    options: [
      "5,500 degrees Celsius",
      "10,000 degrees Celsius",
      "15,000 degrees Celsius",
      
    ],
    answer: "5,500 degrees Celsius",
    category: "Discover the Sun's Secrets ☀️",
    Image:"https://c02.purpledshub.com/uploads/sites/41/2018/08/fe-iStock_000010805453_Medium-84d3522.jpg?w=1029&webp=1",

  },
  {
    question:"What is the second most abundant element in the Sun after hydrogen?",
    options: ["Helium", "Oxygen", "Carbon"],
    answer: "Helium",
    category: "Discover the Sun's Secrets ☀️",
    Image:"https://science.nasa.gov/wp-content/uploads/2023/07/823_cover-1920_detail.jpg?w=4096&format=jpeg",

  },
  {
    question: "How much of the Solar System's mass does the Sun comprise?",
    options: ["About 75%", "About 50%", "About 99%"],
    answer: "About 99%",
    category: "Discover the Sun's Secrets ☀️",
    Image:"https://science.nasa.gov/wp-content/uploads/2023/07/823_cover-1920_detail.jpg?w=4096&format=jpeg",

  },
  {
    question:"What is the distance between the Sun and Earth called in astronomy?",
    options: ["Solar mile", "Astronomical unit", "Light year"],
    answer: "Astronomical unit",
    category: "Discover the Sun's Secrets ☀️",
    Image:"https://www.worldatlas.com/r/w1200/upload/4c/55/b8/untitled-design-163.jpg",

  },

{
    question:"All the Solar System planets have moons.",
    options: ["True", "False"],
    answer: "False",
    category: "Astronomy Facts 🌌",
    Image:"https://cdn.pixabay.com/photo/2023/05/20/15/03/moon-8006703_1280.jpg",

}, 
{
    question:"There are more stars in the Universe than grains of sand on all of the Earth’s beaches.",
    options: ["True", "False"],
    answer: "True",
    category: "Astronomy Facts 🌌",
    Image:"https://cdn.pixabay.com/photo/2021/01/10/18/01/milky-way-5905903_1280.jpg",

},
{
    question:"Planets, stars, and galaxies comprise only 5% of all the matter in the Universe.",
    options: ["True", "False"],
    answer: "True",
    category: "Astronomy Facts 🌌",
    Image:"https://cdn.pixabay.com/photo/2016/11/29/08/58/astronomy-1868560_1280.jpg",

},
{
    question:"The phases of the Moon are caused by the Earth's shadow.",
    options: ["True", "False"],
    answer: "False",
    category: "Astronomy Facts 🌌",
    Image:"https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2021/11/111721_mt_quasisatellite_feat.jpg?fit=1030%2C580&ssl=1",

},
{
    question:"Mercury, the closest planet to the Sun, is also the hottest planet in the Solar System.",
    options: ["True", "False"],
    answer: "False",
    category: "Astronomy Facts 🌌",
    Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Solar_System_true_color.jpg/1200px-Solar_System_true_color.jpg",

},
{
    question:"What is the hottest planet in the Solar System?",
    options: ["Mercury", "Venus", "Mars"],
    answer: "Venus",
    category: "Solar System Objects 🪐",
    Image:"https://live-production.wcms.abc-cdn.net.au/5e2db08a72d74ee41d594f51252fa1f1?impolicy=wcms_crop_resize&cropH=752&cropW=1337&xPos=0&yPos=69&width=862&height=485",

},
{
    question:"What is the largest moon in the Solar System?",
    options: ["Titan", "Ganymede", "Callisto"],
    answer: "Ganymede",
    category: "Solar System Objects 🪐",
    Image:"https://www.universetoday.com/wp-content/uploads/2015/01/lilalarge-e1437242741964.jpeg",

},
{
    question:"What is the fastest-spinning large body in the Solar System?",
    options:["Apophis","Europa","Haumea"],
    answer:"Haumea",
    category:"Solar System Objects 🪐",
    Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fdedbd0d-a698-4b53-af5d-26c4046fa564/dbrcnsy-ebeff5ce-4619-4cc0-9666-0ceb2a4cb065.png/v1/fill/w_1024,h_696,q_80,strp/haumea_haumea_by_astra_planetshine_dbrcnsy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk2IiwicGF0aCI6IlwvZlwvZmRlZGJkMGQtYTY5OC00YjUzLWFmNWQtMjZjNDA0NmZhNTY0XC9kYnJjbnN5LWViZWZmNWNlLTQ2MTktNGNjMC05NjY2LTBjZWIyYTRjYjA2NS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6-UJixRZG1E8soVMf0QfWPNWt8G8WaDcxOgPm1PMS2Y",

},
{
    question:"Which planet has the sharpest temperature changes?",
    options:["Mercury","Venus","Uranus"],
    answer:"Mercury",
    category:"Solar System Objects 🪐",  
      Image:"https://cdn.pixabay.com/photo/2020/09/02/05/36/mercury-5537392_1280.jpg",

},
{
    question:"Some Solar System planets have never been approached by spacecraft.",
    options:["True","False"],
    answer:"False",
    category:"Space Exploration 🚀",
    Image:"https://i.cbc.ca/1.3663302.1685115793!/fileImage/httpImage/jupiter-juno.jpg",

},
{
    question:"The International Space Station is the most expensive object ever built.",
    options:["True","False"],
    answer:"True",
    category:"Space Exploration 🚀",
    Image:"https://cdn.pixabay.com/photo/2011/12/14/12/23/iss-11114_1280.jpg",

},  
{
    question:"Astronauts on the ISS become weightless because there's no gravity in space.",
    options:["True","False"],
    answer:"False",
    category:"Space Exploration 🚀"  ,
    Image:"https://cdn.pixabay.com/photo/2016/11/22/14/41/astronaut-1849401_1280.jpg",

},
{
    question:"Astronauts grow taller in space.",
    options:["True","False"],
    answer:"True",
    category:"Space Exploration 🚀",
    Image:"https://cdn.pixabay.com/photo/2012/10/10/10/36/astronaut-60582_1280.jpg",

},
{
    question:"Apollo astronauts' footprints on the Moon have been already erased by the wind.",
    options:["True","False"],
    answer:"False",
    category:"Space Exploration 🚀",
    Image:"https://www.snexplores.org/wp-content/uploads/2019/11/1080_moon_trash.png",

},
{
    question:"There's a sudden streak of light across the sky. What did you likely witness?",
    options:["Meteor","Comet","Asteroid"],
    answer:"Meteor",
    category:"Stargazing Skills 🌠",
    Image:"https://cdn.pixabay.com/photo/2023/10/10/11/28/star-trails-8306233_1280.jpg",

},
{
    question:"You observe a pale band of light stretching across the night sky from horizon to horizon. What is it?",
    options:["Milky Way","Andromeda Galaxy","Orion Nebula"],
    answer:"Milky Way",
    category:"Stargazing Skills 🌠",
    Image:"https://cdn.pixabay.com/photo/2020/04/17/07/36/milky-way-5053626_1280.jpg",

},
{
    question:"You notice a rhythmically blinking object moving across the sky. What could this be?",
    options:["Satellite","Airplane","Comet"],
    answer:"Airplane",
    category:"Stargazing Skills 🌠",
    Image:"https://c02.purpledshub.com/uploads/sites/48/2021/02/night-sky-object-in-motion-f451229.jpg?w=1029&webp=1",

},
{
    question:"You're trying to observe a faint object in the night sky. What technique can you use to see it better?",
    options:["Look slightly away from the object","Stare directly at the object","Close one eye"],
    answer:"Look slightly away from the object",
    category:"Stargazing Skills 🌠",
    Image:"https://cdn.pixabay.com/photo/2017/03/27/13/38/canyon-2178786_1280.jpg",

},
{
    question:"You see a bright yellowish dot that doesn’t twinkle. What object is it?",
    options:["Jupiter","Venus","Mars"],
    answer:"Jupiter",
    category:"Stargazing Skills 🌠",
    Image:"https://cdn.pixabay.com/photo/2020/02/22/08/15/space-4869815_1280.jpg",

}

];

export default questions;
