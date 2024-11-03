let transactions_list=[
    [type='Income',source='Monthly Salary',amount=500,date= new Date('2024/2/24')],
    [type='Expense',source='Roadster Dinner',amount=100,date=new Date('2024/11/24')],
    [type='Expense',source='Spinnes',amount=40,date=new Date('2024/3/24')],
    [type='Income',source='OMT Gift',amount=100,date=new Date('2024/2/24')],
    [type='Expense',source='Alfa Cart',amount=10,date=new Date('2024/5/24')],
]
let total_budget=document.getElementById('total');
let total=0;
let i=0;
const loadedArray = loadArrayFromLocalStorage();
transactions_list=loadedArray;
  buildTable(transactions_list);
  console.log(loadedArray); 

while(i<transactions_list.length){
    if(transactions_list[i][0]=="Income")
        total+=parseInt(transactions_list[i][2]);
    else{
        total-=parseInt(transactions_list[i][2]);
    }
    i++
}
total_budget.innerHTML=total+'$';


let create=document.getElementById('create');
let inputs=document.getElementById('inputs');    
create.addEventListener('click',()=>{
    inputs.innerHTML =  ` 
                  <div class="on-col">
                  <div class="on-line width70">
                        <p class="primary-color">Type: </p>
                        <div class="primary-color">Income</div>
                        <input type="radio" name="type" id="input-type" value="Income">
                        <p class="primary-color">Expense</p>
                        <input type="radio" name="type" id="input-type" value="Expense">
                        <p class="primary-color">Source:</p>
                        <input type="input" class="inputs" id="input-source">
                        <div id="exit" class="primary-color" >✖</div>
                  </div>
                  <div class="on-line width60">
                        <p class="primary-color">Amount:</p>
                        <input type="input" class="inputs" id="input-amount">
                        <p class="primary-color">Date:</p>
                     <input type="Date" class="inputs" id="input-date">
                     <div id="create-btn" class="primary-color padding" >Create</div>
                  </div>
                
                 
                  </div>  
                  `;

    
let create_btn=document.getElementById('create-btn');
create_btn.addEventListener('click',()=>{
    let input_type=document.getElementById('input-type').value;
if(input_type!=="Income")
        console.log("Expense");
    let input_source=document.getElementById('input-source').value;
    let input_amount=document.getElementById('input-amount').value;
    let input_date=document.getElementById('input-date').value;
    
       // console.log(input_amount.value)
    
    
    let row=[input_type,input_source,input_amount,input_date];
    transactions_list.push(row);
    console.log(transactions_list);
      saveArrayToLocalStorage(transactions_list);
    buildTable(transactions_list);
    
})
let exit=document.getElementById('exit');
      exit.addEventListener('click',()=>{
        inputs.innerHTML="";
      })
      
})


let all=document.getElementById('all');
let min=document.getElementById('min-amount');
let max=document.getElementById('max-amount');
let income=document.getElementById('income');
let expense=document.getElementById('expense');
let _date=document.getElementById('date');
//date_var= new Date(_date);



function buildTable(table){
    let tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
table.forEach((transaction,index) => {
    const row = tableBody.insertRow();
    //(transaction[3].getDate())+
    //date='/'+(transaction[3].getMonth()+1)+'/'+(transaction[3].getFullYear());
    row.insertCell(0).innerText = transaction[0];
    row.insertCell(1).innerText = transaction[1];
    row.insertCell(2).innerText = transaction[2];
    row.insertCell(3).innerText = transaction[3];

     editButton = document.createElement('edit-btn');
        editButton.innerText = ' ✎ ';
        editButton.addEventListener('click',() => editTransaction(index))
        editButton.style.padding='20px';
        //row.insertCell(4).appendChild(editButton);

     deleteButton = document.createElement('delete-button');
     deleteButton.style.padding='20px';
        deleteButton.innerText = ' ✖ ';
        deleteButton.addEventListener('click',() => deleteTransaction(index))
        //row.insertCell(5).appendChild(deleteButton);
    let combine=document.createElement('combine');
        combine.appendChild(editButton);
        combine.appendChild(deleteButton);
        
        row.insertCell(4).appendChild(combine);

});
}

function editTransaction(index) {
    let transaction = transactions_list[index];
    inputs=document.getElementById('inputs'); 
    inputs.innerHTML =  ` 
        <div class="on-col">
                  <div class="on-line width70">
                        <p class="primary-color">Type: </p>
                        <div class="primary-color">Income</div>
                        <input type="radio" name="type" id="input-type" value="Income">
                        <p class="primary-color">Expense</p>
                        <input type="radio" name="type" id="input-type" value="Expense">
                        <p class="primary-color">Source:</p>
                        <input type="input" class="inputs" id="input-source">
                        <div id="exit" class="primary-color" >✖</div>
                  </div>
                  <div class="on-line width60">
                        <p class="primary-color">Amount:</p>
                        <input type="input" class="inputs" id="input-amount">
                        <p class="primary-color">Date:</p>
                        <input type="Date" class="inputs" id="input-date">
                     <div id="view-btn" class="primary-color padding" > Save </div>
                  </div>
                
                 
                  </div>  
                    
                  `;
      let input_type=document.getElementById('input-type').value; 
      input_type.innerHTML=input_type;
      let input_source=document.getElementById('input-source');
      console.log(transactions_list[index][1]);
      //console.log(input_source.value);
      input_source.value=transactions_list[index][1];
      let input_amount=document.getElementById('input-amount');
      input_amount.value=transactions_list[index][2]
      let input_date=document.getElementById('input-date');
      //console.log(input_date.value.getFullYear)
      input_date.value=transactions_list[index][3]
      let view_btn=document.getElementById('view-btn'); 

      view_btn.addEventListener('click',()=>{

    let input_type=document.getElementById('input-type').value;
    if(input_type!=="Income")
        console.log("Expense");
    let input_source=document.getElementById('input-source').value;
    let input_amount=document.getElementById('input-amount').value;
    let input_date=document.getElementById('input-date').value;
    
       // console.log(input_amount.value)
    
    
    let row=[input_type,input_source,input_amount,input_date];
    transactions_list[index]=row; 
    saveArrayToLocalStorage(transactions_list);
    buildTable(transactions_list);  

      })
      let exit=document.getElementById('exit');
      exit.addEventListener('click',()=>{
        inputs.innerHTML="";
      })

}
function deleteTransaction(index) {
    
        transactions_list.splice(index, 1); 
        saveArrayToLocalStorage(transactions_list);
    
        buildTable(transactions_list); 
    
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
            if(temp[j][2]<temp[i][2])
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
            if(temp[j][2]>temp[i][2])
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
        if(transactions_list[i][0]==='Income'){
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
        if(transactions_list[i][0]==='Expense'){
            temp[j]=transactions_list[i];
            j++;
        }
        i++;
    }
buildTable(temp);
});
_date.addEventListener('click',()=>{

});
function saveArrayToLocalStorage(list) {
    localStorage.setItem('my-table', JSON.stringify(list));
  }

function loadArrayFromLocalStorage() {
    const storedArray = localStorage.getItem('my-table');
    return storedArray ? JSON.parse(storedArray) : [];
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
    element_section.innerHTML=`<div>type:  ${element[1]}</div>`;
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

row.innerHTML =  `Input the Id of the user you want source make the transaction source: <div class="word"><input type="text"></div> 
                  Input the Money you want source transfer: <div class="word"><input type="text"></div> 
                  <butsourcen class="butsourcen primary-color">Create</butsourcen>`;
//row.style.display = 'block';

});
///
let view_btn=document.getElementById('view');
let edit_btn=document.getElementById('edit');
let delete_btn=document.getElementById('delete');

view_btn.addEventListener('click',()=>{

row.innerHTML =  `Your transactions are as follow: 
                  <div>
                    <butsourcen class="butsourcen primary-color">Edit</butsourcen>
                    <butsourcen class="butsourcen primary-color">Delete</butsourcen>
                  </div>
                  `;
//row.style.display = 'block';

});
///

*/




