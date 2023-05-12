let myInfo = {
    name: "Sasha",
    address: "123 lane",
    city: "Pittsburgh",
    state: "PA",
    zip: 12345,
    isDetermined: true,
}

function printContact(myInfo) {
   console.log("name: " + myInfo.name)  ;
   console.log("address: " + myInfo.address);
   console.log("city: " + myInfo.city);
   console.log("state: " + myInfo.state);
   console.log("zip: " + myInfo.zip);
   
    
    
}

printContact(myInfo)