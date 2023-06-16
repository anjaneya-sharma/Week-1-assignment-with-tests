// console.log("SSDN SGN JMT JB");

var str1="nouu";
var str2="jaes";

var dict1={};
var dict2={};

for(let i=0 ; i<str1.length ; i++){
  if(str1[i] in dict1){
    dict1[str1[i]]++;
  }
  else dict1[str1[i]]=1;
}

for(let i=0 ; i<str2.length ; i++){
  if(str2[i] in dict2){
    dict2[str2[i]]++;
  }
  else dict2[str2[i]]=1;
}


console.log(dict1,dict2);