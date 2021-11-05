saved_data={}


function main_sec(a)    // ADD A SECTION TO MAIN
{
    
    x=document.createElement('details')

    y=document.getElementById('section-title').value
    // if (saved_data[y])
    // {
    //     console.log(`${y} is already present`)
    // }
    // else
    // {

    //     console.log(saved_data)
    //     saved_data.y={}
        document.getElementById('section-title').value=""

        x.innerHTML=
        `
            <summary>${y}
                

            <div class="dropdown ml-3 " style="display:inline-block">
                <button class="btn bg-transparent  " type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                    <div class="three-lines"></div>
                    <div class="three-lines"></div>
                    <div class="three-lines"></div>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button class="dropdown-item" onclick="duplicate(this)">Add a Section</button>
                    <button class="dropdown-item" onclick="demo_note12(this)">Add a Note</button>
                </div>
            </div>    

            </summary>


            

        `

        x.style.marginLeft="10px"
        
        z=document.getElementById('content')

        z.appendChild(x)
    // }
}

var section_add=null

function duplicate(a)
{          
    console.log(a)
    $('#modal_popup').modal('toggle')
    section_add=a
}

function create_section()
{
    console.log(document.getElementById('section-title-input').value)
    console.log("Inside creation of new section")

    console.log("A section will be added")

    x=document.createElement('details')

    y=document.getElementById('section-title-input').value

    document.getElementById('section-title-input').value=""

    x.innerHTML=
    `
        <summary>${y}
            

        <div class="dropdown mx-3 " style="display:inline-block">
            <button class="btn bg-transparent  " type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                <div class="three-lines"></div>
                <div class="three-lines"></div>
                <div class="three-lines"></div>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button class="dropdown-item" onclick="duplicate(this)">Add a Section</button>
                <button class="dropdown-item" onclick="demo_note12(this)">Add a Note</button>
            </div>
        </div>    

        </summary>


        

    `

    x.style.marginLeft="17px"
    
    
    section_add.parentElement.parentElement.parentElement.parentElement.appendChild(x)

}


var text_add=null

function create_note()
{
    z=text_add.parentElement.parentElement.parentElement.parentElement

    y=document.createElement('p')
    y.innerText=document.getElementById('text-input').value

    document.getElementById('text-input').value=""

    y.style.marginLeft="17px"

    y.style.paddingTop="5px"
    y.style.marginBottom="5px"

    z.appendChild(y)

}






function demo_note12(a) 
{
    note12(a)
}

function note12(x)  //ADD A NOTE FROM CHILDREN
{

    $('#modal_popup_text').modal('toggle')
    text_add=x
}

function main_note(a)       // ADD A NOTE TO MAIN 
{
    
    d1=document.getElementById('content')
    p1=document.createElement('p')
    
    p1.innerText=document.getElementById('notes').value



    document.getElementById('notes').value=""
    p1.style.marginLeft="10px"
    d1.appendChild(p1)
}









function demo_1234(a)                // FUNCTION TO TOGGLE DROP DOWN MENU OF ALL OPEN DROPDOWN's EXCEPT THE ACTIVE ONE
{

    var x=document.getElementsByClassName('dropdown-content')
    // console.log(x)
    for(var i=0;i<x.length;i++)
    {
        if(x[i]!=a.nextElementSibling)
        {
            x[i].classList.toggle("show",false)
        }
        else
        {
            a.nextElementSibling.classList.toggle("show")
        }
        
    }
    
}


function funcaddsection(a1)     // FUNCTION TO ADD SECTION FROM CHILDERENS
{

    console.log("Inside creation of new section")

    console.log("A section will be added")

    console.log(a1.parentElement.parentElement.parentElement.parentElement)

    let newe0=a1.parentElement.parentElement.parentElement.parentElement

    console.log(a1)

    let newe1=document.createElement("details")
    let newe2=document.createElement("summary")
    newe2.innerText="What is your name?"

    let newe3=document.createElement('div')

    newe3.classList.add('dropdown')

    let newe4=document.createElement('button')
    
    newe4.classList.add('dropbtn')
    newe4.setAttribute('id','drpbtn')

    newe4.onclick=function()
    {
        demo_1234(this)
    } 



    let newe5=document.createElement('span')
    newe5.style.backgroundColor="black"
    newe5.classList.add('drop-btn-span')

    let newe6=document.createElement('div')
    newe6.classList.add('three-lines')
    let newe7=document.createElement('div')
    newe7.classList.add('three-lines')
    let newe8=document.createElement('div')
    newe8.classList.add('three-lines')

    newe5.appendChild(newe6)
    newe5.appendChild(newe7)
    newe5.appendChild(newe8)

    newe4.appendChild(newe5)

    newe3.appendChild(newe4)

    let newe9=document.createElement('div')

    newe9.classList.add('dropdown-content')
    newe9.setAttribute('id','myDropdown')

    let newe10=document.createElement('button')
    let newe11=document.createElement('button')


    newe10.innerHTML="Add a Section"
    newe10.classList.add('add-sec')
    // newe10.setAttribute('data-toggle','modal')

    newe10.onclick=function()
    {
        duplicate(this)
    }

    
    
    newe9.appendChild(newe10)

    newe9.appendChild(newe11)

    console.log(newe9)

    newe3.appendChild(newe9)
    
    newe2.appendChild(newe3)
    newe1.appendChild(newe2);





    newe1.style.marginLeft="19px"
    newe1.style.marginTop="10px"
    newe0.appendChild(newe1)



    console.log("Click Event Listener Added")
}


document.addEventListener('click',(evt)=>   // TO TOGGLE MENU ON CLICK AND ON OUTSIDE CLICK
{

    obj1=document.querySelectorAll(':not(.dropbtn,.dropbtn span,.three-lines)')
    

    let a=['drop-btn-span','dropbtn','three-lines']
    let b=true
    for(var i=0;i<3;i++)
    {
        if (    a[i]===String(evt.target.classList) )
        {
            console.log("Toggle")            
            b=false
        }
        
    }
    if(b===true)
    {
        console.log("Close All")
        obj2=document.querySelectorAll('.dropdown-content')
        for(var i=0;i<obj2.length;i++)
        {
            obj2[i].classList.toggle('show',false)
        }
    }    
})











// OBSELETE CODE-1
// newe10.setAttribute('data-toggle','modal')

    // newe10.onclick=function()
    // {
    //     duplicate(this)
    // }

    // let mod1=document.createElement('div')
    // mod1.classList.add("modal")
    // mod1.setAttribute("tabindex",'-1')
    // mod1.setAttribute("role",'dialog')

    // let mod2=document.createElement('div')
    // mod2.classList.add("modal-dialog")
    // mod2.setAttribute('role','document')
    // mod1.appendChild(mod2)

    // let mod3=document.createElement('div')
    // mod3.classList.add("modal-content")
    // mod2.appendChild(mod3)

    // let mod4=document.createElement('div')
    // mod4.classList.add("modal-header","text-center")
    // mod3.appendChild(mod4)

    // let mod5=document.createElement('h4')
    // mod5.classList.add("modal-title","w-100","font-weight-bold")
    // mod5.innerText="Section Title"
    // mod4.appendChild(mod5)

    // let mod6=document.createElement('button')
    // mod6.classList.add("close")
    // mod6.setAttribute('type','button')
    // mod6.setAttribute('data-dismiss','modal')
    

    // let mod7=document.createElement('span')
    
    // mod7.innerText="&times;"
    // mod6.appendChild(mod7)

    // mod4.appendChild(mod6)
    
    // let mod8=document.createElement('div')
    // mod8.classList.add("modal-body","mx-3")
    // let mod9=document.createElement('md-form','mb-3')
    // mod8.appendChild(mod9)
    // let mod10=document.createElement('input')
    // mod10.classList.add("form-control")
    // mod10.setAttribute('type','text')
    // mod10.setAttribute('placeholder','Enter title of section here ')
    // mod9.appendChild(mod10)
    // mod3.appendChild(mod8)

    // let mod11=document.createElement('div')
    // mod11.classList.add('modal-footer','d-flex','justify-content-center')
    // let mod12=document.createElement('button')
    // mod12.classList.add('btn','btn-primary','close')
    // mod12.setAttribute('data-dismiss','modal')
    // mod12.innerText="Create"
    // mod11.appendChild(mod12)

    // mod3.appendChild(mod11)

//


//OBSOLETE CODE-2

// function demo12(a)      // FUNCTION TO CALL ADD SECTION FUNCTION
// {
//     console.log("Add a section")
    
    
//     console.log(a.nextElementSibling)
//     a.setAttribute("data-target",a.nextElementSibling)
//     console.log($(a))
//     $(a.nextElementSibling).modal()
//     console.log(a)
//     // funcaddsection(a)
    
// }


// OBSELETE CODE-3

//let a2=document.getElementsByClassName('add-notes')        //Add a note

// for(let i=0;i<a2.length;i++)
// {
//     a2[i].addEventListener('click',()=>
//     {
//         console.log(a2[i].parentElement.parentElement.parentElement.parentElement)

//         let newe1=a2[i].parentElement.parentElement.parentElement.parentElement
//         let newe2=document.createElement('p')
//         newe2.innerText="My name is Arshad"
//         newe2.style.marginTop="10px"
//         newe2.style.marginLeft="10px"
//         newe1.appendChild(newe2)
//     })
// }


//OBSOLETE CODE-4

// y=document.createElement('summary')
// y.innerText=document.getElementById('section-title').value


// let newe3=document.createElement('div')

// newe3.classList.add('dropdown')

// newe3.style.marginLeft="10px"

// let newe4=document.createElement('button')

// newe4.classList.add('dropbtn')
// newe4.setAttribute('id','drpbtn')

// newe4.onclick=function()
// {
//     demo_1234(this)
// } 


// let newe5=document.createElement('span')
// newe5.style.backgroundColor="black"
// newe5.classList.add('drop-btn-span')

// let newe6=document.createElement('div')
// newe6.classList.add('three-lines')
// let newe7=document.createElement('div')
// newe7.classList.add('three-lines')
// let newe8=document.createElement('div')
// newe8.classList.add('three-lines')

// newe5.appendChild(newe6)
// newe5.appendChild(newe7)
// newe5.appendChild(newe8)

// newe4.appendChild(newe5)

// newe3.appendChild(newe4)


// let newe9=document.createElement('div')

// newe9.classList.add('dropdown-content')
// newe9.setAttribute('id','myDropdown')

// let newe10=document.createElement('button')
// let newe11=document.createElement('button')


// newe10.innerHTML="Add a Section"
// newe10.classList.add('add-sec')


// newe10.onclick=function()
// {
//     duplicate(this)
// }



// newe11.innerHTML="Add a Note"
// newe11.classList.add('add-notes')

// newe11.onclick=function()
// {
//     demo_note12(this)
// }

// newe9.appendChild(newe10)

// // newe9.appendChild(mod1)

// newe9.appendChild(newe11)

// newe3.appendChild(newe9)


// y.appendChild(newe3)
// x.appendChild(y);