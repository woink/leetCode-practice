// function defangIPaddr(address: string): string {
//   return address.replaceAll('.', '[.]')
// }

// function defangIPaddr(address: string): string {
//   const addressArr = address.split('')

//   for (let i = 0; i < addressArr.length; i++) {
//     addressArr[i] === '.' && addressArr.splice(i, 1, '[.]')
//   }

//   return addressArr.join('')
// }

function defangIPaddr(address: string): string {
	return address.split('.').join('[.]');
}

// const address = "1.1.1.1"
const address = '255.100.50.0';
console.log(defangIPaddr(address));
