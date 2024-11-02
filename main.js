let transactions_list=[
    [number=1,from='you',to='1001',amount=50,date='21/2/2024'],
    [number=2,from='1003',to='you',amount=100,date='21/2/2024'],
    [number=3,from='1004',to='you',amount=40,date='21/2/2024'],
    [number=4,from='you',to='1005',amount=20,date='21/2/2024'],
    [number=5,from='1006',to='you',amount=100,date='21/2/2024'],
]
let view_section=document.getElementById('view-section');
let view_col=document.getElementById('view-col');
row=document.getElementById('row');
let element_section=document.getElementById('element');
//element=transactions_list[0];
console.log(element[0]);
transactions_list.forEach(element=>{
    view_col=document.getElementById('view-col');
    //view_section=document.getElementById('view-section');
    document.getElementById('row');

    element_section=document.getElementById('element');
    element_section.innerHTML=`<div>number: ${element[0]}</div>`;
    row.appendChild(element_section);

    element_section=document.getElementById('element');
    element_section.innerHTML=`<div>from:  ${element[1]}</div>`;
    row.appendChild(element_section);

    element_section=document.getElementById('element');
    element_section.innerHTML=`<div>to: ${element[2]}</div>`;
    row.appendChild(element_section);

    /*element_section=document.getElementById('element');
    element_section.innerHTML=`<div>amount: ${element[3]}</div>`;
    row.appendChild(element_section);

    element_section=document.getElementById('element');
    element_section.innerHTML=`<div>date: ${element[4]}</div>`;
    row.appendChild(element_section);*/

    //view_section.appendChild(row);
    view_col.appendChild(row);
})

/////
/*
let create_section=document.getElementById('append');
 row=document.getElementById('row');
let create_btn=document.getElementById('create');
create_btn.addEventListener('click',()=>{

row.innerHTML =  `Input the Id of the user you want to make the transaction to: <div class="word"><input type="text"></div> 
                  Input the Money you want to transfer: <div class="word"><input type="text"></div> 
                  <button class="button primary-color">Create</button>`;
//row.style.display = 'block';

});
///
let view_btn=document.getElementById('view');
let edit_btn=document.getElementById('edit');
let delete_btn=document.getElementById('delete');

view_btn.addEventListener('click',()=>{

row.innerHTML =  `Your transactions are as follow: 
                  <div>
                    <button class="button primary-color">Edit</button>
                    <button class="button primary-color">Delete</button>
                  </div>
                  `;
//row.style.display = 'block';

});
///

*/




