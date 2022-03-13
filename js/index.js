const currentPlaylist = [];
function playAudio(url, selector) {
  const element = document.querySelector(`#${selector}`);
  const isPlaying = element.classList.contains("bounce");

  if (element && !isPlaying) {
    const sound = new Audio(url);
    sound.play();
    element.classList.add("bounce");
    currentPlaylist.push({ key: selector, sound });
  } else {
    const selectedAudio = currentPlaylist.find((item) => item.key === selector);
    element.classList.remove("bounce");

    selectedAudio.sound.pause();
  }
}
