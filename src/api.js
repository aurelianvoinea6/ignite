// base url
const base_url = "https://api.rawg.io/api/";
const key = "1e0f3b6418da4c7a9174b702a5e7a388";

//getting the date 
const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if(month < 10) {
        return `0${month}`
    }else{
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDay();
    if(day < 10) {
        return `0${day}`
    }else{
        return day;
    }
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear =`${currentYear + 1}-${currentMonth}-${currentDay}`;



getCurrentMonth();

//popular games

const popular_games = `games?key=1e0f3b6418da4c7a9174b702a5e7a388&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export  const popularGamesUrl = () => `${base_url}${popular_games}${key}`



 