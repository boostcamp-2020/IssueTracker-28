const getElapsedTime = (time) => {
    const dateArr = time.split('T')[0];
    const timeArr = time.split('T')[1];
    const [year, month, date] = dateArr.split('-');
    const [hour, min, sec] = timeArr.split(':');
    const createdTime = new Date(parseInt(year), parseInt(month) - 1, parseInt(date), parseInt(hour), parseInt(min), parseInt(sec));
    const currentTime = new Date();
    const elapsedSecond = (currentTime.getTime() - createdTime.getTime()) / 1000;

    let result;
    if (elapsedSecond < 60) {
        result = `${parseInt(elapsedSecond)} seconds`
    } else if (elapsedSecond < 3600) {
        result = `${parseInt(elapsedSecond / 60)} minutes`
    } else if (elapsedSecond < 86400) {
        result = `${parseInt(elapsedSecond / 60 / 60)} hours`
    } else {
        result = `${parseInt(elapsedSecond / 60 / 60 / 24)} days`
    }
    return result;
};


export default getElapsedTime;