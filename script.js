// Cosmic Playground - Main JavaScript File with AJAX Functionality

// ===== Global Variables =====
const API_BASE = 'data/'; // Simulated API endpoint

// ===== Fallback Data (used when AJAX fails) =====
const FALLBACK_DATA = {
    stories: {
        featured: [
            {
                id: "story2",
                title: "Stardust and the Magic Rocket",
                description: "Stardust finds a magical rocket that takes them to the edge of the universe! Discover what happens when they meet the Star Guardians and learn about the power of dreams. An inspiring tale for young explorers.",
                image: "Star Dust and Magic Rocket.png",
                author: "Mike Chen",
                readingTime: "7 min read",
                category: "Adventure & Fantasy"
            },
            {
                id: "story3",
                title: "The Planet of Colors",
                description: "Discover a planet where everything is made of colors and music! Join the Color Crew as they solve mysteries and bring harmony to their vibrant world. A fun and educational story about colors and creativity.",
                image: "Planet Of Colors.png",
                author: "Emma Williams",
                readingTime: "6 min read",
                category: "Educational"
            },
            {
                id: "story_arts_new_1",
                title: "The Melody Maker",
                description: "In a world without sound, one girl discovers the magic of music. Follow her journey as she brings melody back to her village.",
                image: "The Melody Maker.png",
                author: "Melody Tune",
                readingTime: "5 min read",
                category: "Arts & Learning"
            }
        ],
        all: [
            {
                id: "story2",
                title: "Stardust and the Magic Rocket",
                description: "Stardust finds a magical rocket that takes them to the edge of the universe! Discover what happens when they meet the Star Guardians and learn about the power of dreams. An inspiring tale for young explorers.",
                image: "Star Dust and Magic Rocket.png",
                author: "Mike Chen",
                readingTime: "7 min read",
                category: "Adventure & Fantasy"
            },
            {
                id: "story3",
                title: "The Planet of Colors",
                description: "Discover a planet where everything is made of colors and music! Join the Color Crew as they solve mysteries and bring harmony to their vibrant world. A fun and educational story about colors and creativity.",
                image: "Planet Of Colors.png",
                author: "Emma Williams",
                readingTime: "6 min read",
                category: "Arts & Learning"
            },
            {
                id: "story_nature_2",
                title: "Whispers of the Ocean",
                description: "Dive deep with Maya the Mermaid as she discovers the importance of keeping our oceans clean. A beautiful story about marine life and conservation.",
                image: "Whispers of the Ocean.jpg",
                author: "Ocean Blue",
                readingTime: "6 min read",
                category: "Nature & Animals"
            },
            {
                id: "story_adventure_new_1",
                title: "The Crystal Cave",
                description: "Join Alex and Sam as they discover a hidden cave filled with glowing crystals! A magical journey about bravery and friendship.",
                image: "The Crystal Cave 2.jpg",
                author: "Adventure Seeker",
                readingTime: "6 min read",
                category: "Adventure & Fantasy"
            },
            {
                id: "story_arts_new_1",
                title: "The Melody Maker",
                description: "In a world without sound, one girl discovers the magic of music. Follow her journey as she brings melody back to her village.",
                image: "The Melody Maker.png",
                author: "Melody Tune",
                readingTime: "5 min read",
                category: "Arts & Learning"
            },
            {
                id: "story_arts_1",
                title: "The Magic Paintbrush",
                description: "Everything Li paints comes to life! But what happens when he loses his magic brush? A touching story about creativity and believing in yourself.",
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&q=80",
                author: "Arty Brush",
                readingTime: "5 min read",
                category: "Arts & Learning"
            },
            {
                id: "story5",
                title: "The Star Collector",
                description: "Meet the Star Collector who gathers stars to light up the darkest corners of space! Learn about constellations and the beauty of the night sky in this educational adventure.",
                image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop&q=80",
                author: "Sarah Johnson",
                readingTime: "8 min read",
                category: "Space & Sci-Fi"
            },
            {
                id: "story_nature_1",
                title: "The Jungle Orchestra",
                description: "Deep in the rainforest, the animals are preparing for the biggest concert of the year! Learn about different jungle animals and the sounds they make in this musical adventure.",
                image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=400&h=300&fit=crop&q=80",
                author: "Leo Wild",
                readingTime: "5 min read",
                category: "Nature & Animals"
            }
        ]
    },
    quizzes: {
        quizzes: [
            {
                id: "quiz1",
                title: "Space Knowledge Quiz",
                description: "Test your knowledge about planets, stars, and space!",
                questions: [
                    {
                        question: "What is the closest planet to the Sun?",
                        options: ["Venus", "Mercury", "Earth", "Mars"],
                        correct: 1
                    },
                    {
                        question: "How many moons does Earth have?",
                        options: ["0", "1", "2", "3"],
                        correct: 1
                    },
                    {
                        question: "What is the largest planet in our solar system?",
                        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
                        correct: 1
                    }
                ]
            },
            {
                id: "quiz2",
                title: "Animal Facts Quiz",
                description: "How much do you know about animals?",
                questions: [
                    {
                        question: "What is the fastest land animal?",
                        options: ["Lion", "Cheetah", "Horse", "Deer"],
                        correct: 1
                    },
                    {
                        question: "How many hearts does an octopus have?",
                        options: ["1", "2", "3", "4"],
                        correct: 2
                    },
                    {
                        question: "What do bees make?",
                        options: ["Honey", "Milk", "Butter", "Cheese"],
                        correct: 0
                    }
                ]
            }
        ]
    },
    facts: {
        facts: [
            {
                title: "Amazing Space Fact",
                content: "A day on Venus is longer than its year! Venus rotates so slowly that it takes longer to complete one rotation than to orbit the Sun. This means if you lived on Venus, your birthday would come before your day was over!"
            },
            {
                title: "Cool Animal Fact",
                content: "Dolphins have names for each other! They use unique whistles to identify themselves and call each other. Scientists have discovered that dolphins remember each other's 'names' for over 20 years!"
            },
            {
                title: "Fun Science Fact",
                content: "Honey never spoils! Archaeologists have found 3000-year-old honey in Egyptian tombs that was still edible. This is because honey has natural preservatives that prevent bacteria from growing."
            },
            {
                title: "Amazing Nature Fact",
                content: "Trees can communicate with each other! They share nutrients and information through underground fungal networks called 'mycorrhizal networks'. When one tree is sick, others send it food!"
            },
            {
                title: "Fun Water Fact",
                content: "Hot water freezes faster than cold water! This phenomenon is known as the Mpemba effect."
            },
            {
                title: "Space Sound Fact",
                content: "Space is completely silent. Because there is no air in space, sound waves cannot travel."
            }
        ]
    },
    history: {
        facts: [
            {
                title: "The Great Pyramids",
                content: "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. It was built as a tomb for the Pharaoh Khufu.",
                year: "2560 BC"
            },
            {
                title: "First Moon Landing",
                content: "On July 20, 1969, Neil Armstrong became the first human to step onto the surface of the Moon. His first words were 'That's one small step for man, one giant leap for mankind.'",
                year: "1969"
            },
            {
                title: "The Dinosaurs",
                content: "Dinosaurs ruled the Earth for about 165 million years! They went extinct about 65 million years ago, likely due to a giant asteroid impact.",
                year: "65 Million Years Ago"
            },
            {
                title: "The Great Wall of China",
                content: "The Great Wall of China is the longest wall in the world, stretching over 13,000 miles! It was built over many centuries to protect China from invaders.",
                year: "7th Century BC - 1644 AD"
            },
            {
                title: "Wright Brothers' First Flight",
                content: "Orville and Wilbur Wright made the first controlled, sustained flight of a powered, heavier-than-air aircraft. Their flight lasted only 12 seconds but changed the world forever!",
                year: "1903"
            },
            {
                title: "Invention of the Wheel",
                content: "The wheel was invented in Mesopotamia (modern-day Iraq) and is considered one of the most important inventions in human history. It revolutionized transport and pottery.",
                year: "3500 BC"
            }
        ]
    },
    animals: {
        animals: [
            {
                name: "Dolphin",
                category: "Animals",
                fact: "Dolphins are super smart! They can recognize themselves in mirrors and have their own names. They use echolocation to 'see' with sound, sending out clicks that bounce off objects to help them navigate and find food.",
                image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800&q=80",
                habitat: "Oceans worldwide",
                diet: "Fish and squid",
                funFact: "Dolphins sleep with one eye open!"
            },
            {
                name: "Elephant",
                category: "Animals",
                fact: "Elephants never forget! They have amazing memories and can remember friends for many years. They are the largest land animals.",
                image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80",
                habitat: "Africa and Asia",
                diet: "Plants, fruits, and bark",
                funFact: "Elephants can smell water from 3 miles away!"
            },
            {
                name: "Tiger",
                category: "Animals",
                fact: "Tigers are the largest cats in the world! Each tiger has unique stripes, just like human fingerprints. They love swimming!",
                image: "data/images/nature/Tiger2.jfif",
                habitat: "Asia",
                diet: "Meat",
                funFact: "A tiger's roar can be heard from 2 miles away!"
            },
            {
                name: "Giraffe",
                category: "Animals",
                fact: "Giraffes have super long necks to reach high leaves. They only need to sleep for about 30 minutes a day!",
                image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&q=80",
                habitat: "African savannas",
                diet: "Leaves",
                funFact: "A giraffe's tongue is blue-black!"
            },
            {
                name: "Penguin",
                category: "Birds",
                fact: "Penguins can't fly, but they are amazing swimmers! They can dive deep into the ocean and hold their breath for up to 20 minutes.",
                image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=800&q=80",
                habitat: "Antarctica",
                diet: "Fish and krill",
                funFact: "Penguins can jump 6 feet out of the water!"
            },
            {
                name: "Parrot",
                category: "Birds",
                fact: "Parrots are colorful birds that can mimic human speech. They lived in tropical rainforests.",
                image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800&q=80",
                habitat: "Rainforests",
                diet: "Fruits and seeds",
                funFact: "Some parrots live for 80 years!"
            },
            {
                name: "Butterfly",
                category: "Insects",
                fact: "Butterflies taste with their feet! They migrate thousands of miles and help pollinate flowers.",
                image: "https://images.unsplash.com/photo-1475724017904-b712052c192a?w=800&q=80",
                habitat: "Gardens",
                diet: "Nectar",
                funFact: "Butterflies have four wings!"
            },
            {
                name: "Ladybug",
                category: "Insects",
                fact: "Ladybugs are small beetles that are often red with black spots. They help farmers by eating microscopic pests.",
                image: "data/images/nature/LadyBug.jfif",
                habitat: "Gardens and fields",
                diet: "Aphids",
                funFact: "Ladybugs hibernate in winter!"
            },
            {
                name: "Turtle",
                category: "Reptiles",
                fact: "Turtles have a hard shell that protects them like a shield. Sea turtles spend most of their lives in the ocean.",
                image: "data/images/nature/Turtule.webp",
                habitat: "Oceans",
                diet: "Jellyfish",
                funFact: "Turtles can live for 100 years!"
            },
            {
                name: "Chameleon",
                category: "Reptiles",
                fact: "Chameleons can change color to blend in or show their mood! Their eyes move independently.",
                image: "data/images/nature/Chameleon.avif",
                habitat: "Rainforests",
                diet: "Insects",
                funFact: "Their tongue is longer than their body!"
            }
        ]
    },
    tutorials: {
        tutorials: [
            {
                id: "tutorial1",
                title: "Make Your Own Rocket",
                description: "Learn how to create a colorful paper rocket that can fly! This fun craft teaches you about rockets and space. Perfect for ages 6-10.",
                image: "data/images/arts/craft1.svg",
                difficulty: "Easy",
                time: "30 minutes",
                materials: "Paper, scissors, glue, markers",
                ageRange: "6-10 years"
            },
            {
                id: "tutorial2",
                title: "Star Mobile Craft",
                description: "Create a beautiful star mobile to hang in your room! Learn about constellations while making this craft. Great for decoration!",
                image: "data/images/arts/craft2.svg",
                difficulty: "Medium",
                time: "45 minutes",
                materials: "Cardboard, string, paint, glitter",
                ageRange: "7-12 years"
            }
        ]
    },
    puzzles: {
        puzzles: [
            {
                id: "puzzle1",
                title: "Space Word Search",
                description: "Find all the space-related words hidden in the grid!"
            },
            {
                id: "puzzle2",
                title: "Planet Matching Game",
                description: "Match planets with their descriptions!"
            },
            {
                id: "puzzle3",
                title: "Cosmic Crossword",
                description: "Solve the crossword puzzle with space-themed clues!"
            },
            {
                id: "puzzle4",
                title: "Star Pattern Puzzle",
                description: "Complete the star patterns by connecting the dots!"
            },
            {
                id: "puzzle5",
                title: "Rocket Maze",
                description: "Help the rocket navigate through the asteroid field!"
            },
            {
                id: "puzzle6",
                title: "Animal Memory Game",
                description: "Match pairs of animals in this fun memory game!"
            },
            {
                id: "game1",
                title: "Space Jump",
                description: "Jump from planet to planet and collect stars!"
            },
            {
                id: "game2",
                title: "Math Blaster",
                description: "Solve math problems to fuel your rocket ship!"
            },
            {
                id: "game3",
                title: "Color Matcher",
                description: "Match the falling colors to the buckets below!"
            },
            {
                id: "game4",
                title: "Shape Sorter",
                description: "Fit the shapes into the correct holes before time runs out!"
            }
        ]
    },
    videos: {
        videos: [
            {
                id: "video1",
                title: "Solar System 101",
                description: "Explore our amazing solar system with National Geographic!",
                embedUrl: "https://www.youtube.com/embed/libKVRa01L8"
            },
            {
                id: "video2",
                title: "The Animal Kingdom",
                description: "Learn about mammals, birds, fish, and more!",
                embedUrl: "https://www.youtube.com/embed/mRidGna-V4E"
            },
            {
                id: "video3",
                title: "Learn Colors with Balloons",
                description: "A fun animation to learn all the colors of the rainbow!",
                embedUrl: "https://www.youtube.com/embed/pUPM3DtK9so"
            },
            {
                id: "video4",
                title: "Lifecycle of a Butterfly",
                description: "Watch how a caterpillar turns into a beautiful butterfly.",
                embedUrl: "https://www.youtube.com/embed/O1S8WzwLPlM"
            },
            {
                id: "video5",
                title: "Seven Continents Song",
                description: "Sing along and learn about the seven continents of the world!",
                embedUrl: "https://www.youtube.com/embed/K6DSMZ8b3LE"
            },
            {
                id: "video6",
                title: "Deep Ocean Creatures",
                description: "Dive deep and discover the strange creatures of the deep sea.",
                embedUrl: "https://www.youtube.com/embed/U9zZtiV31Z0",
                image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop"
            }
        ]
    },
    submissions: {
        submissions: [
            {
                id: "sub1",
                author: "Emma",
                age: 8,
                content: "I drew a picture of a rocket flying to Mars! It was so fun to imagine what it would be like to visit another planet.",
                image: "data/images/By Emma.avif"
            },
            {
                id: "sub2",
                author: "Lucas",
                age: 10,
                content: "I wrote a story about a friendly alien who came to Earth to learn about our planet. His name was Zorp! When Zorp first arrived on Earth, he was amazed by all the colors and sounds. He visited a school where children were learning about friendship and kindness. Zorp watched as kids helped each other with their homework and shared their snacks. He learned that Earth is special because people care for each other. By the end of his visit, Zorp had made many new friends and promised to come back to Earth again. He realized that friendship is the most important thing in the universe!",
                image: null
            },
            {
                id: "sub3",
                author: "Sophia",
                age: 7,
                content: "I made a star mobile for my room! It has all the colors of the rainbow and sparkles in the light.",
                image: "data/images/By Sophia.jpg"
            },
            {
                id: "sub4",
                author: "Noah",
                age: 9,
                content: "I learned about dolphins and wrote a poem about them. They're my favorite animal now!\n\nSilver laughter in the sea,\nDolphins dance where waves run free.\nMoonlight hums their secret song,\nJoy swims softly all day long.\n\nThrough the ocean blue and deep,\nThey play and leap while others sleep.\nFriends forever, side by side,\nIn the water, they will glide.",
                image: null
            }
        ]
    },
    team: {
        team: [
            {
                name: "Sarah Johnson",
                role: "Editor-in-Chief",
                bio: "Sarah loves creating magical stories for kids. She has been writing children's stories for over 10 years! With a degree in Children's Literature, Sarah ensures every story sparks imagination and teaches valuable lessons.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
                email: "sarah@kidzmagazine.com",
                funFact: "Sarah's favorite planet is Saturn because of its beautiful rings!"
            },
            {
                name: "Mike Chen",
                role: "Art Director",
                bio: "Mike brings stories to life with beautiful illustrations. He loves drawing space adventures and friendly aliens! With 15 years of experience in digital art and animation.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                email: "mike@kidzmagazine.com",
                funFact: "Mike can draw a rocket in under 30 seconds!"
            }
        ]
    },
    vision: {
        vision: "To inspire every child to reach for the stars, explore the cosmos of their imagination, and discover the magic that exists in learning, creativity, and wonder.",
        mission: "Our mission is to create engaging, educational, and entertaining content that combines the wonder of space exploration with fun learning experiences."
    },
    archive: {
        issues: [
            {
                id: "issue1",
                title: "Cosmic Playground - Issue 1: Welcome to Space!",
                date: "January 2024",
                description: "Our very first issue! Featuring stories about friendly aliens, space adventures, and amazing facts about the universe."
            },
            {
                id: "issue2",
                title: "Cosmic Playground - Issue 2: Animal Adventures",
                date: "February 2024",
                description: "Explore the animal kingdom! Learn about dolphins, elephants, and other amazing creatures from around the world."
            }
        ]
    },
    jokes: {
        jokes: [
            {
                question: "Why did the scarecrow win an award?",
                answer: "Because he was outstanding in his field!"
            },
            {
                question: "What do you call a bear with no teeth?",
                answer: "A gummy bear!"
            },
            {
                question: "Why don't scientists trust atoms?",
                answer: "Because they make up everything!"
            },
            {
                question: "What did zero say to eight?",
                answer: "Nice belt!"
            },
            {
                question: "Why did the math book look sad?",
                answer: "Because it had too many problems."
            }
        ]
    }
};

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', function () {
    initializePage();
    createCosmicElements();
    setupNavigation();
    setupParallax();
});

// ===== Initialize Page Based on Current Page =====
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Default theme
    setTheme('default');

    switch (currentPage) {
        case 'index.html':
        case '':
            loadFeaturedStories();
            setTheme('default');
            break;
        case 'home_magazine.html':
            loadFeaturedStories();
            loadDailyFunFact();
            loadJokeOfTheDay();
            setTheme('science');
            break;
        case 'stories.html':
            loadStories();
            setTheme('default');
            break;
        case 'learning.html': // Now "Science Lab"
            loadQuizzes();
            loadFunFacts();
            setTheme('science');
            break;
        case 'arts.html': // Now "Arts & Studio"
            loadTutorials();
            setTheme('arts');
            break;
        case 'games.html':
            loadPuzzles();
            setTheme('default');
            break;
        case 'videos.html':
            loadVideos();
            setTheme('default');
            break;
        case 'nature.html': // Now "Nature & Wildlife"
            loadAnimalFacts();
            setTheme('nature');
            break;
        case 'history.html': // New Page
            loadHistoryFacts();
            setTheme('history');
            break;
        case 'kids-corner.html':
            loadSubmissions();
            setTheme('arts');
            break;
        case 'about.html':
            loadTeamBios();
            break;
        case 'vision.html':
            loadVisionContent();
            break;
        case 'archive.html':
            loadArchive();
            setTheme('history');
            break;
        case 'subscribe.html':
            setTheme('default');
            break;
        case 'contact.html':
            setTheme('default');
            break;
    }

    setupForms();
}

// ===== Theme Switcher Logic =====
function setTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    updateCosmicElements(themeName);
}

// Update floating elements based on theme
function updateCosmicElements(themeName) {
    // Clear existing elements
    const container = document.body;
    const existingElements = document.querySelectorAll('.star, .planet, .floating-element');
    existingElements.forEach(el => el.remove());

    if (themeName === 'nature') {
        createNatureElements();
    } else if (themeName === 'science') {
        createScienceElements();
    } else if (themeName === 'history') {
        createHistoryElements();
    } else if (themeName === 'arts') {
        createArtElements();
    } else {
        createCosmicElements(); // Default fallback
    }
}

function createNatureElements() {
    const container = document.body;
    const emojis = ['🍃', '🦋', '🌸', '🦜'];
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (Math.random() * 20 + 10) + 'px';
        el.style.animation = `float ${Math.random() * 5 + 5}s infinite ease-in-out`;
        el.style.opacity = 0.6;
        container.appendChild(el);
    }
}

function createScienceElements() {
    const container = document.body;
    const emojis = ['⚛️', '🧪', '🧬', '⚡'];
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (Math.random() * 20 + 10) + 'px';
        el.style.animation = `float ${Math.random() * 5 + 5}s infinite linear`; // Different animation feel
        el.style.opacity = 0.5;
        container.appendChild(el);
    }
}

function createHistoryElements() {
    const container = document.body;
    const emojis = ['⚙️', '⏳', '📜', '🏛️'];
    for (let i = 0; i < 15; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (Math.random() * 25 + 15) + 'px';
        el.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`; // Slower
        el.style.opacity = 0.4;
        container.appendChild(el);
    }
}

function createArtElements() {
    const container = document.body;
    const emojis = ['🎨', '🖌️', '🖍️', '✨'];
    for (let i = 0; i < 25; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (Math.random() * 20 + 10) + 'px';
        el.style.animation = `float ${Math.random() * 4 + 3}s infinite ease-in-out`; // Faster
        el.style.opacity = 0.7;
        container.appendChild(el);
    }
}

// ===== Create Floating Cosmic Elements =====
function createCosmicElements() {
    const container = document.body;

    // Create stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        container.appendChild(star);
    }

    // Create planets
    for (let i = 0; i < 5; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.width = (Math.random() * 100 + 50) + 'px';
        planet.style.height = planet.style.width;
        planet.style.left = Math.random() * 90 + '%';
        planet.style.top = Math.random() * 90 + '%';
        planet.style.background = `radial-gradient(circle, ${i % 2 === 0 ? '#ec4899' : '#06b6d4'}, transparent)`;
        planet.style.opacity = 0.3;
        planet.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(planet);
    }
}

// ===== AJAX Helper Function with Fallback =====
function fetchData(url, callback, fallbackKey = null) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    callback(data);
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                    // Use fallback data if available
                    if (fallbackKey && FALLBACK_DATA[fallbackKey]) {
                        console.log('Using fallback data for', fallbackKey);
                        callback(FALLBACK_DATA[fallbackKey]);
                    } else {
                        callback(null);
                    }
                }
            } else {
                console.error('AJAX Error:', xhr.status);
                // Use fallback data if available
                if (fallbackKey && FALLBACK_DATA[fallbackKey]) {
                    console.log('Using fallback data for', fallbackKey);
                    callback(FALLBACK_DATA[fallbackKey]);
                } else {
                    callback(null);
                }
            }
        }
    };
    xhr.onerror = function () {
        console.error('Network error loading', url);
        // Use fallback data if available
        if (fallbackKey && FALLBACK_DATA[fallbackKey]) {
            console.log('Using fallback data for', fallbackKey);
            callback(FALLBACK_DATA[fallbackKey]);
        } else {
            callback(null);
        }
    };
    xhr.send();
}

// ===== Load Featured Stories (Home Page) =====
function loadFeaturedStories() {
    const container = document.getElementById('featured-stories');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/stories.json', function (data) {
        if (!data || !data.featured) {
            // Use fallback data
            data = FALLBACK_DATA.stories;
        }

        if (data && data.featured) {
            container.innerHTML = '';
            data.featured.forEach((story, index) => {
                const card = createStoryCard(story);
                card.style.animationDelay = (index * 0.1) + 's';
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading stories...</p>';
        }
    }, 'stories');
}

// ===== Load All Stories =====
function loadStories() {
    const container = document.getElementById('stories-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/stories.json', function (data) {
        if (!data || !data.all) {
            // Use fallback data
            data = FALLBACK_DATA.stories;
        }

        if (data && data.all) {
            container.innerHTML = '';

            // Render stories in fixed order
            data.all.forEach((story, index) => {
                const card = createStoryCard(story);
                card.style.animationDelay = (index * 0.1) + 's';
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading stories...</p>';
        }
    }, 'stories');
}

// ===== Get Image URL with Fallback =====
function getImageUrl(url, defaultText, width = 400, height = 300) {
    if (!url || url === 'null' || url.includes('placeholder')) {
        // Use SVG data URI as fallback
        const colors = ['6b46c1', 'ec4899', '06b6d4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#${color}"/>
            <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${defaultText}</text>
        </svg>`;
        return 'data:image/svg+xml;base64,' + btoa(svg);
    }
    return url;
}

// ===== Create Story Card Component =====
function createStoryCard(story) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    // Determine tag class based on category
    let tagClass = 'tag-science'; // Default purple for Space & Sci-Fi
    const cat = story.category ? story.category.toLowerCase() : '';

    if (cat.includes('nature') || cat.includes('animals')) tagClass = 'tag-nature'; // Green
    else if (cat.includes('history') || cat.includes('time')) tagClass = 'tag-history'; // Amber
    else if (cat.includes('arts') || cat.includes('learning')) tagClass = 'tag-arts'; // Cyan
    else if (cat.includes('adventure') && cat.includes('fantasy')) tagClass = 'tag-fantasy'; // Pink (we need to ensure this class exists in CSS or reuse existing ones)

    // Note: If no match, it falls back to tag-science which is fine for Space/Sci-Fi. 
    // Ideally we should add specific styles for these. For now reusing existing logic but refining it.
    // Let's manually set style if class doesn't exist to be safe, or stick to the known classes.
    // Known classes from previous context: tag-science, tag-nature, tag-history, tag-arts.
    // We can map:
    // Space & Sci-Fi -> tag-science
    // Adventure & Fantasy -> reuse tag-arts (pinkish) or tag-history? Let's use inline style for custom colors if needed or map carefully.
    // Actually, let's map "Adventure & Fantasy" to a specific color style since we might not have a class.

    let badgeStyle = '';
    if (story.category === 'Adventure & Fantasy') {
        badgeStyle = 'background-color: #ec4899; color: white;'; // Pink
        tagClass = ''; // Remove default class to use inline style
    } else if (story.category === 'History & Time Travel') {
        badgeStyle = 'background-color: #f59e0b; color: white;'; // Amber
        tagClass = '';
    } else if (story.category === 'Arts & Learning') {
        badgeStyle = 'background-color: #06b6d4; color: white;'; // Cyan
        tagClass = '';
    } else if (story.category === 'Nature & Animals') {
        badgeStyle = 'background-color: #10b981; color: white;'; // Green
        tagClass = '';
    } else {
        // Space & Sci-Fi
        badgeStyle = 'background-color: #6b46c1; color: white;'; // Purple
        tagClass = '';
    }

    col.innerHTML = `
        <div class="glass-card h-100 d-flex flex-column article-card">
            <div class="article-img" style="background-image: url('${story.image}'); height: 200px; background-size: contain; background-repeat: no-repeat; background-position: center; border-radius: 15px;"></div>
            <div class="card-body p-3 d-flex flex-column flex-grow-1">
                <span class="tag align-self-start mb-2" style="${badgeStyle} padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">${story.category || 'Story'}</span>
                <h3 class="card-title mb-2" style="font-size: 1.25rem;">${story.title}</h3>
                <p class="card-text small text-muted mb-3 flex-grow-1">${story.description}</p>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <small class="text-white-50">By ${story.author}</small>
                    <small class="text-white-50">⏱️ ${story.readingTime}</small>
                </div>
                <button class="btn btn-sm btn-outline-light mt-3 w-100" onclick="readStory('${story.id}')">Read Story</button>
            </div>
        </div>
    `;
    return col;
}

// ===== Load Quizzes =====
function loadQuizzes() {
    const container = document.getElementById('quizzes-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/quizzes.json', function (data) {
        if (!data || !data.quizzes) {
            // Use fallback data
            data = FALLBACK_DATA.quizzes;
        }

        if (data && data.quizzes) {
            container.innerHTML = '';
            data.quizzes.forEach((quiz, index) => {
                const quizCard = createQuizCard(quiz);
                quizCard.style.animationDelay = (index * 0.1) + 's';
                container.appendChild(quizCard);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading quizzes...</p>';
        }
    }, 'quizzes');
}

function createQuizCard(quiz) {
    const card = document.createElement('div');
    card.className = 'card glass-card fade-in';
    card.innerHTML = `
        <h3 class="card-title">${quiz.title}</h3>
        <p>${quiz.description}</p>
        <button class="btn-cosmic" style="margin-top: auto; display: block; margin-left: auto; margin-right: auto;" onclick="startQuiz('${quiz.id}')">Start Quiz</button>
    `;
    return card;
}

// ===== Start Quiz =====
function startQuiz(quizId) {
    fetchData('data/quizzes.json', function (data) {
        if (!data || !data.quizzes) return;

        const quiz = data.quizzes.find(q => q.id === quizId);
        if (!quiz) return;

        const modal = document.createElement('div');
        modal.className = 'modal fade show';
        modal.style.display = 'block';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0, 0, 0, 0.8)';
        modal.style.zIndex = '9999';
        modal.style.overflow = 'auto';

        let currentQuestion = 0;
        let score = 0;

        function renderQuestion() {
            if (currentQuestion >= quiz.questions.length) {
                showResults();
                return;
            }

            const question = quiz.questions[currentQuestion];
            modal.innerHTML = `
                <div class="quiz-container glass" style="margin: 2rem auto; max-width: 800px;">
                    <h2>${quiz.title}</h2>
                    <div class="quiz-question">
                        <h3>Question ${currentQuestion + 1} of ${quiz.questions.length}</h3>
                        <p>${question.question}</p>
                        <div class="quiz-options">
                            ${question.options.map((option, idx) => `
                                <div class="quiz-option" onclick="selectOption(${idx})">
                                    ${option}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <button class="btn-cosmic mt-2" id="next-btn" onclick="nextQuestion()" disabled>Next Question</button>
                </div>
            `;

            window.selectOption = function (idx) {
                document.querySelectorAll('.quiz-option').forEach((opt, i) => {
                    opt.classList.remove('selected');
                    if (i === idx) opt.classList.add('selected');
                });
                document.getElementById('next-btn').disabled = false;
                window.selectedAnswer = idx;
            };

            window.nextQuestion = function () {
                if (window.selectedAnswer === question.correct) {
                    score++;
                }
                currentQuestion++;
                renderQuestion();
            };
        }

        function showResults() {
            modal.innerHTML = `
                <div class="quiz-container glass" style="margin: 2rem auto; max-width: 800px;">
                    <h2>Quiz Complete!</h2>
                    <p>You scored ${score} out of ${quiz.questions.length}</p>
                    <button class="btn-cosmic mt-2" onclick="this.closest('.modal').remove()">Close</button>
                </div>
            `;
        }

        renderQuestion();
        document.body.appendChild(modal);
    });
}

// ===== Load Fun Facts =====
function loadFunFacts() {
    const container = document.getElementById('fun-facts-container');
    if (!container) return;

    fetchData('data/facts.json', function (data) {
        if (!data || !data.facts) {
            // Use fallback data
            data = FALLBACK_DATA.facts;
        }

        if (data && data.facts) {
            container.innerHTML = '';
            data.facts.forEach((fact, index) => {
                const factCard = document.createElement('div');
                factCard.className = 'card glass-card fade-in';
                factCard.style.animationDelay = (index * 0.1) + 's';
                factCard.innerHTML = `
                    <h4 class="card-title">${fact.title}</h4>
                    <p>${fact.content}</p>
                `;
                container.appendChild(factCard);
            });
        }
    }, 'facts');
}

// ===== Load Joke of the Day =====
function loadJokeOfTheDay() {
    const container = document.getElementById('joke-container');
    if (!container) return;

    fetchData('data/jokes.json', function (data) {
        if (!data || !data.jokes) {
            // Use fallback data
            data = FALLBACK_DATA.jokes;
        }

        if (data && data.jokes) {
            const randomJoke = data.jokes[Math.floor(Math.random() * data.jokes.length)];
            container.innerHTML = `
                <div class="glass-card p-4 text-center h-100">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🤣</div>
                    <h3 class="mb-3">Joke of the Day</h3>
                    <p class="lead mb-3" style="font-weight: bold;">${randomJoke.question}</p>
                    <button class="btn btn-outline-light btn-sm" onclick="this.nextElementSibling.style.display='block'; this.style.display='none';">Show Answer</button>
                    <p class="mt-3 fade-in" style="display: none; font-size: 1.2rem; color: var(--accent-2);">${randomJoke.answer}</p>
                </div>
            `;
        }
    }, 'jokes');
}

// ===== Load Daily Fun Fact (Single) =====
function loadDailyFunFact() {
    const container = document.getElementById('fun-facts-container');
    if (!container) return;

    fetchData('data/facts.json', function (data) {
        if (!data || !data.facts) {
            data = FALLBACK_DATA.facts;
        }

        if (data && data.facts) {
            const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];
            container.innerHTML = `
                <h4 class="card-title text-center mb-3">${randomFact.title}</h4>
                <p class="text-center" style="font-size: 1.1rem;">${randomFact.content}</p>
            `;
        }
    }, 'facts');
}

// ===== Load Tutorials =====
function loadTutorials() {
    const container = document.getElementById('tutorials-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/tutorials.json', function (data) {
        if (!data || !data.tutorials) {
            // Use fallback data
            data = FALLBACK_DATA.tutorials;
        }

        if (data && data.tutorials) {
            container.innerHTML = '';
            data.tutorials.forEach((tutorial, index) => {
                const card = document.createElement('div');
                card.className = 'card glass-card fade-in';
                card.style.animationDelay = (index * 0.1) + 's';
                const difficulty = tutorial.difficulty ? `<span style="background: ${tutorial.difficulty === 'Easy' ? 'rgba(6, 182, 212, 0.3)' : tutorial.difficulty === 'Medium' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(107, 70, 193, 0.3)'}; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.85rem; margin-right: 0.5rem;">${tutorial.difficulty}</span>` : '';
                const time = tutorial.time ? `<span style="color: var(--turquoise); font-size: 0.9rem;">⏱️ ${tutorial.time}</span>` : '';
                const ageRange = tutorial.ageRange ? `<span style="color: var(--neon-pink); font-size: 0.9rem;">👶 Ages ${tutorial.ageRange}</span>` : '';
                const materials = tutorial.materials ? `<div style="margin-top: 1rem; padding: 0.8rem; background: rgba(6, 182, 212, 0.1); border-radius: 10px;"><strong>📦 Materials:</strong> ${tutorial.materials}</div>` : '';
                card.innerHTML = `
                    <img src="${tutorial.image || 'https://via.placeholder.com/400x300?text=Craft+Tutorial'}" alt="${tutorial.title}">
                    <h3 class="card-title">${tutorial.title}</h3>
                    <p>${tutorial.description}</p>
                    <div style="margin-top: auto; text-align: center;">
                        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                            ${difficulty}
                            ${time}
                            ${ageRange}
                        </div>
                        ${materials}
                        <button class="btn-cosmic" style="${materials ? 'margin-top: 1rem;' : ''}" onclick="viewTutorial('${tutorial.id}')">View Tutorial</button>
                    </div>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading tutorials...</p>';
        }
    }, 'tutorials');
}

// ===== Load Puzzles =====
function loadPuzzles() {
    const container = document.getElementById('puzzles-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/puzzles.json', function (data) {
        if (!data || !data.puzzles) {
            // Use fallback data
            data = FALLBACK_DATA.puzzles;
        }

        if (data && data.puzzles) {
            container.innerHTML = '';
            data.puzzles.forEach((puzzle, index) => {
                const card = document.createElement('div');
                card.className = 'card glass-card fade-in';
                card.style.animationDelay = (index * 0.1) + 's';
                card.innerHTML = `
                    <h3 class="card-title">${puzzle.title}</h3>
                    <p>${puzzle.description}</p>
                    <button class="btn-cosmic" style="margin-top: auto; display: block; margin-left: auto; margin-right: auto;" onclick="playPuzzle('${puzzle.id}')">Play Puzzle</button>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading puzzles...</p>';
        }
    }, 'puzzles');
}

// ===== Load Videos =====
function loadVideos() {
    const container = document.getElementById('videos-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/videos.json', function (data) {
        if (!data || !data.videos) {
            // Use fallback data
            data = FALLBACK_DATA.videos;
        }

        if (data && data.videos) {
            container.innerHTML = '';
            data.videos.forEach((video, index) => {
                const card = document.createElement('div');
                card.className = 'video-card fade-in';
                card.style.animationDelay = (index * 0.1) + 's';
                // Extract video ID from embedUrl
                const videoIdMatch = video.embedUrl.match(/\/embed\/([^/?]+)/);
                const videoId = videoIdMatch ? videoIdMatch[1] : '';

                // Use custom image if available, otherwise use YouTube thumbnail
                let thumbnailUrl = video.image;
                if (!thumbnailUrl) {
                    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                }

                const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

                card.innerHTML = `
                    <div class="video-wrapper">
                        <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%; position: relative; text-decoration: none;">
                            <img src="${thumbnailUrl}" alt="${video.title}" style="width: 100%; height: 100%; object-fit: cover;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: rgba(236, 72, 153, 0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(236, 72, 153, 0.6);">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div class="video-info">
                        <h4>${video.title}</h4>
                        <p>${video.description}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading videos...</p>';
        }
    }, 'videos');
}

// ===== Load Animal Facts =====
function loadAnimalFacts() {
    const container = document.getElementById('animals-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/animals.json', function (data) {
        if (!data || !data.animals) {
            // Use fallback data
            data = FALLBACK_DATA.animals;
        }

        if (data && data.animals) {
            container.innerHTML = '';

            // Group animals by category
            const categories = {};
            data.animals.forEach(animal => {
                const cat = animal.category || 'Animals';
                if (!categories[cat]) {
                    categories[cat] = [];
                }
                categories[cat].push(animal);
            });

            // Specific order: Animals, Birds, Reptiles, then others (Insects, etc.)
            const order = ['Animals', 'Birds', 'Reptiles', 'Insects'];
            const sortedKeys = Object.keys(categories).sort((a, b) => {
                const indexA = order.indexOf(a);
                const indexB = order.indexOf(b);
                if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                if (indexA !== -1) return -1;
                if (indexB !== -1) return 1;
                return a.localeCompare(b);
            });

            sortedKeys.forEach(catName => {
                // Create section header
                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'section-header mt-5 mb-4';
                sectionHeader.innerHTML = `<h3 style="color: var(--turquoise); border-bottom: 2px solid var(--accent-2); padding-bottom: 0.5rem; display: inline-block;">${catName}</h3>`;
                container.appendChild(sectionHeader);

                // Create grid for this category
                const grid = document.createElement('div');
                grid.className = 'content-grid';
                container.appendChild(grid);

                categories[catName].forEach((animal, index) => {
                    const card = document.createElement('div');
                    card.className = 'card glass-card fade-in';
                    card.style.animationDelay = (index * 0.1) + 's';
                    const habitat = animal.habitat ? `<p style="margin-top: 0.5rem;"><strong>🏠 Habitat:</strong> ${animal.habitat}</p>` : '';
                    const diet = animal.diet ? `<p><strong>🍽️ Diet:</strong> ${animal.diet}</p>` : '';
                    const funFact = animal.funFact ? `<div style="background: rgba(236, 72, 153, 0.2); padding: 1rem; border-radius: 10px; margin-top: 1rem; border-left: 3px solid var(--neon-pink);"><strong>🌟 Fun Fact:</strong> ${animal.funFact}</div>` : '';
                    const imgUrl = getImageUrl(animal.image, animal.name || 'Animal');
                    card.innerHTML = `
                        <img src="${imgUrl}" alt="${animal.name}" style="width: 100%; height: 250px; object-fit: cover;" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDZiNmQ0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkFuaW1hbDwvdGV4dD48L3N2Zz4=';">
                        <h3 class="card-title">${animal.name}</h3>
                        <p>${animal.fact}</p>
                        ${habitat}
                        ${diet}
                        <div style="margin-top: auto;">
                            ${funFact}
                        </div>
                    `;
                    grid.appendChild(card);
                });
            });

        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading animal facts...</p>';
        }
    }, 'animals');
}

// ===== Load Submissions =====
function loadSubmissions() {
    const container = document.getElementById('submissions-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/submissions.json', function (data) {
        if (!data || !data.submissions) {
            // Use fallback data
            data = FALLBACK_DATA.submissions;
        }

        if (data && data.submissions) {
            container.innerHTML = '';
            // Limit to first 4 submissions for 2x2 grid
            const submissionsToShow = data.submissions.slice(0, 4);
            submissionsToShow.forEach((submission, index) => {
                const card = document.createElement('div');
                card.className = 'card glass-card fade-in submission-card';
                card.style.animationDelay = (index * 0.1) + 's';
                
                // Format age with blue outlines for each digit
                const ageStr = submission.age.toString();
                const ageFormatted = ageStr.split('').map(digit => 
                    `<span style="border: 2px solid #06b6d4; border-radius: 4px; padding: 2px 4px; margin: 0 1px; display: inline-block; background: rgba(6, 182, 212, 0.1);">${digit}</span>`
                ).join('');
                
                // Add Submission button only for Emma (sub1)
                const submissionButton = submission.id === 'sub1' 
                    ? `<button class="btn-cosmic" style="width: 100%; margin-top: 1.5rem; padding: 1rem; font-size: 1.1rem; background: #06b6d4; border: none; border-radius: 15px; color: white; cursor: pointer; font-weight: 600;">Submission</button>`
                    : '';
                
                // Format content - preserve line breaks for poems
                const formattedContent = submission.content.replace(/\n/g, '<br>');
                
                card.innerHTML = `
                    <h3 class="card-title" style="color: #ec4899; font-size: 1.3rem; margin-bottom: 1rem;">By ${submission.author} (Age ${ageFormatted})</h3>
                    <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 1rem; white-space: pre-line;">${formattedContent}</p>
                    <div style="margin-top: auto;">
                        ${submission.image ? `<img src="${getImageUrl(submission.image, 'Submission')}" alt="Submission by ${submission.author}" style="margin-top: 1rem; width: 100%; border-radius: 10px; height: 250px; object-fit: cover;" onerror="this.style.display='none';">` : ''}
                        ${submissionButton}
                    </div>
            `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading submissions...</p>';
        }
    }, 'submissions');
}

// ===== Load Team Bios =====
function loadTeamBios() {
    const container = document.getElementById('team-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/team.json', function (data) {
        if (!data || !data.team) {
            // Use fallback data
            data = FALLBACK_DATA.team;
        }

        if (data && data.team) {
            container.innerHTML = '';
            data.team.forEach((member, index) => {
                const card = document.createElement('div');
                card.className = 'card glass-card fade-in';
                card.style.animationDelay = (index * 0.1) + 's';
                const email = member.email ? `<p class="text-center" style="font-size: 0.9rem; margin-top: 0.5rem;"><a href="mailto:${member.email}" style="color: var(--turquoise);">${member.email}</a></p>` : '';
                const funFact = member.funFact ? `<div style="background: rgba(236, 72, 153, 0.2); padding: 1rem; border-radius: 10px; margin-top: 1rem; border-left: 3px solid var(--neon-pink);"><strong>🌟 Fun Fact:</strong> ${member.funFact}</div>` : '';
                const imgUrl = getImageUrl(member.image, member.name || 'Team Member', 300, 300);
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
                card.style.height = '100%';
                card.innerHTML = `
                <img src="${imgUrl}" alt="${member.name}" style="border-radius: 50%; width: 200px; height: 200px; object-fit: cover; margin: 0 auto; display: block; flex-shrink: 0;" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSIgZmlsbD0iIzZiNDZjMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5UZWFtPC90ZXh0Pjwvc3ZnPg==';">
                    <h3 class="card-title text-center mt-2" style="flex-shrink: 0;">${member.name}</h3>
                    <p class="text-center" style="color: var(--turquoise); font-weight: 600; flex-shrink: 0;">${member.role}</p>
                    <p class="text-center" style="flex-grow: 1; min-height: 120px; padding-top: 0.5rem; margin-bottom: 0;">${member.bio}</p>
                    <div style="margin-top: auto; flex-shrink: 0; padding-top: 1rem;">
                        ${email}
                        ${funFact}
                    </div>
            `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading team information...</p>';
        }
    }, 'team');
}

// ===== Load Vision Content =====
function loadVisionContent() {
    const container = document.getElementById('vision-content');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/vision.json', function (data) {
        if (!data) {
            // Use fallback data
            data = FALLBACK_DATA.vision;
        }

        if (!data) {
            container.innerHTML = '<p>Content loading...</p>';
            return;
        }

        let valuesHTML = '';
        if (data.values && data.values.length > 0) {
            valuesHTML = '<div class="glass-card p-2 mt-2"><h2>Our Values</h2><div class="content-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">';
            data.values.forEach(value => {
                valuesHTML += `
                < div class="card glass-card" >
                        <h4 class="card-title">${value.title}</h4>
                        <p>${value.description}</p>
                    </div >
                `;
            });
            valuesHTML += '</div></div>';
        }

        let goalsHTML = '';
        if (data.goals && data.goals.length > 0) {
            goalsHTML = '<div class="glass-card p-2 mt-2"><h2>Our Goals</h2><ul style="font-size: 1.1rem; line-height: 2;">';
            data.goals.forEach(goal => {
                goalsHTML += `< li > ${goal}</li > `;
            });
            goalsHTML += '</ul></div>';
        }

        let impactHTML = '';
        if (data.impact) {
            impactHTML = '<div class="glass-card p-2 mt-2"><h2>Our Impact</h2><div class="content-grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">';
            Object.keys(data.impact).forEach(key => {
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                impactHTML += `
                < div class="card glass-card text-center" >
                        <h3 style="font-size: 2rem; color: var(--neon-pink);">${data.impact[key]}</h3>
                        <p>${label}</p>
                    </div >
                `;
            });
            impactHTML += '</div></div>';
        }

        container.innerHTML = `
                < div class="glass-card p-2" >
                <h2>Our Vision</h2>
                <p style="font-size: 1.1rem;">${data.vision || 'To inspire and educate children through cosmic adventures and magical stories.'}</p>
            </div >
                <div class="glass-card p-2 mt-2">
                    <h2>Our Mission</h2>
                    <p style="font-size: 1.1rem;">${data.mission || 'To create engaging, educational content that sparks curiosity and imagination in young minds.'}</p>
                </div>
            ${valuesHTML}
            ${goalsHTML}
            ${impactHTML}
            `;
    });
}

// ===== Load Archive =====
function loadArchive() {
    const container = document.getElementById('archive-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/archive.json', function (data) {
        if (!data || !data.issues) {
            // Use fallback data
            data = FALLBACK_DATA.archive;
        }

        if (data && data.issues) {
            container.innerHTML = '';
            data.issues.forEach((issue, index) => {
                const card = document.createElement('div');
                card.className = 'card glass-card fade-in';
                card.style.animationDelay = (index * 0.1) + 's';
                card.innerHTML = `
                < h3 class="card-title" > ${issue.title}</h3 >
                    <p><strong>Date:</strong> ${issue.date}</p>
                    <p>${issue.description}</p>
                    <button class="btn-cosmic mt-2" onclick="viewIssue('${issue.id}')">View Issue</button>
            `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading archive...</p>';
        }
    }, 'archive');
}

// ===== Setup Forms =====
function setupForms() {
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simulate AJAX submission
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }, 500);
        });
    }

    // Subscription Form
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(subscribeForm);
            const data = Object.fromEntries(formData);
            
            // Validate interests (at least one should be selected)
            const interests = formData.getAll('interests');
            if (interests.length === 0) {
                alert('Please select at least one content preference.');
                return;
            }

            // Validate age
            const age = parseInt(data.age);
            if (isNaN(age) || age < 3 || age > 18) {
                alert('Please enter a valid age between 3 and 18.');
                return;
            }

            // Show loading state
            const submitBtn = subscribeForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Subscribing...';

            // Simulate AJAX submission
            setTimeout(() => {
                // Hide form and show success message
                subscribeForm.style.display = 'none';
                const successMsg = document.getElementById('subscribe-success');
                if (successMsg) {
                    successMsg.style.display = 'block';
                    // Scroll to success message
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    alert('Thank you for subscribing! Check your email for confirmation.');
                }
                
                // Reset form (but keep it hidden)
                subscribeForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }, 1000);
        });
    }

    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            // Simulate AJAX validation
            setTimeout(() => {
                if (username && password) {
                    alert('Login successful! Welcome to Kidz Magazine!');
                    loginForm.reset();
                } else {
                    alert('Please fill in all fields.');
                }
            }, 500);
        });
    }

    // Register Form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData);

            // Simulate AJAX registration
            setTimeout(() => {
                alert('Registration successful! Welcome to Kidz Magazine!');
                registerForm.reset();
            }, 500);
        });
    }
}

// ===== Load History Facts =====
function loadHistoryFacts() {
    const container = document.getElementById('history-container');
    if (!container) return;

    container.innerHTML = '<div class="loader"></div>';

    fetchData('data/history.json', function (data) {
        if (!data || !data.facts) {
            // Use fallback data
            data = FALLBACK_DATA.history;
        }

        if (!data || !data.facts) {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Discovering history...</p>';
            return;
        }

        if (data && data.facts) {
            container.innerHTML = '';
            data.facts.forEach((fact, index) => {
                const card = document.createElement('div');
                card.className = 'card glass-card fade-in';
                card.style.animationDelay = (index * 0.1) + 's';
                card.style.backgroundColor = 'rgba(62, 39, 35, 0.4)'; // Darker parchment style
                const yearBadge = fact.year ? `<span style="display:inline-block; margin-top:auto; padding:0.2rem 0.5rem; background:rgba(0,0,0,0.3); border-radius:5px; font-size:0.8rem; color: var(--accent-2);">📅 ${fact.year}</span>` : '';
                card.innerHTML = `
                    <h4 class="card-title" style="color: var(--accent-2);">${fact.title}</h4>
                    <p>${fact.content}</p>
                    ${yearBadge}
                `;
                container.appendChild(card);
            });
        }
    }, 'history');
}

// ===== Setup Navigation =====
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Smooth scroll for anchor links
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== Setup Parallax =====
function setupParallax() {
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== Utility Functions =====
function readStory(storyId) {
    alert(`Opening story: ${storyId} `);
    // In a real app, this would navigate to a story detail page
}

function viewTutorial(tutorialId) {
    alert(`Opening tutorial: ${tutorialId} `);
    // In a real app, this would show tutorial details
}

function playPuzzle(puzzleId) {
    alert(`Starting puzzle: ${puzzleId} `);
    // In a real app, this would load the puzzle game
}

function viewIssue(issueId) {
    alert(`Opening issue: ${issueId} `);
    // In a real app, this would show the full issue
}
