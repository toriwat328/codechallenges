//Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring(e.g. "waterbottle" is a rotation of "erbottlewat")

//runtime is O(N)

//if we image that s2 is a rotation of s1, then we can ask what the rotation point is. For example. if you rtotat waterbottle after wat, you get erbottlewat. In a rotation. we cut s1 into two parts x and y. and rearrange them to get s2.

//s1 = xy = waterbottle

//x = wat

//y = erbottle

//s2 = yx = erbottlewat

//Need to check if there is a way to split s1 into x and y such that xy = s1 and yx = s2. yx will always be a substring of xyxy. That is s2 will always be a substing of s1s1.

const isRotation = (s1, s2) => {
    let len = s1.length;

    //check that s1 and s2 are equal length and not empty

    console.log(len);
    console.log(s2.length);

    if(len == s2.length && len > 0){

        //concatenate s1 and s1 within new buffer
        let s1s1 = s1 + s1;

        //see if the concatenation of s1 2 times includes the second string
        return s1s1.includes(s2);
    }

    return false;

}

console.log(isRotation("waterbottle", "erbottlewat"));
