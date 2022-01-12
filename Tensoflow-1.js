let a = tf.tensor([[1, 2], [3, 4]]);
console.log('shape:', a.shape);
a.print();

const b= a.reshape([4,1])
console.log("shape : ",b.shape)
b.print()

a = tf.tensor([[1, 2, 6], [3, 4, 5]],[2,3],'int32');
console.log('shape:', a.shape);
console.log('dtype', a.dtype);
a.print();


 // Returns the multi dimensional array of values.
 a.array().then(array => console.log(array));
 // Returns the flattened data that backs the tensor.
 a.data().then(data => console.log(data));
