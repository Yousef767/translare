function animateCounters() {
  const counters = document.querySelectorAll(".counter span");
  const duration = 3000; // Animation duration in milliseconds
  const interval = 30; // Approximate interval for requestAnimationFrame (~60fps)

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-num");
    const option = counter.getAttribute("data-option") || ""; // Get the data-option or default to empty
    const increment = target / (duration / interval); // Calculate increment based on duration

    let current = 0;

    function updateCounter() {
      current += increment;

      if (current < target) {
        counter.innerHTML = `${getOptionHTML(option)}${Math.ceil(current).toLocaleString()}`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerHTML = `${getOptionHTML(option)}${target.toLocaleString()}`;
      }
    }

    counter.innerHTML = `0${getOptionHTML(option)}`; // Initialize with 0
    requestAnimationFrame(updateCounter);
  });
}

function getOptionHTML(option) {
  return `<div>${option}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const countersContainer = document.querySelector(".counters");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  });

  observer.observe(countersContainer);
});
