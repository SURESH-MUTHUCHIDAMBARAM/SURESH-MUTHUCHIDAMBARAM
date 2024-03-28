let shop = document.getElementById('shop');

let basket=JSON.parse(localStorage.getItem("data")) || []

let shopitemsdata=[{
id:"suresh",
name:'black shirt',
price:550,
desc:"lorem8",
img:'shirt black.jpg'
},
{
id:"ram",
name:' red&black shirt',
price:450,
desc:"lorem8",
img:'shirt red& black.jpg'
},
{
id:"kani",
name:'white shirt',
price:600,
desc:"lorem8",
img:'shirt white.jpg'
},
{
id:"mani",
name:'yellow shirt',
price:400,
desc:"lorem8",
img:'shirt yellow.jpg'
}]


let generateshop=()=>{
    return(shop.innerHTML = shopitemsdata.map((x)=> {
        let{id,name,price,desc,img}=x;
        let search=basket.find((x)=>x.id === id) ||[];
        return`
        <div id=product-id-${id}  class="item">
            <img  width=220 src="${img}">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h4>$${price}</h4>
                    <div class="buttons">
                        <button onclick="decrement(${id})">-</button>
                        <div id=${id} class="quantity">
                        ${search.item === undefined? 0:search.item}
                        </div>
                        <button onclick="increment(${id})">+</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join(""))
};
  

generateshop();

let increment =(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>x.id===selectedItem.id);

    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        })
    }
    else{
        search.item +=1
    }
    // console.log(basket)
    update(selectedItem.id)
    localStorage.setItem("data",JSON.stringify(basket));
}
let decrement =(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>x.id===selectedItem.id);
     if(search === undefined)return;
     else if(search.item === 0)return;
     else{
        search.item -= 1
     }
     
     basket = basket.filter((x)=>x.item !== 0);
    // console.log(basket)
    update(selectedItem.id);
    localStorage.setItem("data",JSON.stringify(basket));
}
let update =(id)=>{
    let search=basket.find((x)=>x.id ===id);
    // console.log(search.item);
    document.getElementById(id).innerHTML=search.item;
    calculate()
};
let calculate=()=>{
    let carticon=document.getElementById('cart-amount');
    carticon.innerHTML=basket.map((x)=>x.item).reduce((x,y) => x+y,0);
    // console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0))
};
 calculate();

