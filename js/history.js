const NumOfPeopleForm = document.getElementById("NumOfPeopleForm");
const historyTag = document.getElementById("history");
const createBtn = document.getElementById("createBtn");
const deleteBtn = document.getElementById("deleteBtn");
let currentQuarter = 0;
let whiteTotal = 0;
let blackTotal = 0;

const handleCreateBtnClick = (event) => {
  event.preventDefault();
  whiteTotal = document.getElementById("whiteTotal").value;
  //blackTotal = document.getElementById("blackTotal").value;
  if (whiteTotal > 5) printQuarter(++currentQuarter);
};

const calculateRunningNumbers = (currentQuarter) => {
  let runningNumbers = "⛹🏼‍♂️ : ";
  let startsNum = (1 + 5 * (currentQuarter - 1)) % whiteTotal;
  let runningNumsArray = [];

  for (let i = 0; i < 5; i++) {
    let curNum = (startsNum + i) % whiteTotal;
    if (curNum == 0) curNum = whiteTotal;
    runningNumsArray.push(curNum);
  }

  runningNumsArray.sort((a, b) => a - b); // 정렬

  runningNumsArray.forEach((num) => {
    runningNumbers = runningNumbers.concat(` ${num}`);
  });

  return runningNumbers;
};

const calculateRestingNumbers = (currentQuarter) => {
  let restingNumbers = "💤 : ";
  const numberOfRestNumbers = whiteTotal - 5;
  let startsNum = (1 + 5 * currentQuarter) % whiteTotal;

  const restingNumsArray = [];

  for (let i = 0; i < numberOfRestNumbers; i++) {
    curNum = (startsNum + i) % whiteTotal;
    if (curNum == 0) curNum = whiteTotal;

    restingNumsArray.push(curNum);
  }

  restingNumsArray.sort((a, b) => a - b);

  restingNumbers = restingNumbers.concat(` ${restingNumsArray.join(" ")}`);
  return restingNumbers;
};

const printQuarter = (currentQuarter) => {
  const quarterInfo = document.createElement("div");
  quarterInfo.className = "quarter";
  const titleOfQuarter = document.createElement("h4");
  titleOfQuarter.className = "quarter_title";
  titleOfQuarter.innerHTML = `${currentQuarter} Quarter`;

  //create runningNumbers
  const runningNumbers = document.createElement("div");
  runningNumbers.className = "quarter_numbers";
  runningNumbers.innerHTML = calculateRunningNumbers(currentQuarter);

  //create restingNumbers
  const restingNumbers = document.createElement("div");
  restingNumbers.className = "quarter_numbers";
  restingNumbers.innerHTML = calculateRestingNumbers(currentQuarter);

  //append DeleteButton

  quarterInfo.appendChild(titleOfQuarter);
  quarterInfo.appendChild(runningNumbers);
  quarterInfo.appendChild(restingNumbers);
  historyTag.appendChild(quarterInfo);
};

const handleDeleteBtnClick = () => {
  while (historyTag.firstChild) {
    historyTag.firstChild.remove();
  }
  currentQuarter = 0;
};

//addEventListener
createBtn.addEventListener("click", handleCreateBtnClick);
deleteBtn.addEventListener("click", handleDeleteBtnClick);
