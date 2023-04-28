function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchTerm = document.getElementById('searchField').value;
      let tableRows = Array.from(document.querySelectorAll('table tbody tr'));

      for (let line of tableRows) {
         let isAMatch = false;
         for (let index = 0; index < line.children.length; index++) {
            let cellText = line.children[index].textContent;

            if (cellText.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
               isAMatch = true;
               break;
            }
         }

         if (isAMatch) {
            line.classList.add('select');
         } else {
            line.classList.remove('select');
         }
      }

   }
}