document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@antiquark007"
  )
    .then((response) => response.json())
    .then((data) => {
      const articles =
        data.items?.filter((item) => item.categories.length > 0).slice(0, 6) ||
        [];
      const container = document.getElementById("medium-articles-list");
      if (container && articles.length > 0) {
        articles.forEach((article) => {
          // Try to extract the first image from the content field
          let imgSrc = "";
          const imgMatch = article.content.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch && imgMatch[1]) {
            imgSrc = imgMatch[1];
          }
          const card = document.createElement("div");
          card.className =
            "bg-gray-100 rounded-xl shadow p-6 flex flex-col hover:scale-105 transition-transform";
          card.innerHTML = `
                  ${
                    imgSrc
                      ? `<a href="${article.link}" target="_blank"><img src="${imgSrc}" alt="Article image" class="rounded-lg mb-4 object-cover h-40 w-full" loading="lazy"></a>`
                      : ""
                  }
                  <a href="${article.link}" target="_blank" class="block mb-3">
                    <h3 class="text-xl font-semibold mb-2">${article.title}</h3>
                  </a>
                  <p class="text-gray-600 text-sm mb-4">${
                    article.pubDate
                      ? new Date(article.pubDate).toLocaleDateString()
                      : ""
                  }</p>
                  <p class="text-gray-700 mb-4">${article.description
                    .replace(/<[^>]+>/g, "")
                    .slice(0, 120)}...</p>
                  <a href="${
                    article.link
                  }" target="_blank" class="text-blue-600 hover:underline mt-auto">Read More</a>
                `;
          container.appendChild(card);
        });
      } else if (container) {
        container.innerHTML = "<p class='text-gray-500'>No articles found.</p>";
      }
    })
    .catch(() => {
      const container = document.getElementById("medium-articles-list");
      if (container) {
        container.innerHTML =
          "<p class='text-gray-500'>Unable to load Medium articles at this time.</p>";
      }
    });
});
// Hero section cursor glow effect (formal, elegant)
const heroSection = document.getElementById("hero-section");
const glow = document.getElementById("hero-cursor-glow");
if (heroSection && glow) {
  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.opacity = "1";
    glow.style.left = `${x - 60}px`;
    glow.style.top = `${y - 60}px`;
  });
  heroSection.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}

