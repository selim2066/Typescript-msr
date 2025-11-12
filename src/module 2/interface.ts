// type alias

type User ={
  name: string,
  id: number
}

type Role ={
  role : "admin" | "user"
}

type newType = User & Role

const selim : newType ={
  name: "selim",
  id: 20266,
  role: "admin"

}

console.log(selim)

// interface : for object type like object, array, function

interface Iuser {
  name : string,
  id: number
}
interface Irole extends Iuser{
  role: "admin"|"manager"
}

const darkNight : Irole ={
  name : "BatNight",
  id: 262235,
  role: "manager"
}

console.log(darkNight)

//! good usecase : object er khetre interface and array o function er khetre type alias


