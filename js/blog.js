// blog.js
let container = document.querySelector(".container");

fetch("/data/page.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Lỗi HTTP: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    const blogPosts = data.pages.map((post) => ({
      title: post.title,
      date: post["date-time"],
      content: post.content,
      img: post.img,
    }));

    blogPosts.forEach((post) => {
      const page = document.createElement("div");
      page.className = "page fade-in";

      page.innerHTML = `
        <div class="flex">
          <div class="date">
            <div class="line"></div>
            ${post.date}
          </div>
          <div class="title">${post.title}</div>
          <div class="content">
            <p>${post.content}</p>
          </div>
        </div>
        <img src="/assets/avt.jpg" id="img-blog" alt="Mai Sơn Việt">
      `;

      container.insertBefore(page, document.querySelector(".topic"));
    });
  })
  .catch((err) => console.error("Lỗi khi đọc JSON:", err));
