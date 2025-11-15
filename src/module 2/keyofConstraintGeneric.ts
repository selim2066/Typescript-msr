

const getPropertyFromObj = <X>(obj:X, key: keyof X) =>{
  return obj[key]
}

const user ={
  name: "killerNight",
  id: 2620226635
}

const me={
  name: "batman",
  code: 49593344
}

console.log(getPropertyFromObj(user, "name"))