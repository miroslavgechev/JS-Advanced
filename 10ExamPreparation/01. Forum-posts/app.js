window.addEventListener("load", solve);

function solve() {

    let postTitleField = document.getElementById('post-title');
    let postCategoryField = document.getElementById('post-category');
    let ulReviewListElement = document.getElementById('review-list');
    let ulPublishedListElement = document.getElementById('published-list');

    let postTextField = document.getElementById('post-content');
    let publishButton = document.getElementById('publish-btn');

    let clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', clearAllPosts);

    publishButton.addEventListener('click', addPost);

    function addPost() {

        if (!postTitleField.value || !postCategoryField.value || !postTextField.value) {
            return;
        }

        let liElement = document.createElement('li');
        liElement.classList.add('rpost')

        let articleElement = createArticle();

        let editButton = document.createElement('button');
        editButton.classList.add('action-btn', 'edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editPost);

        let approveButton = document.createElement('button');
        approveButton.classList.add('action-btn', 'approve');
        approveButton.textContent = 'Approve';
        approveButton.addEventListener('click', approvePost);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(approveButton);

        ulReviewListElement.appendChild(liElement);

        postTitleField.value = '';
        postCategoryField.value = '';
        postTextField.value = '';
    }

    function createArticle() {
        let articleElement = document.createElement('article');
        let h4element = document.createElement('h4');
        let pCategoryElement = document.createElement('p');
        let pContentElement = document.createElement('p');

        h4element.textContent = postTitleField.value;
        pCategoryElement.textContent = `Category: ${postCategoryField.value}`;
        pContentElement.textContent = `Content: ${postTextField.value}`;

        articleElement.appendChild(h4element);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pContentElement);

        return articleElement;
    }

    function editPost(e) {
        let currentArticle = e.target.parentElement.getElementsByTagName('article')[0];

        postTitleField.value = currentArticle.children[0].textContent;
        postCategoryField.value = currentArticle.children[1].textContent.split(': ')[1];
        postTextField.value = currentArticle.children[2].textContent.split(': ')[1];

        currentArticle.parentElement.remove();
    }

    function approvePost(e) {
        let currentArticle = e.target.parentElement;
        Array.from(currentArticle.getElementsByTagName('button')).forEach(button => button.remove());
        ulPublishedListElement.appendChild(currentArticle);
    }

    function clearAllPosts(e) {
        Array.from(ulPublishedListElement.children).forEach(child => child.remove())
    }
}