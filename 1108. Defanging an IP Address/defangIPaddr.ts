function defangIPaddr(address: string): string {
  return address.replaceAll('.', '[.]')
}

// const address = "1.1.1.1"
const address = "255.100.50.0"
console.log(defangIPaddr(address))