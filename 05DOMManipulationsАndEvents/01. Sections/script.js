function create(words) {

   let parentElement = document.getElementById('content');

   for (let word of words) {

      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      div.appendChild(p);
      parentElement.appendChild(div);

      div.addEventListener('click', reveal);

   }

   function reveal(event) {
      event.target.querySelector('p').style.display = 'block';
   }

}