let arrayToEnd = (n = 10, m = 3) => {
  // Create array
  let array = Array(n)
    .fill()
    .map((element, i) => i + 1 + "_element");
  console.log(array);

  let i = 0,
    i_new,
    tmp,
    tmp_number,
    mod = n % m;

  while (i < n) {
    if (i + m >= n) m = n - i - mod;
    else tmp_number = n - i - mod; // for balance

    i_new = i + m;

    if (
      i <= i_new && // for balance
      i_new !== n
    )
      tmp_number = i; // for balance
    else i_new = i;

    tmp = array[i];
    array[i] = array[i_new];
    array[i_new] = tmp;

    console.log({ i: i, i_new: i_new });
    console.log(array);
    i++;
  }
  console.log("Answer:");
  console.log(array);
};
arrayToEnd(10, 7);
