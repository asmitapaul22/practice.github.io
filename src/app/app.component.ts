import { Component, HostListener, inject, Inject } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import {NewserviceService} from './newservice.service';
// import { MyserviceService } from './myservice.service';

import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewserviceService],
  preserveWhitespaces:false
})
export class AppComponent {
  temp = false;
  title = 'practice1';
  private _NewserviceService: any;
  text:string;
  cllg: any[];

  toggle(){
    this.temp=!this.temp;
  }
  // constructor(@Inject(MyserviceService)myserviceService)
  // {
  //   console.log(myserviceService);
  //   console.log("hi this is component");
  // }
  // @HostListener("click",["$event"])
  // onhostclick(event:Event)
  // {
  //   alert("hello");
  // }
  checkingIf=true
  btnclick()
  {
    alert("you clicked me");
  }
  isvalid:boolean=true;
  changevalue(valid)
  {
    this.isvalid=valid;
  }
  public choice='';
  setvalue(drp:any)
  {
    this.choice=drp.target.value;
  }

  students:any[]=[
    {
      'name':'rahul'
    },
    {
      'name':'rohit'
    },
    {
      'name':'rohan'
    },
    {
      'name':'rajesh'
    },
    {
      'name':'ramesh'
    }
  ]
  teachers:any[];
// constructor(){
//   this.teachers=[
//   {
//     teacherid:1,
//     name:"atul",
//     gender:"male",
//     age:34,
//     course:"MCA"
//   },
//   {
//     teacherid:2,
//     name:"anand",
//     gender:"male",
//     age:34,
//     course:"MCA"
//   },
//   {
//     teacherid:3,
//     name:"aman",
//     gender:"male",
//     age:14,
//     course:"MCA"
//   },
//   {
//     teacherid:4,
//     name:"ajay",
//     gender:"male",
//     age:24,
//     course:"MCA"
//   }
//   ];
// }
getmoreteachers():void{
  this.teachers=[
  {
    teacherid:1,
    name:"atul",
    gender:"male",
    age:34,
    course:"MCA"
  },
  {
    teacherid:2,
    name:"anand",
    gender:"male",
    age:34,
    course:"MCA"
  },
  {
    teacherid:3,
    name:"aman",
    gender:"male",
    age:14,
    course:"MCA"
  },
  {
    teacherid:4,
    name:"ajay",
    gender:"male",
    age:24,
    course:"MCA"
  },
  {
    teacherid:5,
    name:"ajit",
    gender:"male",
    age:24,
    course:"MCA"
  }
  ]; 
}
trackbyteacherid(index:number,teacher:any):string{
  return teacher.teacherid

}
countrydetails:any[]=[
  {
    'country':'india',
    'people':[
      {
        'name':'ajeet kumar'
      },
      {
        'name':'ajeet kumar'
      },
      {
        'name':'ajeet kumar'
      }
    ]
  },
  {
    'country':'uk',
    'people':[
      {
        'name':'alena'
      },
      {
        'name':'john'
      },
      {
        'name':'james'
      }
    ]
  },
];
places:any[]=[
  {
    'name':'amit',
    'city':'meerut'
  },
  {
    'name':'aman',
    'city':'durg'
  },
  {
    'name':'atul',
    'city':'ambala'
  },
  {
    'name':'ajit',
    'city':'durg'
  },
  {
    'name':'anand',
    'city':'meerut'
  }
];
getcolor(city)
{
  switch(city)
  {
    case 'meerut':
      return 'red';
    case 'maroda':
      return 'yellow';
    case 'ambala':
      return 'green';
    case 'durg':
      return 'blue';
    case 'tripura':
      return 'orange';  
  }
}

users=[
  'aaaa',
  'hhhhh',
  ];

getcssclass(flag:string)
{
  let cssclass;
  if(flag=="mode")
  {
    cssclass={
    'one': true,
    'two': true
  }
}
  else{
    cssclass={
      'one':false,
      'two':true

    }

  }
  return cssclass;
}


// interpolation
empfirstname:string='ASMITA';
emplastname:string='PAUL';
a:number=10;
b:number=20;
// property binding
firstname:string='Asmita';

// attribute binding
cols:number=3;
bdr:number=5;

// event binding
showdata()
{
  console.log("event binding is working");
}
show()
{
  alert("hello");
}

// two way data binding
data:string="abcdef";
datan:string="fhgghghgh";

// pipe
companies:any[]=[
  {
  code:'emp001',name:'asmita',salary:85000,dob:'02/02/2000'
  },
  {
    code:'emp001',name:'arpita',salary:95000,dob:'02/02/1980'
    },
    {
      code:'emp001',name:'asmita',salary:85000,dob:'02/02/2000'
      },
      {
        code:'emp001',name:'asmita',salary:85000,dob:'02/02/2000'
        },
        {
          code:'emp001',name:'asmita',salary:85000,dob:'02/02/2000'
          }
];

//parametrized pipe
dob= new Date(1986,8,2)

salary:number=850000;

//multiple pipes
name:string="rahul";
position:string="software devloper";
work:string="software dvelopement";
// pipes examples
currentdate=new Date();
mynum:number=0.265769238;
// custom pipes
ppls:any=[{
code:'001',name:'ajeet',gender:'male',salary:'56000'
},
{
  code:'002',name:'anita',gender:'female',salary:'96000'
  },
  {
    code:'003',name:'rita',gender:'female',salary:'86000'
    },
    {
      code:'004',name:'yash',gender:'male',salary:'59000'
      },
      {
        code:'005',name:'aman',gender:'male',salary:'45000'
        }
];
// constructor(private router:Router){}
//   student()
//   {
//     this.router.navigate(['/student']);
//   }
constructor(private _newservice:NewserviceService){}

ngOnInit()
{
  this.cllg=this._newservice.college
  this.text=this._newservice.display();
}
}

