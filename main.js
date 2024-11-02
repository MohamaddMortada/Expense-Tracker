let transactions_list=[
    [number=1,from='you',to='1001',amount=50,date='21/2/2024'],
    [number=2,from='1003',to='you',amount=100,date='21/2/2024'],
    [number=3,from='1004',to='you',amount=40,date='21/2/2024'],
    [number=4,from='you',to='1005',amount=20,date='21/2/2024'],
    [number=5,from='1006',to='you',amount=100,date='21/2/2024'],
]
let create_btn=document.getElementById('create');
create_btn.addEventListener('click',()=>{
    input_from=document.createElement('input-from');
    input_from.innerHTML.trim();

})
function buildTable(){
    let tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
transactions_list.forEach((transaction,index) => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = transaction[0];
    row.insertCell(1).innerText = transaction[1];
    row.insertCell(2).innerText = transaction[2];
    row.insertCell(3).innerText = transaction[3];
    row.insertCell(4).innerText = transaction[4];

     editButton = document.createElement('edit-btn');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click',() => editTransaction(index))
        row.insertCell(5).appendChild(editButton);

     deleteButton = document.createElement('delete-button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click',() => deleteTransaction(index))
        row.insertCell(5).appendChild(deleteButton);
});
}

function editTransaction(index) {
    let transaction = transactions_list[index];
    let newAmount = prompt("Edit amount:", transaction[3]);
    if (newAmount !== null) {
        transactions_list[index][3] = parseFloat(newAmount);
        buildTable();
    }
}
function deleteTransaction(index) {
    if (confirm("Are you sure you want to delete this transaction?")) {
        transactions_list.splice(index, 1); 
        buildTable(); 
    }
}
buildTable();
/*
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
    row.appendChild(element_section);

    //view_section.appendChild(row);
    view_col.appendChild(row);
})
*/
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




