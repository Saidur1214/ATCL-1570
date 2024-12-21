let a = prompt("First num");

let b = prompt("Last num");



let main = () => {
    
    try {

        if (isNaN(a) || isNaN(b)){
            throw SyntaxError("Please Give a nuber")
        }

        let c = parseInt(a) + parseInt(b);
        
        console.log(c)

    } catch (error) {
        console.log("Error")
        
    }
}

main()
