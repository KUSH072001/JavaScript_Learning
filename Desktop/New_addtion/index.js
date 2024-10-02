
const allUser = [
    {
      fname: "krishna",
      gender: "male",
    },
    {
      fname: "mira",
      gender: "female",
    },
    {
      fname: "om",
      gender: "male",
    },
  ];
  
  for(let i=0;i<allUser.length;i++){
    if(allUser[i]["gender"]=="male"){
      console.log(allUser[i]["fname"])
    }
  }