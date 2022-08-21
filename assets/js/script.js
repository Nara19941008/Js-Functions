//task1

function Divided(n);
if(n % 3 == 0 && n % 7 == 0){
    console.log("Divided");
}else{
    console.log("Not divided")
}

//task2 faktoriali hesablayib geri qaytarmaq

//factMatch(4)

function factMatch(n) {
    var fact = 1;
    var result = n;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(fact);

}

//task3 arrayin icindeki cut ededlerin kvadratinin cemini tapmaq

var arr = [1,2,3,4,5,6,7,];

function sumEvenNums(nums) {
    let sum = 0;
  
    for (let i = 0; i <= nums.length; i++) {
      if (nums[i] % 2 == 0) {
        sum = sum + nums[i] * nums[i];
      }
    }
    console.log(sum);
  
}


//task4 Email detector


// let mail="cavid@code.edu.az";
// let password=12345

// if(Detector(mail, password))
// {
//     console.log("duzgundur");
// }
// else
// {
//     console.log("yalnishdir");
// }

function Detector(mail, password) {
    if (mail == "cavid@code.edu.az" && password == 12345) {
      return true;
    } else {
      return false;
    }
  }
  


//task5 Sum odd nums in array

var arr =[1,2,3,4,5,6,7];

function sumOddNums(nums){
    let sum=0;
   
    for (let i = 0; i < nums.length; i++){
   
        if(nums[i]%2==1){
            sum=sum+nums[i];
        console.log(nums[i])
    }
   }
}

sumOddNums(arr);


//task6

let arr=[1,3,5,7,8,9];

function countEvenNums(nums){
    for (let i=0;i<even.length;i++){
        if(nums[i]%2==0){
            console.log(count++)

        }
    }
}

countEvenNums(count);