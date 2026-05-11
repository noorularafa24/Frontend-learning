let counter = 0
const timerId = setInterval(() => {
    counter = counter + 1;
    console.log(counter)
    
}, 1000);

clearInterval(timerId);

const timeoutId = setTimeout(()=>{
    counter = counter+1
    console.log(counter)
},2000);

clearTimeout(timeoutId)