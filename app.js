var student1 = {
    name: 'Umair',
    father: 'umair amir',
    id: 1,
    Contant: 03150246641,
    cnic: 42420125520489,

}
var student2 = {
    name: 'Talha',
    father: 'talha amir',
    id: 2,
    Contant: 03150246641,
    cnic: 42420125520489,

}
var student3 = {
    name: 'Usama',
    father: 'usama amir',
    id: 3,
    Contant: 03150246641,
    cnic: 42420125520489,

}
var student4 = {
    name: 'Wasim',
    father: 'wasim amir',
    id: 4,
    Contant: 03150246641,
    cnic: 42420125520489,

}
var student5 = {
    name: 'Sameer',
    father: 'sameer amir',
    id: 5,
    Contant: 03150246641,
    cnic: 42420125520489,

}




console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)


var arry = []

arry.push(student1, student2, student3, student4, student5)

var idNum = 1
var idNum = 2
var idNum = 3
var idNum = 4
var idNum = 5
var search = document.getElementById('mi6')
console.log(arry)

var show = document.getElementById('show')
function sea() {
    for (var i = 0; i < arry.length; i++) {
        if (search.value == arry[i].id) {
            show.innerHTML = "Name: "+ arry[i].name
            console.log(arry[i])
        }
    }

}
