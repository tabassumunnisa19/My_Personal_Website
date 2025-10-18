document.addEventListener("DOMContentLoaded", () => {
  const postId = window.location.pathname;

  const likeBtn = document.getElementById("like-btn");
  const likeCount = document.getElementById("like-count");
  const commentInput = document.getElementById("comment-input");
  const commentBtn = document.getElementById("comment-btn");
  const commentList = document.getElementById("comment-list");

  if (!likeBtn) return;

  // Likes
  let likes = parseInt(localStorage.getItem(`${postId}-likes`)) || 0;
  let liked = JSON.parse(localStorage.getItem(`${postId}-liked`)) || false;
  likeCount.textContent = likes;
  if (liked) likeBtn.classList.add("liked");

  likeBtn.addEventListener("click", () => {
    liked = !liked;
    localStorage.setItem(`${postId}-liked`, JSON.stringify(liked));

    if (liked) {
      likes++;
      likeBtn.classList.add("liked");
    } else {
      likes--;
      likeBtn.classList.remove("liked");
    }

    localStorage.setItem(`${postId}-likes`, likes);
    likeCount.textContent = likes;
  });

  // Comments
  let comments = JSON.parse(localStorage.getItem(`${postId}-comments`)) || [];

  const renderComments = () => {
    commentList.innerHTML = comments
      .map(
        (c) =>
          `<p><strong>${c.name}</strong> (${c.time}): ${c.text}</p>`
      )
      .join("");
  };
  renderComments();

  commentBtn.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (text !== "") {
      const name = prompt("Enter your name:");
      const time = new Date().toLocaleString();
      const comment = { name: name || "Anonymous", text, time };
      comments.push(comment);
      localStorage.setItem(`${postId}-comments`, JSON.stringify(comments));
      commentInput.value = "";
      renderComments();
    }
  });
});
