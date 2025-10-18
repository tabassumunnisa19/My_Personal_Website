document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".interaction-box");

  boxes.forEach(box => {
    const postId = box.dataset.postId;
    const likeBtn = box.querySelector(".like-btn");
    const likeCount = box.querySelector(".like-count");
    const commentList = box.querySelector(".comment-list");
    const commentInput = box.querySelector(".comment-input");
    const commentBtn = box.querySelector(".comment-btn");

    // Load from local storage
    let likes = parseInt(localStorage.getItem(`${postId}-likes`)) || 0;
    let comments = JSON.parse(localStorage.getItem(`${postId}-comments`)) || [];
    likeCount.textContent = likes;
    renderComments();

    // Like button
    likeBtn.addEventListener("click", () => {
      likes++;
      localStorage.setItem(`${postId}-likes`, likes);
      likeCount.textContent = likes;
    });

    // Comment button
    commentBtn.addEventListener("click", () => {
      const text = commentInput.value.trim();
      if (text !== "") {
        comments.push(text);
        localStorage.setItem(`${postId}-comments`, JSON.stringify(comments));
        commentInput.value = "";
        renderComments();
      }
    });

    // Render all comments
  function renderComments() {
  commentList.innerHTML = "";
  comments.forEach(comment => {
    const div = document.createElement("div");
    div.classList.add("comment-item");
    div.innerHTML = `<strong>${comment.name}</strong> <small>${comment.time}</small><br>${comment.text}`;
    commentList.appendChild(div);
  });
}

  });assets/js/blog-interactions.js

});
