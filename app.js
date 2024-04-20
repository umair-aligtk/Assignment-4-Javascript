

// var array = []
//  document.write(array)

//  var arr1 = ["umair"];
//  document.write(arr1)
//  var arr2 = [12];
//  document.write(arr2)
//  var arr3 = [true];
//  document.write(arr3)
//  var Mix = ["umair",12,true];
//  document.write(Mix)


// var array1 = ["1)SSC <br>" ,"2)HSC <br>", "3) BCS <br>", "3)BS <br>" ,"5)B COM <br>","6)M.S <br>" ,"7) M.Phil<br>", "8)Ph.D <br>" ]


// var studentNames = ["Umair","Wahid ","nadeem"]
// var studentMarks =[320 ,230 ,480]
// var total_score = 500
// document.write ("<h1> Marks of student </h1>" )

// document.write(`score of the  ${studentNames[0]} is : ${studentMarks[0]} 
// <br> percentage ${studentMarks[0] /total_score*100}% <br>`)
// document.write(`score of the  ${studentNames[1]} is : ${studentMarks[1]} <br>
// percentage ${studentMarks[1] /total_score*100}%  <br>`)
// document.write(`score of the  ${studentNames[2]} is : ${studentMarks[2]} <br>
// percentage ${studentMarks[2] /total_score*100}% <br>`)


//var arrayColors = ["White", "black" , "Red", ]
// var one = prompt("Enter color name which you are add in to beggining")
//var two = prompt("Enter color name which you are add in to end ")
//  arrayColors.unshift(one)
//arrayColors.push(two)
// arrayColors.unshift("Orange", "pink")
// document.write(arrayColors)
// arrayColors.shift(arrayColors)
// document.write(arrayColors)
// arrayColors.pop(arrayColors)
// document.write(arrayColors)


// F:Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var arrayColors = ["White", "black" , "Red", ]
// var userIndex = prompt("which index  wants to add a color")
// var colorName = prompt("Color name")
// arrayColors.splice ( userIndex,0,colorName);
// document.write(arrayColors)

/////////////////////////////////////////////

// g:Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var arrayColors = ["White", "black" , "Red",'Blue','orange' ]
// var userIndex = prompt("which index  wants to delete a color")
//  var colorName = prompt("Color name")
//   arrayColors.splice (userIndex, userIndex,colorName);
// document.write(arrayColors)

//////////////////////////////////////////////////////

// Q no:10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

//  var marks = [320,230,480,120,]
// document.write(`Scores of student: ${marks} <br>`)
//  var two = marks.sort()
//  document.write(`Ordered scores of student: ${two}`)

// var citiesName = [ 'karachi', 'Hyderabad',' Sukkur', 'Ghotki','Lahore','Islamabad']
// document.write(`Cities Names: <br> ${citiesName} <br>`)
// var copyCities = citiesName.slice(2,5)
// document.write(`Selected cities: <br> ${copyCities}`)
/////////////////////////////////////////////////////////

// Q NO:12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

//  var arr = ['This', 'is', 'my', 'cat']
// document.write(`Array: <br> ${arr}<br> `)
// var joint = arr.join()
// document.write(`String: <br> ${joint}`)
///////////////////////////////////////////

// Q NO:13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var devices = ['Keyboard','Mouse','Printer','Monitor ' ]
// document.write(`Devices: <br> ${devices} <br> `)

// var access = []
// access.push(`Out: <br> Keyboard <br>`)
// access.push(`Out: <br> Mouse <br>`)
// access.push(`Out: <br> Printer <br>`)
// access.push(`Out: <br> Monitor <br>`)
// document.write(`<br>${access}`)

////////////////////////////////////////////////////////////////
// Q NO: 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)
// var devices = ['Keyboard','Mouse','Printer','Monitor ' ]
// document.write(`Devices: <br> ${devices} <br> `)

// var access = []
// access.unshift(`Out: <br> Keyboard <br>`)
// access.unshift(`Out: <br> Mouse <br>`)
// access.unshift(`Out: <br> Printer <br>`)
// access.unshift(`Out: <br> Monitor <br>`)
// document.write(`<br>${access}`)
