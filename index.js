const inptRange = document.querySelector(".range-inpt");
const inptSwitch = document.querySelector(".inpt-switch");
const ball = document.querySelector(".ball");
const totalMoney = document.querySelector(".money");
const monthYear = document.querySelector(".month-year");
const pageviews = document.querySelector(".pagewiews");
const pricesMonth = [8,12,16,24,36];
const pagAmount = ["10k","50k","100k","500k","1M"];

const prices = ()=>{
    return inptRange.value
};

inptSwitch.addEventListener("click",(e)=>{
    ball.classList.toggle("switched");
    if(ball.classList.contains("switched")){
        monthYear.textContent = "/Year";
        totalMoney.textContent =`$${Number((pricesMonth[prices()] * 12) - (((pricesMonth[prices()] * 12) / 100) * 25)).toFixed(2)}`;
        pageviews.textContent = `${pagAmount[prices()]} PAGEVIEWS`;
        return
    }monthYear.textContent = "/Month";
     totalMoney.textContent =`$${Number(pricesMonth[prices()]).toFixed(2)}`;
     pageviews.textContent = `${pagAmount[prices()]} PAGEVIEWS`;  
});

inptRange.addEventListener("change",(e)=>{
    if(ball.classList.contains("switched")){
        totalMoney.textContent =`$${Number((pricesMonth[prices()] * 12) - (((pricesMonth[prices()] * 12) / 100) * 25)).toFixed(2)}`;
        pageviews.textContent = `${pagAmount[prices()]} PAGEVIEWS`;
        return   
    }totalMoney.textContent =`$${Number(pricesMonth[prices()]).toFixed(2)}`;
     pageviews.textContent = `${pagAmount[prices()]} PAGEVIEWS`;   
});