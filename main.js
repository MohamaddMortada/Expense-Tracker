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
                  <div class="on-line width90">
                        <p class="primary-color">Type: </p>
                        <div class="primary-color">Income</div>
                        <input type="radio" name="type" id="input-type" value="Income">
                        <p class="primary-color">Expense</p>
                        <input type="radio" name="type" id="input-type2" value="Expense">
                        <p class="primary-color">Source:</p>
                        <input type="input" class="inputs" id="input-source">
                        <div id="exit" class="primary-color padding" >✖</div>
                  </div>
                  <div class="on-line width90">
                        <input type="Date" class="inputs" id="input-date">
                        <div class="primary-color padding6">Amount:</div>
                        <input type="input" class="inputs" id="input-amount">
                        <div id="create-btn" class="primary-color padding" >Create</div>
                  </div>    
                  </div>  
                  `;
let create_btn=document.getElementById('create-btn');
create_btn.addEventListener('click',()=>{ 
    let input_type=document.getElementById('input-type');
    let input_type2=document.getElementById('input-type2');
    if(input_type.checked) radio=input_type;
    if(input_type2.checked) radio=input_type2;
    let input_source=document.getElementById('input-source').value;
    let input_amount=document.getElementById('input-amount').value;
    let input_date=document.getElementById('input-date').value; 
    let row=[radio.value,input_source,input_amount,input_date];
    transactions_list.push(row);
    if(radio.value==='Income') total+=parseInt(input_amount);
    if(radio.value==='Expense') total-=parseInt(input_amount);
    total_budget.innerHTML=total+'$';
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
let latest=document.getElementById('latest');
let earliest=document.getElementById('earliest');
function buildTable(table){
    let tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
table.forEach((transaction,index) => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = transaction[0];
    row.insertCell(1).innerText = transaction[1];
    row.insertCell(2).innerText = transaction[2];
    let i=0;
    let date_var='';
    while(i<10){
        date_var+=transaction[3][i];
        i++;
    }   
    row.insertCell(3).innerText = date_var;
     editButton = document.createElement('edit-btn');
        editButton.innerText = ' ✎ ';
        editButton.addEventListener('click',() => editTransaction(index))
        editButton.style.padding='20px';
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
                  <div class="on-line width90">
                        <p class="primary-color">Type: </p>
                        <div class="primary-color">Income</div>
                        <input type="radio" name="type" id="input-type" value="Income">
                        <p class="primary-color">Expense</p>
                        <input type="radio" name="type" id="input-type2" value="Expense">
                        <p class="primary-color">Source:</p>
                        <input type="input" class="inputs" id="input-source">
                        <div id="exit" class="primary-color padding" >✖</div>
                  </div>
                  <div class="on-line width90">
                        <input type="Date" class="inputs" id="input-date">
                        <div class="primary-color padding6">Amount:</div>
                        <input type="input" class="inputs" id="input-amount">
                     <div id="view-btn" class="primary-color padding" > Save </div>
                  </div>          
                  </div>  
                    
                  `;
     let input_type=document.getElementById('input-type');
      let input_type2=document.getElementById('input-type2'); 
          if(transactions_list[index][0]==="Income") input_type.checked=true;
          if(transactions_list[index][0]==="Expense") input_type2.checked=true;
      //input_type.innerHTML=input_type;
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
      let num=0; 
      if(input_type.checked){
        num=parseInt(input_amount.value)*-1;
      }
      if(input_type2.checked){
        num=parseInt(input_amount.value);
      }
console.log(num)
      view_btn.addEventListener('click',()=>{
    let input_type=document.getElementById('input-type');
    let input_type2=document.getElementById('input-type2');
    let input_source=document.getElementById('input-source').value;
    let input_amount=document.getElementById('input-amount').value;
    let input_date=document.getElementById('input-date').value;
    
       if(input_type.checked) {
        total=total+num;
        total+=parseInt(input_amount);
        radio=input_type;
       }
       if(input_type2.checked){
        total=total+num;
        total-=parseInt(input_amount);
         radio=input_type2;
       }
       total_budget.innerHTML=total+'$';
    let row=[radio.value,input_source,input_amount,input_date];
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
    if(transactions_list[index][0]==="Income") {
        total-=parseInt(transactions_list[index][2]);
       }
       if(transactions_list[index][0]==="Expense") {
        total+=parseInt(transactions_list[index][2]);
       }
       total_budget.innerHTML=total+'$';
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
latest.addEventListener('click',()=>{
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
earliest.addEventListener('click',()=>{
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
                    let row=temp[j]
                    temp[j]=temp[i]
                    temp[i]=row                 
                }           
                j++;}
            i++;
            }
    buildTable(temp);

});
function saveArrayToLocalStorage(list) {
    localStorage.setItem('my-table', JSON.stringify(list));
  }

function loadArrayFromLocalStorage() {
    const storedArray = localStorage.getItem('my-table');
    return storedArray ? JSON.parse(storedArray) : [];
}
buildTable(transactions_list);



