const lib =[
    {
        title:'hello',
        author:'John',
        status:{
         own:true,
         reading:false,
         read:false
        }
    },
     {
        title:'world',
        author:'Jane',
        status:{
         own:true,
         reading:false,
         read:false
        }
    },
     {
        title:'happy',
        author:'James',
        status:{
         own:true,
         reading:false,
         read:false
        }
    }
]

lib[0].status.read=true;
lib[0].title = 'first book';
const [title ='first book'] = lib[0];
console.log('first book')