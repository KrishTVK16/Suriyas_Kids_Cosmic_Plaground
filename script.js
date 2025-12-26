// Cosmic Playground - Main JavaScript File with AJAX Functionality

// ===== Global Variables =====
const API_BASE = 'data/'; // Simulated API endpoint

// ===== Fallback Data (used when AJAX fails) =====
const FALLBACK_DATA = {
    stories: {
        featured: [
            {
                id: "story1",
                title: "The Cosmic Adventure of Luna",
                description: "Join Luna as she travels through the galaxy meeting friendly aliens and discovering new planets! Follow her journey as she learns about friendship, courage, and the wonders of space. Perfect for ages 6-10.",
                image: "data/images/stories/story1.svg",
                author: "Sarah Johnson",
                readingTime: "5 min read",
                category: "Space Adventure"
            },
            {
                id: "story2",
                title: "Stardust and the Magic Rocket",
                description: "Stardust finds a magical rocket that takes them to the edge of the universe! Discover what happens when they meet the Star Guardians and learn about the power of dreams. An inspiring tale for young explorers.",
                image: "data/images/stories/story2.svg",
                author: "Mike Chen",
                readingTime: "7 min read",
                category: "Fantasy"
            },
            {
                id: "story3",
                title: "The Planet of Colors",
                description: "Discover a planet where everything is made of colors and music! Join the Color Crew as they solve mysteries and bring harmony to their vibrant world. A fun and educational story about colors and creativity.",
                image: "data/images/stories/story3.svg",
                author: "Emma Williams",
                readingTime: "6 min read",
                category: "Educational"
            }
        ],
        all: [
            {
                id: "story1",
                title: "The Cosmic Adventure of Luna",
                description: "Join Luna as she travels through the galaxy meeting friendly aliens and discovering new planets! Follow her journey as she learns about friendship, courage, and the wonders of space. Perfect for ages 6-10.",
                image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop&q=80",
                author: "Sarah Johnson",
                readingTime: "5 min read",
                category: "Space Adventure"
            },
            {
                id: "story2",
                title: "Stardust and the Magic Rocket",
                description: "Stardust finds a magical rocket that takes them to the edge of the universe! Discover what happens when they meet the Star Guardians and learn about the power of dreams. An inspiring tale for young explorers.",
                image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=400&h=300&fit=crop&q=80",
                author: "Mike Chen",
                readingTime: "7 min read",
                category: "Fantasy"
            },
            {
                id: "story3",
                title: "The Planet of Colors",
                description: "Discover a planet where everything is made of colors and music! Join the Color Crew as they solve mysteries and bring harmony to their vibrant world. A fun and educational story about colors and creativity.",
                image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop&q=80",
                author: "Emma Williams",
                readingTime: "6 min read",
                category: "Educational"
            },
            {
                id: "story4",
                title: "Comet's Journey Home",
                description: "Follow Comet as they race through space to get home before bedtime! A heartwarming story about family, time, and the importance of being home. Perfect bedtime reading for ages 6-8.",
                image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop&q=80",
                author: "David Martinez",
                readingTime: "4 min read",
                category: "Bedtime Story"
            },
            {
                id: "story5",
                title: "The Star Collector",
                description: "Meet the Star Collector who gathers stars to light up the darkest corners of space! Learn about constellations and the beauty of the night sky in this educational adventure.",
                image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop&q=80",
                author: "Sarah Johnson",
                readingTime: "8 min read",
                category: "Science Fiction"
            },
            {
                id: "story6",
                title: "Nebula's Secret",
                description: "Uncover the secret hidden within the beautiful nebula clouds! Join a team of young space explorers as they discover the mysteries of cosmic clouds and learn about space science.",
                image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop&q=80",
                author: "Mike Chen",
                readingTime: "6 min read",
                category: "Adventure"
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
            }
        ]
    },
    animals: {
        animals: [
            {
                name: "Dolphin",
                fact: "Dolphins are super smart! They can recognize themselves in mirrors and have their own names. They use echolocation to 'see' with sound, sending out clicks that bounce off objects to help them navigate and find food.",
                image: "data/images/nature/animal1.svg",
                habitat: "Oceans worldwide",
                diet: "Fish and squid",
                funFact: "Dolphins sleep with one eye open!"
            },
            {
                name: "Elephant",
                fact: "Elephants never forget! They have amazing memories and can remember friends for many years. They're also the largest land animals and can communicate using sounds too low for humans to hear.",
                image: "data/images/nature/animal2.svg",
                habitat: "Africa and Asia",
                diet: "Plants, fruits, and bark",
                funFact: "Elephants can smell water from 3 miles away!"
            },
            {
                name: "Penguin",
                fact: "Penguins can't fly, but they are amazing swimmers! They can dive deep into the ocean and hold their breath for up to 20 minutes. They also huddle together to stay warm in freezing temperatures.",
                image: "data/images/nature/animal3.svg",
                habitat: "Antarctica and surrounding areas",
                diet: "Fish, krill, and squid",
                funFact: "Penguins can jump 6 feet out of the water!"
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
            }
        ]
    },
    videos: {
        videos: [
            {
                id: "video1",
                title: "Journey Through the Solar System",
                description: "Take an amazing journey through our solar system!",
                embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            },
            {
                id: "video2",
                title: "Fun Animal Facts",
                description: "Learn amazing facts about animals from around the world!",
                embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
                image: "https://via.placeholder.com/400x300/ec4899/ffffff?text=Emma's+Art"
            },
            {
                id: "sub2",
                author: "Lucas",
                age: 10,
                content: "I wrote a story about a friendly alien who came to Earth to learn about our planet. His name was Zorp!",
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
                image: "https://picsum.photos/300/300?random=30",
                email: "sarah@cosmicplayground.com",
                funFact: "Sarah's favorite planet is Saturn because of its beautiful rings!"
            },
            {
                name: "Mike Chen",
                role: "Art Director",
                bio: "Mike brings stories to life with beautiful illustrations. He loves drawing space adventures and friendly aliens! With 15 years of experience in digital art and animation.",
                image: "https://picsum.photos/300/300?random=31",
                email: "mike@cosmicplayground.com",
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

    switch (currentPage) {
        case 'index.html':
        case '':
            loadFeaturedStories();
            break;
        case 'stories.html':
            loadStories();
            break;
        case 'learning.html':
            loadQuizzes();
            loadFunFacts();
            break;
        case 'arts.html':
            loadTutorials();
            break;
        case 'games.html':
            loadPuzzles();
            break;
        case 'videos.html':
            loadVideos();
            break;
        case 'nature.html':
            loadAnimalFacts();
            break;
        case 'kids-corner.html':
            loadSubmissions();
            break;
        case 'about.html':
            loadTeamBios();
            break;
        case 'vision.html':
            loadVisionContent();
            break;
        case 'archive.html':
            loadArchive();
            break;
    }

    setupForms();
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

function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'card glass-card fade-in';
    const authorInfo = story.author ? `<p style="color: var(--turquoise); font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>By:</strong> ${story.author}</p>` : '';
    const readingTime = story.readingTime ? `<span style="color: var(--neon-pink); font-size: 0.9rem;">⏱️ ${story.readingTime}</span>` : '';
    const category = story.category ? `<span style="background: var(--glass-bg); padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.85rem; margin-left: 0.5rem;">${story.category}</span>` : '';
    const imgUrl = getImageUrl(story.image, story.title || 'Cosmic Story');
    card.innerHTML = `
        <img src="${imgUrl}" alt="${story.title}" style="width: 100%; height: 250px; object-fit: cover;" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNmI0NmMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkNvc21pYyBTdG9yeTwvdGV4dD48L3N2Zz4=';">
        <h3 class="card-title">${story.title}</h3>
        ${authorInfo}
        <p>${story.description}</p>
        <div style="margin-top: auto; text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                ${readingTime}
                ${category}
            </div>
            <button class="btn-cosmic" onclick="readStory('${story.id}')">Read More</button>
        </div>
    `;
    return card;
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
                card.innerHTML = `
                    <iframe src="${video.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div style="padding: 1rem;">
                        <h4 class="card-title">${video.title}</h4>
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
            data.animals.forEach((animal, index) => {
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
                container.appendChild(card);
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
            data.submissions.forEach((submission, index) => {
                const card = document.createElement('div');
                card.className = 'card glass-card fade-in';
                card.style.animationDelay = (index * 0.1) + 's';
                card.innerHTML = `
                    <h3 class="card-title">By ${submission.author} (Age ${submission.age})</h3>
                    <p>${submission.content}</p>
                    <div style="margin-top: auto;">
                        ${submission.image ? `<img src="${getImageUrl(submission.image, 'Submission')}" alt="Submission by ${submission.author}" style="margin-top: 1rem; width: 100%; border-radius: 10px; height: 250px; object-fit: cover;" onerror="this.style.display='none';">` : ''}
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
                card.innerHTML = `
                    <img src="${imgUrl}" alt="${member.name}" style="border-radius: 50%; width: 200px; height: 200px; object-fit: cover; margin: 0 auto; display: block;" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSIgZmlsbD0iIzZiNDZjMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5UZWFtPC90ZXh0Pjwvc3ZnPg==';">
                    <h3 class="card-title text-center mt-2">${member.name}</h3>
                    <p class="text-center" style="color: var(--turquoise); font-weight: 600;">${member.role}</p>
                    <p class="text-center">${member.bio}</p>
                    ${email}
                    ${funFact}
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
                    <div class="card glass-card">
                        <h4 class="card-title">${value.title}</h4>
                        <p>${value.description}</p>
                    </div>
                `;
            });
            valuesHTML += '</div></div>';
        }

        let goalsHTML = '';
        if (data.goals && data.goals.length > 0) {
            goalsHTML = '<div class="glass-card p-2 mt-2"><h2>Our Goals</h2><ul style="font-size: 1.1rem; line-height: 2;">';
            data.goals.forEach(goal => {
                goalsHTML += `<li>${goal}</li>`;
            });
            goalsHTML += '</ul></div>';
        }

        let impactHTML = '';
        if (data.impact) {
            impactHTML = '<div class="glass-card p-2 mt-2"><h2>Our Impact</h2><div class="content-grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">';
            Object.keys(data.impact).forEach(key => {
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                impactHTML += `
                    <div class="card glass-card text-center">
                        <h3 style="font-size: 2rem; color: var(--neon-pink);">${data.impact[key]}</h3>
                        <p>${label}</p>
                    </div>
                `;
            });
            impactHTML += '</div></div>';
        }

        container.innerHTML = `
            <div class="glass-card p-2">
                <h2>Our Vision</h2>
                <p style="font-size: 1.1rem;">${data.vision || 'To inspire and educate children through cosmic adventures and magical stories.'}</p>
            </div>
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
                    <h3 class="card-title">${issue.title}</h3>
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
            const email = document.getElementById('subscribe-email').value;

            // Simulate AJAX submission
            setTimeout(() => {
                alert('Thank you for subscribing! Check your email for confirmation.');
                subscribeForm.reset();
            }, 500);
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
                    alert('Login successful! Welcome to Cosmic Playground!');
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
                alert('Registration successful! Welcome to Cosmic Playground!');
                registerForm.reset();
            }, 500);
        });
    }
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
    alert(`Opening story: ${storyId}`);
    // In a real app, this would navigate to a story detail page
}

function viewTutorial(tutorialId) {
    alert(`Opening tutorial: ${tutorialId}`);
    // In a real app, this would show tutorial details
}

function playPuzzle(puzzleId) {
    alert(`Starting puzzle: ${puzzleId}`);
    // In a real app, this would load the puzzle game
}

function viewIssue(issueId) {
    alert(`Opening issue: ${issueId}`);
    // In a real app, this would show the full issue
}
