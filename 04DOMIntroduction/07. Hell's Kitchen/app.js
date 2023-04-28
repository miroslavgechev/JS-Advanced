function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.getElementById('inputs').children[1].value);

      //let bestRestaurant = document.getElementById('bestRestaurant').children[2];
      //let bestWorkers = document.getElementById('workers').children[2];

      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let bestWorkers = document.querySelector('#workers p');

      let listOfRestaurants = [];

      for (let element of input) {
         let [name, workers] = element.split(' - ');
         workers = workers && workers.split(', ');

         if (!listOfRestaurants.find(el => el.name === name)) {
            listOfRestaurants.push({
               name,
               averageSalary: 0,
               bestSalary: 0,
               salarySum: 0,
               workerList: []
            })
         }

         let currentRestaurant = listOfRestaurants.find(el => el.name === name);

         for (let worker of workers) {
            let [workerName, workerSalary] = worker.split(' ');
            workerSalary = Number(workerSalary);
            currentRestaurant.workerList.push({
               workerName,
               workerSalary
            });

            currentRestaurant.salarySum += workerSalary;

            if (currentRestaurant.bestSalary < workerSalary) {
               currentRestaurant.bestSalary = workerSalary;
            }
         }

         currentRestaurant.averageSalary = currentRestaurant.salarySum / currentRestaurant.workerList.length;
      }

      listOfRestaurants.sort((a, b) => b.averageSalary - a.averageSalary)
      bestRestaurant.textContent = `Name: ${listOfRestaurants[0].name} Average Salary: ${listOfRestaurants[0].averageSalary.toFixed(2)} Best Salary: ${listOfRestaurants[0].bestSalary.toFixed(2)}`;

      let buffer = '';
      listOfRestaurants[0].workerList.sort((a, b) => b.workerSalary - a.workerSalary)

      for (let worker of listOfRestaurants[0].workerList) {
         buffer += `Name: ${worker.workerName} With Salary: ${worker.workerSalary} `
      }

      bestWorkers.textContent = buffer.trim();

   }
}