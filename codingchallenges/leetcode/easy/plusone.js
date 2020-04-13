const plusone = (digits) => {
    let nel = (digits[digits.length-1])
    nel += 1
    digits.splice(digits.length-1, 1, nel)
    return digits;
}
