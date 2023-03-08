//traversing dom
var itemList=document.querySelector('#items');
//parentnode
//console.log(itemList.parentNode);
//parentelement
//console.log(itemList.parentNode);
//itemList.parentElement.style.backgroundColor='#F4F4F4';
//console.log(itemList.parentElement.parentElement.parentElement);
//createchild
//console.log(itemList.childNodes);
//firstchild
//console.log(itemList.firstChild);
//firstelementchild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello1';
//lastelementvhild
//console.log(itemList.lastElementChild);
//nextsibling
//console.log(itemList.nextSibling);
//nextelementsibling
//console.log(itemList.nextElementSibling);
//previoussibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';
//createelement
//createDiv
var newDiv=document.createElement('div');
//addclass
newDiv.className='hello';
//addId
newDiv.id='hello1'
//addAttribute
newDiv.setAttribute('title','hello Div');
//createtextnode
var newDivText=document.createTextNode('Hello world');
//AddtextDiv
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);


