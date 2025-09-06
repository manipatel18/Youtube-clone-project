const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const container = document.getElementById('container');

if (menuToggle && sidebar && container) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    container.classList.toggle('sidebar-open');
  });
}

function playVideo(card) {
  if (!card) return;

  let thumb = card.querySelector(".thumbnail");
  let video = card.querySelector(".hidden-video");

  if (thumb && video) {
    // Hide thumbnail and show video
    thumb.style.display = "none";
    video.style.display = "block";

    // Optionally play the video if it's a <video> element
    if (video.tagName.toLowerCase() === "video") {
      video.play();
    }
  }
}
