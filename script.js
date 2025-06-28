// Sample book data dengan gambar cover yang sesuai
const sampleBooks = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    genre: "fiction",
    description: "Novel tentang perjuangan anak-anak Belitung.",
    cover: "images/Laskarpelangi.jpeg",
  },
  {
    id: 2,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    genre: "fiction",
    description:
      "Novel sejarah yang mengisahkan kehidupan di masa kolonial Belanda melalui mata seorang pemuda pribumi.",
    cover: "images/Bumimanusia.jpeg",
  },
  {
    id: 3,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    genre: "non-fiction",
    description:
      "Buku yang membahas filosofi Stoikisme untuk kehidupan modern, mengajarkan cara menghadapi masalah dengan tenang.",
    cover: "images/Filosofiteras.jpeg",
  },
  {
    id: 4,
    title: "Das Kapital",
    author: "Karl Marx",
    genre: "Ekonomi, Filsafat, politik",
    description:
      "Sebuah buku yang mengkritik sistem kapitalisme dan menganalisis bagaimana kapitalisme mengeksploitasi tenaga kerja dan memperkenalkan alienasi pekerja.",
    cover: "images/Daskapital.jpeg",
  },
  {
    id: 5,
    title: "Dilan 1990",
    author: "Pidi Baiq",
    genre: "fiction",
    description:
      "Novel romantis yang mengisahkan cinta remaja di tahun 1990-an dengan gaya bahasa yang unik dan menghibur.",
    cover:
      "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=350&h=280&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "The 7 Habits",
    author: "Stephen Covey",
    genre: "non-fiction",
    description:
      "Buku pengembangan diri yang membahas tujuh kebiasaan orang yang sangat efektif dalam mencapai kesuksesan.",
    cover:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=350&h=280&fit=crop&crop=center",
  },
  {
    id: 7,
    title: "Ayat-Ayat Cinta",
    author: "Habiburrahman El Shirazy",
    genre: "fiction",
    description:
      "Novel religi yang mengisahkan perjalanan cinta seorang mahasiswa Indonesia di Mesir dengan nilai-nilai islami.",
    cover:
      "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?w=350&h=280&fit=crop&crop=center",
  },
  {
    id: 8,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "non-fiction",
    description:
      "Sejarah singkat umat manusia yang mengeksplorasi bagaimana Homo sapiens berhasil mendominasi dunia.",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=350&h=280&fit=crop&crop=center",
  },
  {
    id: 9,
    title: "Perahu Kertas",
    author: "Dee Lestari",
    genre: "fiction",
    description:
      "Novel tentang perjalanan hidup dua remaja yang saling mencari jati diri dan cinta sejati.",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=350&h=280&fit=crop&crop=center",
  },
  {
    id: 10,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "non-fiction",
    description:
      "Buku tentang literasi keuangan yang mengajarkan perbedaan cara berpikir orang kaya dan orang miskin.",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=350&h=280&fit=crop&crop=center",
  },
  {
    id: 11,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    genre: "fiction",
    description:
      "Novel inspiratif tentang perjuangan santri di pesantren dan mimpi mereka untuk menggapai cita-cita.",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=350&h=280&fit=crop&crop=center&sat=-20",
  },
  {
    id: 12,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "non-fiction",
    description:
      "Buku klasik tentang cara mencapai kesuksesan finansial melalui kekuatan pikiran dan tindakan yang tepat.",
    cover:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=280&fit=crop&crop=center&sat=-10",
  },
];

// Initialize books in localStorage if not exists
function initializeBooks() {
  if (!localStorage.getItem("books")) {
    localStorage.setItem("books", JSON.stringify(sampleBooks));
  }
}

// Get books from localStorage
function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

// Get ratings from localStorage
function getRatings() {
  return JSON.parse(localStorage.getItem("ratings")) || {};
}

// Save rating to localStorage
function saveRating(bookId, rating) {
  const ratings = getRatings();
  ratings[bookId] = rating;
  localStorage.setItem("ratings", JSON.stringify(ratings));
}

// Calculate average rating for a book
function getAverageRating(bookId) {
  const ratings = getRatings();
  return ratings[bookId] || 0;
}

// Create star rating HTML
function createStarRating(bookId, currentRating = 0) {
  let starsHTML = '<div class="rating" data-book-id="' + bookId + '">';

  for (let i = 1; i <= 5; i++) {
    const activeClass = i <= currentRating ? "active" : "";
    starsHTML += `<span class="star ${activeClass}" data-rating="${i}">★</span>`;
  }

  starsHTML += "</div>";
  starsHTML += `<div class="rating-info">Rating: ${currentRating}/5 ⭐</div>`;

  return starsHTML;
}

// Create book card HTML dengan gambar
function createBookCard(book) {
  const rating = getAverageRating(book.id);

  return `
        <div class="book-card">
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}" loading="lazy" />
            </div>
            <div class="book-info">
                <h4>${book.title}</h4>
                <div class="book-author">oleh ${book.author}</div>
                <div class="book-genre">${
                  book.genre === "fiction" ? "Fiksi" : "Non-Fiksi"
                }</div>
                <div class="book-description">${book.description}</div>
                ${createStarRating(book.id, rating)}
            </div>
        </div>
    `;
}

// Load all books
function loadBooks() {
  const booksGrid = document.getElementById("booksGrid");
  if (!booksGrid) return;

  const books = getBooks();

  // Add staggered animation
  booksGrid.innerHTML = books
    .map((book, index) => {
      const card = createBookCard(book);
      return `<div style="animation-delay: ${index * 0.1}s">${card}</div>`;
    })
    .join("");

  // Add event listeners for star ratings
  addStarEventListeners();
}

// Load books by genre
function loadBooksByGenre(genre) {
  const booksGrid = document.getElementById(
    genre === "fiction" ? "fictionBooksGrid" : "nonFictionBooksGrid"
  );
  if (!booksGrid) return;

  const books = getBooks().filter((book) => book.genre === genre);
  booksGrid.innerHTML = books
    .map((book, index) => {
      const card = createBookCard(book);
      return `<div style="animation-delay: ${index * 0.1}s">${card}</div>`;
    })
    .join("");

  // Add event listeners for star ratings
  addStarEventListeners();
}

// Load popular books (sorted by rating)
function loadPopularBooks() {
  const booksGrid = document.getElementById("popularBooksGrid");
  if (!booksGrid) return;

  const books = getBooks();
  const ratings = getRatings();

  // Sort books by rating (highest first)
  const sortedBooks = books.sort((a, b) => {
    const ratingA = ratings[a.id] || 0;
    const ratingB = ratings[b.id] || 0;
    return ratingB - ratingA;
  });

  booksGrid.innerHTML = sortedBooks
    .map((book, index) => {
      const card = createBookCard(book);
      return `<div style="animation-delay: ${index * 0.1}s">${card}</div>`;
    })
    .join("");

  // Add event listeners for star ratings
  addStarEventListeners();
}

// Add event listeners for star ratings
function addStarEventListeners() {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const rating = Number.parseInt(this.dataset.rating);
      const bookId = Number.parseInt(this.parentElement.dataset.bookId);

      // Save rating
      saveRating(bookId, rating);

      // Update visual feedback
      updateStarDisplay(this.parentElement, rating);

      // Update rating info
      const ratingInfo = this.parentElement.nextElementSibling;
      ratingInfo.innerHTML = `Rating: ${rating}/5 ⭐`;

      // Add success animation
      this.style.transform = "scale(1.3)";
      setTimeout(() => {
        this.style.transform = "scale(1.1)";
      }, 200);
    });

    // Hover effect
    star.addEventListener("mouseenter", function () {
      const rating = Number.parseInt(this.dataset.rating);
      const ratingContainer = this.parentElement;
      highlightStars(ratingContainer, rating);
    });
  });

  // Reset hover effect when leaving rating container
  const ratingContainers = document.querySelectorAll(".rating");
  ratingContainers.forEach((container) => {
    container.addEventListener("mouseleave", function () {
      const bookId = Number.parseInt(this.dataset.bookId);
      const currentRating = getAverageRating(bookId);
      updateStarDisplay(this, currentRating);
    });
  });
}

// Update star display
function updateStarDisplay(ratingContainer, rating) {
  const stars = ratingContainer.querySelectorAll(".star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

// Highlight stars on hover
function highlightStars(ratingContainer, rating) {
  const stars = ratingContainer.querySelectorAll(".star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = "#f6ad55";
      star.style.transform = "scale(1.1)";
    } else {
      star.style.color = "#e2e8f0";
      star.style.transform = "scale(1)";
    }
  });
}

// Add new book
function addNewBook() {
  const form = document.getElementById("addBookForm");
  const formData = new FormData(form);

  const books = getBooks();
  const newId = Math.max(...books.map((book) => book.id)) + 1;

  const title = formData.get("title");
  const genre = formData.get("genre");

  // Gunakan gambar default berdasarkan genre
  const defaultCover =
    genre === "fiction"
      ? "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=350&h=280&fit=crop&crop=center"
      : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=280&fit=crop&crop=center";

  const newBook = {
    id: newId,
    title: title,
    author: formData.get("author"),
    genre: genre,
    description: formData.get("description"),
    cover: defaultCover,
  };

  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));

  // Success animation
  const submitBtn = form.querySelector(".btn-primary");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "✓ Berhasil Ditambahkan!";
  submitBtn.style.background =
    "linear-gradient(135deg, #48bb78 0%, #38a169 100%)";

  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.style.background =
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    form.reset();
  }, 2000);
}

// Mobile menu toggle
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Tutup menu ketika mengklik link
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
      }
    });
  });
});

// Smooth scroll for better UX
function addSmoothScroll() {
  document.documentElement.style.scrollBehavior = "smooth";
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeBooks();
  loadBooks();
  toggleMobileMenu();
  addSmoothScroll();
});

// Export functions for use in other pages
window.loadPopularBooks = loadPopularBooks;
window.loadBooksByGenre = loadBooksByGenre;
window.addNewBook = addNewBook;
