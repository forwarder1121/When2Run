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
  let runningNumbers = "Running Nums : ";
  let startsNum = (1 + 5 * (currentQuarter - 1)) % whiteTotal;

  for (let i = 0; i < 5; i++) {
    curNum = (startsNum + i) % whiteTotal;
    if (curNum == 0) curNum = whiteTotal;
    runningNumbers = runningNumbers.concat(` ${curNum}`);
  }

  return runningNumbers;
};

const calculateRestingNumbers = (currentQuarter) => {
  let restingNumbers = "Resting Nums : ";
  const numberOfRestNumbers = whiteTotal - 5;
  let startsNum = (1 + 5 * currentQuarter) % whiteTotal;
  for (let i = 0; i < numberOfRestNumbers; i++) {
    curNum = (startsNum + i) % whiteTotal;
    if (curNum == 0) curNum = whiteTotal;
    restingNumbers = restingNumbers.concat(` ${curNum}`);
  }
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
  runningNumbers.innerHTML = calculateRunningNumbers(currentQuarter);

  //create restingNumbers
  const restingNumbers = document.createElement("div");
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
