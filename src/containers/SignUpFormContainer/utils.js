function generateTime() {

    let days = [];

    for(let i = 1; i < 31; i++) {
        days.push(i);
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let years = [];

    const currentYear = new Date().getFullYear();

    for(let i = 1923; i <= currentYear; i++) {
        years.push(i);
    }

    return {
        days, months, years
    }
}

export default generateTime;