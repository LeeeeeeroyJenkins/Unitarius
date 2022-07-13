let task_1 = (n = 10, m = 3) => { 
  // Create array
  let array1 = Array(n).fill().map((element, i) => (i+1) + '_element')
  console.log(array1)

  let i = 0, i_new, tmp, tmp_number
  
  while (i < n) {
    i_new = i + m
    if (i_new >= n) i_new = n - 1
    else tmp_number = n - 1 // for balance

    tmp = array1[i];
    array1[i] = array1[i_new]
    array1[i_new] = tmp
    
    i++
  } 
  console.log(array1)
}
task_1(10, 3)
