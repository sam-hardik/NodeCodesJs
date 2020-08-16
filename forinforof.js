var forInList={
    firstName:"First Name",
    lastName:"Last Name",
    gender:"Male/Female",
    contact: 1234567890,
    email:"email@email.com",
}

var forOfList=[
    "Asia",
    "India",
    "Madhya Pradesh",
    "Dewas",
    "Khategaon",
    455336
];

for(const element in forOfList){
    console.log(forOfList[element]);
    // forof loop can only loop through arrays. hence should be used with arrays only.
}


for(const element in forInList){
    
    console.log(forInList[element]); //this will log values of the keys
    //or
    console.log(element); // this will log keys only
    //or
    console.log(`Key is: ${element} and Value is: ${forInList[element]}`); // this will log keys only
    // forin loop can only loop through objects. hence should be used with objects only.
}