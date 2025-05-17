document.addEventListener("DOMContentLoaded", function () {
  // FAQ TOGGLE FUNCTION
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Collapse any open FAQ answers
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        if (ans !== answer) ans.style.display = "none";
      });

      // Toggle current
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });

  // ✅ TOAST FORM SUBMISSION FUNCTION
  const form = document.getElementById('appointmentForm');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from refreshing

      // Show toast
      toast.classList.add('show');

      // Hide after 3 seconds
      setTimeout(() => {
        toast.classList.remove('show');
        form.reset();
      }, 3000);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); //  prevent page refresh

      // ✅ Show success message
      toast.textContent = "✅ Message sent successfully!";
      toast.className = "toast show";

      // ✅ Hide toast after 3s
      setTimeout(() => {
        toast.className = "toast";
      }, 3000);

      // ✅ Clear form
      contactForm.reset();
    });
  }
});

const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let scrollAmount = 0;
  const scrollStep = 220; // adjust as needed

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });