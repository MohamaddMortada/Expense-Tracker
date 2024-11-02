let transactions_list=[
    [number=1,from='you',to='1001',amount=50,date='21/2/2024'],
    [number=2,from='1003',to='you',amount=100,date='21/2/2024'],
    [number=3,from='1004',to='you',amount=40,date='21/2/2024'],
    [number=4,from='you',to='1005',amount=20,date='21/2/2024'],
    [number=5,from='1006',to='you',amount=100,date='21/2/2024'],
]
let total_budget=document.getElementById('total');
total_budget.textContent='Total budget: 1000$';

let create=document.getElementById('create');
let inputs=document.getElementById('create-inputs');    
create.addEventListener('click',()=>{
    inputs.innerHTML =  ` 
                  <div>
                    From: <input type="text" id="input-from">
                    To: <input type="text" id="input-to">
                    Amount:<input type="text" id="input-amount">
                    Date:<input type="text" id="input-date">
                    <div class="create" id="create-btn">create</div>
                  </div>
                  `;

    
let create_btn=document.getElementById('create-btn');
create_btn.addEventListener('click',()=>{
    let input_from=document.getElementById('input-from');
    let input_to=document.getElementById('input-to');
    let input_amount=document.getElementById('input-amount');
    let input_date=document.getElementById('input-date');
    console.log(input_from.value)
    let row=[1,input_from.value,input_to.value,input_amount.value,input_date.value];
    transactions_list.push(row);
    saveTable(transactions_list);
    console.log(transactions_list);
    buildTable(transactions_list);
})
})

let all=document.getElementById('all');
let min=document.getElementById('min-amount');
let max=document.getElementById('max-amount');
let income=document.getElementById('income');
let expense=document.getElementById('expense');
let _date=document.getElementById('date');



function buildTable(table){
    let tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
table.forEach((transaction,index) => {
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
        buildTable(transactions_list);
    }
}
function deleteTransaction(index) {
    if (confirm("Are you sure you want to delete this transaction?")) {
        transactions_list.splice(index, 1); 
        buildTable(transactions_list); 
    }
}
all.addEventListener('click',()=> buildTable(transactions_list));
min.addEventListener('click',()=>{
    //console.log('min');
    let temp=transactions_list;
    console.log(temp)
    let i=0;
    let j=0;
    while(i<temp.length){
        j=i+1;
        console.log(j);
        while(j<temp.length){
            if(temp[j][3]<temp[i][3])
                {
                    console.log(temp)
                    let row=temp[j]
                    temp[j]=temp[i]
                    temp[i]=row
                    
                }
                
                j++;}

            i++;
            }
    buildTable(temp);
    
});
max.addEventListener('click',()=>{
    let temp=transactions_list;
    console.log(temp)
    let i=0;
    let j=0;
    while(i<temp.length){
        j=i+1;
        console.log(j);
        while(j<temp.length){
            if(temp[j][3]>temp[i][3])
                {
        
                    let row=temp[j]
                    temp[j]=temp[i]
                    temp[i]=row
                    
                }
                
                j++;}

            i++;
            }
    buildTable(temp);

});
income.addEventListener('click',()=>{
    //temp=transactions_list;
    let temp=[[]];
    let i=0;
    let j=0;
    while (i<transactions_list.length){
        if(transactions_list[i][2]==='you'){
            temp[j]=transactions_list[i];
            j++;
        }
        i++;
    }
buildTable(temp);

});
expense.addEventListener('click',()=>{
    let temp=[[]];
    let i=0;
    let j=0;
    while (i<transactions_list.length){
        if(transactions_list[i][1]==='you'){
            temp[j]=transactions_list[i];
            j++;
        }
        i++;
    }
buildTable(temp);
});
_date.addEventListener('click',()=>{

});
function saveTable(table) {
    
    const table_map = table.map(String);
    localStorage.setItem('table-map', JSON.stringify(table_map));
}
function loadTable() {
    let savedTable = localStorage.getItem('table-map');
    return savedTable ? JSON.parse(savedTable) : [];
}
/*saveTable(transactions_list);
temp=loadTable();
console.log(temp);*/
buildTable(transactions_list);
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




