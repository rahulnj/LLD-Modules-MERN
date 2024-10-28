const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const targetElem = e.target;
  if (targetElem.classList.contains('reply')) {
    createReplyInput(targetElem);
  }

  if (targetElem.classList.contains('btn-submit')) {
    createComment(targetElem);
  }
});

function createReplyInput(targetElem) {
  const fragment = document.createDocumentFragment();

  const replyContainer = document.createElement('div');
  const input = document.createElement('input');
  const button = document.createElement('button');

  replyContainer.setAttribute('class', 'comment_reply_conatiner');
  input.setAttribute('type', 'text');
  button.setAttribute('class', 'btn-submit');
  button.textContent = 'Submit';
  replyContainer.appendChild(input);
  replyContainer.appendChild(button);

  fragment.appendChild(replyContainer);
  targetElem.parentNode.appendChild(fragment);
}

function createCommentContainer() {
  const commentContainer = document.createElement('div');
  commentContainer.setAttribute('class', 'comment-container');
  return commentContainer;
}

function createCommentCard(commentValue) {
  const commentCard = document.createElement('div');
  const commentText = document.createElement('h3');
  const reply = document.createElement('div');

  commentCard.setAttribute('class', 'comment_card');
  commentText.setAttribute('class', 'comment_text');
  reply.setAttribute('class', 'reply');
  reply.innerText = 'Reply';
  commentText.innerText = commentValue;
  commentCard.appendChild(commentText);
  commentCard.appendChild(reply);

  return commentCard;
}

function createComment(targetElem) {
  const targetElemInputField = targetElem.previousElementSibling;
  const inputValue = targetElemInputField.value;

  if (!inputValue) return;

  const commentContainer = createCommentContainer();
  const card = createCommentCard(inputValue);
  commentContainer.appendChild(card);

  const commentReplyContainer = targetElem.parentNode;
  const commentCard = commentReplyContainer.parentNode;

  commentCard.replaceChild(commentContainer, commentReplyContainer);
}
