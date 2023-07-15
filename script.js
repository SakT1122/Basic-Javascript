
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let developers = arr.filter(worker => worker.profession === "developer");
    let developerNames = developers.map(developer => developer.name);
    console.log(developerNames);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(worker){
        if (worker.profession === "developer") {
          console.log(worker.name);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newWorker = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newWorker);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(worker => worker.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
    ];
    let concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }