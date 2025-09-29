const expenses = [
  { date: "2025-09-25", category: "Food", amount: 200 },
  { date: "2025-09-25", category: "Transport", amount: 50 },
  { date: "2025-09-26", category: "Shopping", amount: 500 },
  { date: "2025-09-26", category: "Food", amount: 100 },
];

const byCategory = {};
let total = 0;
let max=0;
let maxCategory=""

expenses.forEach((num) => {
  total += num.amount;
  let cat = num.category;
  let amt = num.amount;
  if (!byCategory[cat]) {
    byCategory[cat] = amt;
  } else {
    byCategory[cat] += amt;
  }
});

for (let key in byCategory) {
  if (byCategory[key] > max) {
    max = byCategory[key];
    maxCategory=key
  }
}

const Result = {
  total: total,
  byCategory,
  maxCategory: maxCategory,
};

console.log(Result);

// Result
// {
//   total: 850,
//   byCategory: {
//     Food: 300,
//     Transport: 50,
//     Shopping: 500
//   },
//   maxCategory: "Shopping"
// }