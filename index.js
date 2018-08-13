const formatDate = (timeInSeconds) => {
	if (!timeInSeconds) {
        return '0s';
    };
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  	const seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60));
   
    return [hours ? hours + 'h ' : '', minutes ? minutes + 'm ' : '', seconds ? seconds + 's ' : ''].join('').trim(); 

};

module.exports = formatDate;