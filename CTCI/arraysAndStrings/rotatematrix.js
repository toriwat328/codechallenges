//Rotate Matrix

//Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

//Implement the rotation in layers. Copy the top edge to an array an then move the left to the top, the bottom to the left, etc. This requires O(N) memory. Better -> swap index by index

const rotateMatrix = (matrix) => {
    //if the matrix length is equal to 0 or not equal to the length of matrix at its 0th index, return false
    if(matrix.length === 0 || matrix.length !== matrix[0].length){
        return false;
    }

    //set n = matrix's length
    let n = matrix.length;


    //as long as the layer is less than half of the matrix's length - iterate through the matrix by layer
    for(let layer = 0; layer < n / 2; layer++){

        //set first equal to layer
        let first = layer;

        //set last equal to the matrix's length minus 1 - layer
        let last = n - 1 - layer;

        //i is equal to first. As long as i is less than last increase i
        for(int i = first; i < last; i++){

            //offset is i minus 1
            let offset = i - 1;

            //the top is equal to matrix[layer][layer]
            let top = matrix[first][i]; //save top

            //left -> top
            //top is set equal to matrix[n-1-layer - i - 1][layer]
            matrix[first][i] = matrix[last-offset][first];

            //bottom -> left
            matrix[last-offset][first] = matrix[last][last-offset];

            //right -> bottom
            matrix[last][last - offset] = matrix[i][last];

            //top -> right
            matrix[i][last] = top; // right <- saved top
        }
    }
    return true;
}
