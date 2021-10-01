let x = "John" 
let y = "Doe"
console.log(x+" <> "+y)

const student={
    name:"veena",
    surname: "H",
    email: "veenahallikeri@gmail.com"
};
console.log(student)
delete student.email
console.log(student)

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr)

for(let i=0;i<10;i++){
console.log(arr[i])
}
let ARRAY_LENGTH = 100
let randomArray = []
for(let j = 0; j<ARRAY_LENGTH; j++) {
    randomArray.push(Math.floor(Math.random()*100))
    //console.log(randomArray[j])
}
randomArray.sort();
console.log(randomArray[0] + " minimum value in array")
console.log(randomArray[randomArray.length-1] + " maximum value in array")


let arr2=[]
let arr3=[]
let arr4=[]
let arr1=[]

let nestedArray=[
     arr1, arr2,  arr3,arr4
]
let arr_length=40

for(let k=0;k<40;k++){
    if(! arr1 > 10){
    arr1.push(Math.floor(Math.random()*10))
        console.log(arr1[k])

    }
    else if(! arr2 > 10){
        arr2.push(Math.floor(Math.random()*10))
        console.log(arr2[k])
    }
    else if(! arr3 > 10){
        arr3.push(Math.floor(Math.random()*10))
        console.log(arr3[k])
    }
    else if(! arr4 > 10){
        arr4.push(Math.floor(Math.random()*10))
        console.log(arr4[k])
    }
}

 
    function longestArray(a,b) {
        let arrayLength
        if(a.length>b.length){
          arrayLength=a.length
        }
        else
        {
          arrayLength=b.length
        }
        console.log(arrayLength)
        return arrayLength
    }
 let a=[1,2,3,4,5]
 let b=[8,5,9,1,4,8,8]
 longestArray(a,b)
 

 
 function highestSumArray(a1,b1) {
   // let myArray=[]
    let sum1=0
    let sum2=0
    for(i=0;i<a1.length;i++){
        sum1+=a1[i]
   }
   for(i=0;i<b1.length;i++){
    sum1+=b1[i]
}
if(sum1>sum2){
    highest=sum1
  }
  else
  {
    highest=sum2
  }
  console.log(highest)
    return highest
}
let a1=[1,2,3,4,5]
let b1=[8,5,9,1,4,8,8]
highestSumArray(a1,b1)
console.log()

let container=document.getElementById('container')

const tableData = function () {
let tds= document.querySelectorAll('td')
for (let i = 0; i < tds.length; i++) {
    const td = tds[i];
    td.classList.add("b-green")
}
}
tableData();

const changeHeading = function () {
    let h=document.querySelector('h1')
    h.innerText="Hello I have been changed"
}
changeHeading()

const addExtrarowToTable = function () {
let t= document.getElementById('container')
let row = t.insertRow(0);

let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);

cell1.innerHTML = "am new here";
cell2.innerHTML = "am new here";
console.log(t)
}
addExtrarowToTable()

const addClassToTableRow = function () {
    const title = document.querySelectorAll("tr");
for(let i=0;i<title.length;i++){
    let tr=title[i]
    tr.classList.add("test");
}
  };
  addClassToTitle();

  const addBackground = function () {
      let link=document.querySelectorAll('a')
      for(let i=0;i<link.length;i++){
        let lr=link[i]
        tr.classList.add("b-green")
    }
  }
addBackground()
