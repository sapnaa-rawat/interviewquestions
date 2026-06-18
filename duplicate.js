//remove duplicates from an array
function fun(arr){
    let seen = new Set()
    for(let i=0;i<arr.length;i++){
            if(!seen.has(arr[i])){
                seen.add(arr[i])
            }
    }
    return [...seen]
}
console.log(fun([12,1,5,1]))

//or we know that set itself can rmeove duplicates so we can do it in one line
function fun2(arr){
    return[...new Set(arr)]
}

//duplicate characters in a string
function characters(str){
    for(i=0;i<Str.length;i++){
        let result = " "
        if(!result.includes(str[i])){
            result +=str[i]
        }
    }
    return result
}
console.log(characters("hello world"))
