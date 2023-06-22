let array = ["primero","segundo","tercero","cuarto","soy el ultimo elemto" ];
//console.log(array.length);

let newArray=["quinto","sexto"];
newArray[0]="cuarto";

array.splice(4,0, "quinto")
array.splice(5,0, "sexto")

for (let i = 0; i < array.length; i ++) {
    console.log(array[i]);
  }


