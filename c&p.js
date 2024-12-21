// Callback function by saidur the coder 

// function processtask(task, callback) {
//   console.log("Processing", task);
//   callback(task);
// }

// let a = processtask("clean", (task) => {
//   console.log("Processing completed", task);
// });

// console.log(a);


// Promises by saidur the coder

let kosom1 = new Promise((resolve, reject) => {
    let cybr = Math.random()
    if(cybr > 0.5){
        setTimeout(() => {
            console.log("Printing1");
            resolve("Done printring1")
        }, 2*1000);
    }
    else{
        reject("requeset rejeceted")
    }

});

kosom1.then((done) => {
    console.log(done)
}).catch((err) => {
    alert(err)
    console.log(err);
    
}
)