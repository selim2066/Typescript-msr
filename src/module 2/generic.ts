//dynamically generalize: Generic

type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["shafi", "Hasib", "Ali", "Mehedi", "Rumon"]

const futureWife : GenericArray<string> = ["BatNight","KillerMan", "SadaFul"]

// generic with type alias

type She ={

  name: string,
  id: string,
  relation: boolean
  

}

const rabbatulBayit : GenericArray<She> =[{
name: "KN",
id:"262235",
relation: false
}]

//console.log(rabbatulBayit)