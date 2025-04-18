const getStoredBook = () => {
  const storedBookStr = localStorage.getItem('reedList');
  if (storedBookStr) {
    const strodeBookData = JSON.parse(storedBookStr);
    return strodeBookData;
  } else {
    return [];
  }
};

const addToStoreDb = id => {
  const strodeBookData = getStoredBook();

  if (strodeBookData.includes(id)) {
    alert('vai id aga takai asa');
  } else {
    strodeBookData.push(id);
    const data = JSON.stringify(strodeBookData);
    localStorage.setItem('reedList', data);
    // console.log(strodeBookData);
  }
};

export { addToStoreDb, getStoredBook };
