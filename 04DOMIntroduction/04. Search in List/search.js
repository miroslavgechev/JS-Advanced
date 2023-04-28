function search() {
   let list = Array.from(document.querySelectorAll('ul#towns li'))
   let searchTerm = document.getElementById('searchText').value;
   let result = document.getElementById('result')

   let counter = 0;

   for(let element of list){
      let currentValue = element.textContent;

      if(currentValue.includes(searchTerm)){
        element.style.textDecoration = 'underline';
        element.style.fontWeight = 'bold';
        counter++;
      } else {
         element.style.textDecoration = 'none';
         element.style.fontWeight = 'normal';
      }
   }

   result.textContent = `${counter} matches found`

}
