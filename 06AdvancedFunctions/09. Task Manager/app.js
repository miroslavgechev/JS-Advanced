function solve() {

    let openSection = document.getElementsByTagName('section')[1].getElementsByTagName('div')[1];
    let inProgressSection = document.getElementsByTagName('section')[2].getElementsByTagName('div')[1];
    let finishedSection = document.getElementsByTagName('section')[3].getElementsByTagName('div')[1];

    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addArticle)

    function addArticle(e) {
        e.preventDefault()
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let dueDate = document.getElementById('date');

        if (!(task.value.length && description.value.length && dueDate.value.length)) {
            return
        }
        
        let article = document.createElement('article');

        let innerHTML = createArticle(task.value, description.value, dueDate.value, { name: 'Start', class: 'green' }, { name: 'Delete', class: 'red' })

        article.innerHTML += innerHTML;
        article.addEventListener('click', dispatchHandler);

        openSection.appendChild(article);
        task.value = ''
        description.value = ''
        dueDate.value = ''

    }

    function createArticle(task, description, dueDate, btnStart, btnDelete) {
        let article = `<h3>${task}</h3>` +
            `<p>Description: ${description}</p>` +
            `<p>Due Date: ${dueDate}</p>` +
            createButton(btnStart, btnDelete)

        return article
    }

    function createButton(firstButton, secondButton) {
        let buttons = `<div class='flex'>` +
            `<button class=${firstButton.class}>${firstButton.name}</button>` +
            `<button class=${secondButton.class}>${secondButton.name}</button>` +
            `</div>`
        return buttons;
    }

    function dispatchHandler(e) {
        if (e.target.tagName !== 'BUTTON') {
            return
        }

        let cmd = commands();
        let btnLabel = e.target.textContent.toLowerCase();

        cmd[btnLabel](e)

    }

    function commands() {

        return {
            start: (e) => {
                inProgressSection.appendChild(e.currentTarget)
                e.target.parentElement.remove()
                e.currentTarget.innerHTML += createButton({ name: 'Delete', class: 'red' }, { name: 'Finish', class: 'orange' })
            },
            delete: (e) => {
                e.currentTarget.remove();
            },
            finish: (e) => {
                finishedSection.appendChild(e.currentTarget)
                e.target.parentElement.remove()
            }
        }
    }
}