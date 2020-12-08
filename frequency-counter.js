function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequency = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        frequency[letter] ? frequency[letter] += 1 : frequency[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!frequency[letter]) {
            return false
        } else {
            frequency[letter] -= 1
        }
    }
    return true
}

console.log(validAnagram('aaz', 'zaz'))


//√ check to see if strings are same length
//√ create frequencey object
//√ iterate over str1
//√ if letter is not in frequency add and plus 1
//√ if letter is in frequency add 1 to that letter

// √iterate over str2 
// √if letter is not in frequency return false
// √if letter is in frequency subtract 1 from that letter

// √if all values of frequency are zero return true
// else return false