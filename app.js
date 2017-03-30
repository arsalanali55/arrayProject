 
 
//  3
//  var stringArray = ["Arsalan", "Ali", "Batch 4.1"]
//  console.log(stringArray)


// 4
// var numArray= [1,2,3,4,5,6,7,8,9,0]
// console.log(numArray)


// 5
// var booleanArray = [true, false]
// console.log(booleanArray)


// 6
// var mixed = ["Arsalan", "Batch", 4.1, 3517, true]
// console.log(mixed)


// 7
// var networks = ["Jazz", "Zong", "Telenor", "Ufone"]
// console.log(networks)


// 8 
// var qualification = ["1) SSC", "<br> 2) HSC", "<br> 3) BSC", " <br> 4) BS", "<br> 5) BCOM",
//  " <br> 6) MS", "<br> 7) M.Phil", "<br> 8) PhD" ]
//  document.write("Qualifications" +"<br><br>" + qualification)


// 9
// document.write("<h3>Top Moives of 2015</h3> ")
// var movies = []

// movies[0] = "<br> 1) Avengers"
// movies[1] = "<br> 2) Spectre"
// movies[2] = "<br> 3) Jurrasic World"
// movies[3] = "<br> 4) Inside Out"

// document.write(movies)
// document.write("<br><br> Length of the array :  " + movies.length)


// 10
// var favCars = [" Ferrari ", " BMW ", " Mercedez Benz ", " Lamborghini "]

// console.log("Favorite Cars :  " + favCars)
// console.log("Fist index of the array is : 0 ")
// console.log("Car at the first index of array : " + favCars[0])
// console.log("Fist index of the array is : 3 ")
// console.log("Car at the last index of array : " + favCars[3])


// 11
// var students = ["Arsalan", "Salman", "Bilal"]
// var scores = [400, 350, 320]

// console.log("Scores of " + students[0] + " is " + scores[0] + ". Percentage : " + (scores[0]/500)*100 + "%")
// console.log("Scores of " + students[1] + " is " + scores[1] + ". Percentage : " + (scores[1]/500)*100 + "%")
// console.log("Scores of " + students[2] + " is " + scores[2] + ". Percentage : " + (scores[2]/500)*100 + "%")



12
var colors = []
colors[2] = prompt("Add the color you want to add at the begging", "Red")
colors[3] = prompt("Add the color you want to add at the ending", "Orange")

console.log(colors[2])
console.log(colors[3])
console.log(colors)
colors.unshift("Green", "Blue")
console.log(colors)
colors.shift(colors[0])
console.log(colors)
