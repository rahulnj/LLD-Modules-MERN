const inputField = document.querySelector('input');
const submitBtn = document.querySelector('.btn-submit');

submitBtn.addEventListener('click', onSubmit);

function onSubmit() {
  const inputValue = inputField.value ?? '';
  console.log(inputValue);

  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment-container');
  const card = addCommentCard(inputValue);
  commentContainer.appendChild(card);
  inputField.value = '';
}

function addCommentCard(commentValue) {
  const commentCard = document.createElement('div');
  const commentText = document.createElement('h3');
  const reply = document.createElement('div');

  commentCard.classList.add('comment_card');
  commentText.classList.add('coment_text');
  reply.classList.add('reply');
  reply.innerText = 'Reply';
  commentText.innerText = commentValue;
  commentText.append(reply);
  commentCard.appendChild(commentText);

  return commentCard;
}

function addCommentContainer() {}
