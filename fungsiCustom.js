// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack)=>{
  const arrResult = [];
  fs.readFile(
   "./data1.json",
    {encoding : "utf-8"},
   (err,data1)=>{
    if(err){
      return fnCallBack(err,null);
    }else {
      const dataResult1 = JSON.parse(data1);
      arrResult.push(dataResult1.message);

    }
  }
)
fs.readFile(
  "./data2.json",
   {encoding : "utf-8"},
  (err,data2)=>{
   if(err){
     return fnCallBack(err,null);
   }else {
     const dataResult2 = JSON.parse(data2);
     arrResult.push(dataResult2[0].message);

   }
 }
)
fs.readFile(
  "./data3.json",
   {encoding : "utf-8"},
  (err,data3)=>{
   if(err){
     return fnCallBack(err,null);
   }else {
     const dataResult3 = JSON.parse(data3);
     arrResult.push(dataResult3[0].data.message);

     arrFinalResult = arrResult.map(data => {
      finalData = data.split(" ");
      return finalData[1];
     });
     
    
     fnCallBack(null,arrFinalResult)
   
   }
 }
)

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
