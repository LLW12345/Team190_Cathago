function likePost() {
  var likeCountElement = document.getElementById("likeCount");
  var likeCount = parseInt(likeCountElement.innerText);
  likeCount++;
  likeCountElement.innerText = likeCount + " likes";
}