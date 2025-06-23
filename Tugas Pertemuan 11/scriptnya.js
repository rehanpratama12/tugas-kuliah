class Search {
  constructor(data) {
    this.data = data;
  }

  // Fungsi untuk membandingkan teks dengan keyword (case-insensitive)
  equal(text, keyword) {
    return text.toLowerCase().includes(keyword.toLowerCase());
  }

  // Pencarian berdasarkan judul
  byTitle(keyword) {
    for (let i = 0; i < this.data.length; i++) {
      let title = this.data[i].querySelector(".title").textContent;
      if (!this.equal(title, keyword)) {
        this.data[i].style.display = "none";
      } else {
        this.data[i].style.display = "";
      }
    }
  }

  // Pencarian berdasarkan penulis
  byAuthor(keyword) {
    for (let i = 0; i < this.data.length; i++) {
      let author = this.data[i].querySelector(".author").textContent;
      if (!this.equal(author, keyword)) {
        this.data[i].style.display = "none";
      } else {
        this.data[i].style.display = "";
      }
    }
  }

  // Pencarian berdasarkan penerbit
  byPublisher(keyword) {
    for (let i = 0; i < this.data.length; i++) {
      let publisher = this.data[i].querySelector(".publisher").textContent;
      if (!this.equal(publisher, keyword)) {
        this.data[i].style.display = "none";
      } else {
        this.data[i].style.display = "";
      }
    }
  }

  // Pencarian berdasarkan judul dan tahun
  byTitleAndYear(keyword, year) {
    for (let i = 0; i < this.data.length; i++) {
      let title = this.data[i].querySelector(".title").textContent;
      let bookYear = this.data[i].querySelector(".year").textContent;
      if (!this.equal(title, keyword) || (year && bookYear !== year)) {
        this.data[i].style.display = "none";
      } else {
        this.data[i].style.display = "";
      }
    }
  }
}

// Fungsi untuk menampilkan/menyembunyikan input tahun
function toggleYearInput() {
  let yearInput = document.getElementById("year");
  let filterTitleYear = document.getElementById("filter_title_year");
  yearInput.classList.toggle("year-input", !filterTitleYear.checked);
}

// Fungsi pencarian utama
function searching() {
  let books = document.querySelectorAll(".book");
  let search = new Search(books);
  let keyword = document.getElementById("keyword").value;
  let filter = document.querySelector('input[name="filter"]:checked').value;
  let year = document.getElementById("year").value;

  if (filter === "title") {
    search.byTitle(keyword);
  } else if (filter === "author") {
    search.byAuthor(keyword);
  } else if (filter === "publisher") {
    search.byPublisher(keyword);
  } else if (filter === "title_year") {
    search.byTitleAndYear(keyword, year);
  }
}

// Event listener untuk input keyword
let keyword = document.getElementById("keyword");
keyword.addEventListener("keyup", searching);

// Event listener untuk perubahan radio button
let filters = document.querySelectorAll('input[name="filter"]');
filters.forEach((filter) => {
  filter.addEventListener("change", () => {
    toggleYearInput();
    searching();
  });
});

// Event listener untuk input tahun
let yearInput = document.getElementById("year");
yearInput.addEventListener("input", searching);

// Inisialisasi tampilan awal
toggleYearInput();
searching();
