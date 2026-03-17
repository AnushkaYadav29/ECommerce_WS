
//Local Storage-
// 1.setItem()-used to store item
// getitem()
// 2.JSON.stringify() - to convert object into string
// 3.JSON.parse()-to convert string to object



str='Batch81'

localStorage.setItem('batch',str)
str2=localStorage.getItem('batch')
console.log(str2)

objBatch={
    id:225,
    name:'Batch81'

}

localStorage.getItem('b',JSON.stringify(objBatch))
newObj=JSON.parse(localStorage.getItem('b'))

console.log(newObj)
console.log(typeof(newObj))