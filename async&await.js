async function myfn(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("resolved and solved")
        }, 2000)
    })
    
}

async function main(){
    console.log("Process");

    let data = await myfn()

    console.log(data)

    


}


main()




