window.addEventListener("load", solve);

function solve() {

  let firstNameField = document.getElementById('first-name');
  let lastNameField = document.getElementById('last-name');
  let ageField = document.getElementById('age');
  let titleField = document.getElementById('story-title');
  let genreField = document.getElementById('genre');
  let storyField = document.getElementById('story')

  let ulElement = document.getElementById('preview-list');
  let divElement = document.getElementById('main');

  let publishButton = document.getElementById('form-btn');
  publishButton.addEventListener('click', publishStory);

  function publishStory() {

    if (!firstNameField.value || !lastNameField.value || !ageField.value || !titleField.value || !genreField.value || !storyField.value) {
      return;
    }

    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = createArticle();

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', saveStory);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', editStory);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.addEventListener('click', deleteStory);

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ulElement.appendChild(li);

    publishButton.disabled = true;

    firstNameField.value = '';
    lastNameField.value = '';
    ageField.value = '';
    titleField.value = '';
    genreField.value = '';
    storyField.value = '';
  }

  function createArticle() {

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstNameField.value} ${lastNameField.value}`;

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${ageField.value}`;

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${titleField.value}`;

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genreField.value}`;

    let pStory = document.createElement('p');
    pStory.textContent = `${storyField.value}`;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    return article;
  }

  function editStory(e) {
    let article = e.target.parentElement.children[0];

    let h4Text = article.children[0].textContent;
    let [h4StandardText, names] = h4Text.split(': ');
    let [firstName, lastName] = names.split(' ');
    firstNameField.value = firstName;
    lastNameField.value = lastName;

    let ageText = article.children[1].textContent;
    let [ageStandardText, age] = ageText.split(': ');
    ageField.value = age;

    let titleText = article.children[2].textContent;
    let [titleStandardText, title] = titleText.split(': ');
    titleField.value = title;

    let genreText = article.children[3].textContent;
    let [genreStandardText, genre] = genreText.split(': ');
    genreField.value = genre;

    let storyText = article.children[4].textContent;
    storyField.value = storyText;

    publishButton.disabled = false;

    e.target.parentElement.remove();
  }

  function saveStory() {
    divElement.innerHTML = '';

    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';

    divElement.appendChild(h1);
  }

  function deleteStory(e) {

    e.target.parentElement.remove();
    publishButton.disabled = false;

  }
}
