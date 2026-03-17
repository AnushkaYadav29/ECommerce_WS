
titleElmt=document.querySelector('#title')
descriptionElmt=document.querySelector('#description')
categoryElmt=document.querySelector('#category')
brandElmt=document.querySelector('#brand')
priceElmt=document.querySelector('#price')
quantityElmt=document.querySelector('#quantity')

const renderProductsElmt=document.querySelector('#renderProducts')


products=[]

function saveToLocal(p){
    localStorage.setItem('B81',JSON.stringify(p))
}

function getFromLocal(){
    return JSON.parse(localStorage.getItem('B81'))
}

function renderProducts(){
    renderProducts=getFromLocal()
    renderProductsElmt.innerHTML=renderProducts.map((prod,i)=>`
            <div class='col-12 col-md-6 col-lg-3'>
                <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            </div>
    `).join('')
}


function AddNewProduct(){
    titleV=titleElmt.value
    descrV=descriptionElmt.value
    categoryV=categoryElmt.value
    brandV=brandElmt.value
    priceV=Number(priceElmt.value)
    quantityV=Number(quantityElmt.value)

   let newProduct={
        id: Date.now(),
        title:titleV,
        description:descrV,
        category:categoryV,
        brand:brandV,
        price:priceV,
        quantity:quantityV
    }

    getProd=getFromLocal()
    console.log(getProd)
    getProd.push(newProduct)
    console.log(getProd)
    
    saveToLocal(getProd)
    renderProducts()

    titleElmt.value=''
    descriptionElmt.value=''
    categoryElmt.value=''
    brandElmt.value=''
    priceElmt.value=''
    quantityElmt.value=''

    //close modal
    let modal = bootstrap.Modal.getInstance(document.getElementById('addProduct'));
    modal.hide();

}

window.addEventListener('DOMContentLoaded',()=>{
    let getProd = getFromLocal();

    if(!getProd){
        saveToLocal([]);
    }

    renderProducts(); // ✅ call after initialization
});

// window.addEventListener('DOMContentLoaded',()=>{

//     getProd=getFromLocal()
// if(!getProd){
// saveToLocal(products)
// }
// renderProducts()
// })





































//Local Storage-
// 1.setItem()-used to store item
// getitem()
// 2.JSON.stringify() - to convert object into string
// 3.JSON.parse()-to convert string to object



// str='Batch81'

// localStorage.setItem('batch',str)
// str2=localStorage.getItem('batch')
// console.log(str2)

// objBatch={
//     id:225,
//     name:'Batch81'

// }

// localStorage.getItem('b',JSON.stringify(objBatch))
// newObj=JSON.parse(localStorage.getItem('b'))

// console.log(newObj)
// console.log(typeof(newObj))



















