const reviews = [
  {
    name: "Samantha Smith",
    profession: "Full-stack Developer",
    review:
      "Rushikesh's teaching style is excellent! He breaks down complex web development concepts into simple, digestible chunks. His hands-on approach really helped me grasp the fundamentals of HTML, CSS, and JavaScript.",
  },
  {
    name: "Alex Johnson",
    profession: "Front-end Developer",
    review:
      "Rushikesh is a fantastic instructor! His deep understanding of front-end technologies shines through in his teaching. His practical examples and real-world projects made learning web development enjoyable and engaging.",
  },
  {
    name: "Maria Garcia",
    profession: "UX/UI Designer",
    review:
      "Rushikesh's expertise in UX/UI design greatly enriched my understanding of web development. His focus on user-centered design principles transformed how I approach building web applications. Highly recommended!",
  },
  {
    name: "Michael Wang",
    profession: "Software Engineer",
    review:
      "Rushikesh's web development course was top-notch! His clear explanations and thorough demonstrations helped me build a strong foundation in backend development. I feel confident tackling complex server-side tasks thanks to his guidance.",
  },
  {
    name: "Emily Chen",
    profession: "Web Development Instructor",
    review:
      "Rushikesh's passion for teaching web development is contagious! His interactive lessons and supportive approach create a conducive learning environment. I appreciate his dedication to helping students succeed in their coding journey.",
  },
  {
    name: "David Lee",
    profession: "Freelance Web Developer",
    review:
      "Rushikesh is an amazing mentor! His practical insights and industry experience added immense value to my learning journey. His guidance not only improved my technical skills but also boosted my confidence as a web developer.",
  },
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  author.textContent = item.name;
  job.textContent = item.profession;
  info.textContent = item.review;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
