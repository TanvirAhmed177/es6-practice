const ages = [11, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 46, 32, 33];
const allAges = ages.concat(ages2).concat(ages3).concat([5]);
const allAges2 = [...ages, ...ages2, ...[5], ...ages3];

console.log(allAges);
console.log(allAges2);

const business = 650;
const minister = 550;
const lawyer = 450;
const money = [650, 550, 450];
// const maximum = Math.max(business, minister, lawyer);
const maximum = Math.max(...money);
console.log(maximum);
