const businessTypes = [
    "Coffee Shop", "Book Store", "Art Gallery", "Tech Store", "Grocery Market", "Toy Shop",
    "Flower Boutique", "Clothing Store", "Music Studio", "Bakery", "Spa", "Fitness Center",
    "Pet Store", "Jewelry Store", "Furniture Store", "Cinema", "Restaurant", "Ice Cream Parlor",
    "Library", "Record Store", "Tattoo Studio", "Barber Shop", "Photography Studio", "Book Cafe",
    "Comic Store", "Garden Center", "Beauty Salon", "Antique Shop", "Boutique Hotel", "Farmers Market",
    "Candle Shop", "Ceramics Studio", "Dance Studio", "Art Supply Store", "Stationery Shop", "Fabric Store",
    "Wine Cellar", "Organic Grocery", "Shoe Store", "Mobile Repair", "Game Store", "Music School",
    "Language School", "Cooking School", "Candy Store", "Bicycle Shop", "Watch Store", "Perfume Shop",
    "Optician", "Gift Shop", "Nail Salon", "Fashion Boutique"
];

const themes = [
    "Whimsical Wonderland", "Retro Revival", "Boho Chic", "Underwater Utopia", "Mystical Forest", "Space Odyssey",
    "Steampunk Dreams", "Enchanted Garden", "Tropical Escape", "Urban Jungle", "Rustic Charm", "Futuristic Fantasy",
    "Vintage Vibes", "Summer Breeze", "Fairy Tale", "Desert Mirage", "Winter Wonderland", "Pirate's Cove",
    "Magical Kingdom", "Cyberpunk City", "Medieval Times", "Carnival Craze", "Candy Land", "Forest Retreat",
    "Autumn Harvest", "Sci-Fi Adventure", "Mountain Escape", "Seaside Serenity", "Galaxy Exploration", "Art Nouveau",
    "Pop Art Explosion", "Circus Funhouse", "Haunted Mansion", "Safari Adventure", "Renaissance Fair", "Wild West",
    "Jungle Safari", "Island Getaway", "Gothic Glamour", "Vintage Circus", "Celestial Skies", "Zen Garden",
    "Mystery Manor", "Aquatic Paradise", "Enchanted Forest", "Fantasy Fair", "Moonlit Night", "Sunset Bliss",
    "Fire and Ice", "Cloud 9"
];

const primaryColors = [
    "Baby Blue", "Salmon Pink", "Mint Green", "Lavender", "Ivory", "Peach",
    "Champagne", "Navy Blue", "Teal", "Coral", "Magenta", "Lemon Yellow",
    "Rose Gold", "Emerald Green", "Crimson Red", "Aqua", "Mustard Yellow", "Plum",
    "Olive Green", "Charcoal", "Fuchsia", "Sky Blue", "Burgundy", "Cobalt Blue",
    "Blush Pink", "Forest Green", "Ruby Red", "Sapphire Blue", "Amethyst", "Turquoise",
    "Burnt Orange", "Mauve", "Caramel", "Pearl", "Maroon", "Hazel",
    "Lilac", "Cyan", "Grape", "Copper", "Silver", "Gold",
    "Indigo", "Amber", "Vermilion", "Saffron", "Chocolate", "Pistachio",
    "Lime Green", "Slate Gray"
];

const fonts = [
    "Arial", "Times New Roman", "Courier New", "Comic Sans", "Georgia", "Verdana",
    "Trebuchet MS", "Impact", "Gill Sans", "Futura", "Garamond", "Palatino",
    "Baskerville", "Didot", "Rockwell", "Helvetica", "Lucida Console", "Copperplate",
    "Brush Script", "Franklin Gothic", "Book Antiqua", "Century Gothic", "Merriweather",
    "Montserrat", "Raleway", "Lobster", "Playfair Display", "Bebas Neue", "Open Sans",
    "Roboto", "Lato", "Oswald", "Poppins", "Nunito", "Quicksand",
    "Source Sans Pro", "Comfortaa", "Pacifico", "Exo", "Righteous", "Dancing Script",
    "Kalam", "Satisfy", "Great Vibes", "Caveat", "Inconsolata", "Zilla Slab",
    "Muli", "PT Sans", "Russo One", "Play"
];

const illustrationStyles = [
    "Realistic", "Abstract", "Cartoon", "Flat Design", "Line Art", "Minimalist",
    "Watercolor", "Pixel Art", "Chalk Drawing", "Comic Book", "Silhouette", "Graffiti",
    "Pop Art", "3D Render", "Charcoal", "Ink Wash", "Collage", "Sketch",
    "Vintage Poster", "Neon Glow", "Stencil", "Oil Painting", "Acrylic", "Pastel",
    "Manga", "Art Deco", "Impressionist", "Cubist", "Surrealist", "Doodle",
    "Pencil Sketch", "Woodcut", "Vector Art", "Low Poly", "Digital Painting", "Retro Comic",
    "Line Drawing", "Patterned", "Geometric", "Photorealism", "Airbrush", "Stipple",
    "Continuous Line", "Scribble", "Crayon", "Spray Paint", "Tattoo Style", "Claymation",
    "Street Art", "Mixed Media"
];

const categories = [
    { name: 'businessType', options: businessTypes },
    { name: 'theme', options: themes },
    { name: 'primaryColor', options: primaryColors },
    { name: 'font', options: fonts },
    { name: 'illustrationStyle', options: illustrationStyles }
];

let currentCategoryIndex = 0;

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

function displayOptions() {
    const currentCategory = categories[currentCategoryIndex];
    const options = shuffleArray(currentCategory.options);

    card1.textContent = options[0];
    card2.textContent = options[1];
    card1.style.animation = 'fadeInDown 0.3s forwards';
    card2.style.animation = 'fadeInDown 0.3s forwards';
    card1.style.pointerEvents = 'auto';
    card2.style.pointerEvents = 'auto';
}

function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function handleCardClick(option) {
    card1.style.pointerEvents = 'none';
    card2.style.pointerEvents = 'none';

    const currentCategory = categories[currentCategoryIndex];
    const pickElement = document.getElementById(currentCategory.name);

    pickElement.textContent = option;

    card1.style.animation = 'fadeOutUp 0.3s forwards';
    card2.style.animation = 'fadeOutUp 0.3s forwards';

    setTimeout(() => {
        if (currentCategoryIndex < categories.length - 1) {
            currentCategoryIndex++;
            const nextCategory = categories[currentCategoryIndex];
            const options = shuffleArray(nextCategory.options);

            card1.textContent = options[0];
            card2.textContent = options[1];

            card1.style.animation = 'fadeInDown 0.3s forwards';
            card2.style.animation = 'fadeInDown 0.3s forwards';

            setTimeout(() => {
                card1.style.pointerEvents = 'auto';
                card2.style.pointerEvents = 'auto';
            }, 300);
        } else {
            card1.style.pointerEvents = 'none';
            card2.style.pointerEvents = 'none';

            card1.style.visibility = 'hidden';
            card2.style.visibility = 'hidden';
        }
    }, 300);
}

card1.addEventListener('click', () => handleCardClick(card1.textContent));
card2.addEventListener('click', () => handleCardClick(card2.textContent));

displayOptions();