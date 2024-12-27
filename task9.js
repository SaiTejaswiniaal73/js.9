
// // 1.check input string is palindrome or not? using for loop and terinary operator.

let user_word=prompt("Hey please give the word to check give is Palindrome or Not")
let word=user_word;
let reverse_word="";
let x=word.length;
for(i=x-1;i>=0;i--)
{
    reverse_word=reverse_word+word[i]  
}
alert(word==reverse_word?"Hey! it is the Palindrome":"sry it is not pailndrome")

//2.i/p=["one","two","six","one"]---> o/p:n,w,i,n

let input = ["one", "two", "six", "one"];
let output=[]
for (let i = 0; i < input.length; i++) 
{
    output[i]=input[i][1]
}
console.log(output)

// 3.i/p=["one","two","three","four"]--->o/p:["eno","owt","eerht","ruof"];
let inputt = ["one", "two", "three", "four"];
let outputt = [];

for (let i = 0; i < inputt.length; i++) {
    let reversedWord = "";
    for (let j = inputt[i].length - 1; j >= 0; j--) {
        reversedWord += inputt[i][j];
    }
    outputt[i] = reversedWord;
}

console.log(outputt);
