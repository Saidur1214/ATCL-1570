// let saidur = {
//     brain : "inactive",
//     eyes : "open"
// }

// let arafat = {
//     brain : "active"
// }

// arafat.__proto__ = saidur;

// console.log(arafat)

class parenta{
    constructor(name, cntry, religion){
        this.student_name = name 
        this.country_name = cntry
        this.religion_name = religion
    }
    
    nameo(){
        console.log("Printing name:", this.student_name)
    }

    Nationality(){
        console.log("His country:", this.country_name)
    }

    religion(){
        console.log("He is:" , this.religion_name)
    }
}

class child extends parenta {

    constructor(name, cntry, religion, college, id){
        super(name, cntry, religion)
        this.collegeo = college
        this.ido = id
    }

    college(){
        console.log("your college:", this.collegeo)
    }

    id(){
        console.log("your id:", this.id0)
    }
}


let saidur = new parenta("Saidur", "bangla", "muslim")
// console.log(saidur)

let colinfo = new child("saidur", "bangali", "muslim", "baitush", 42)
console.log(colinfo)









