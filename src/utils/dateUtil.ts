const DateUtil = {
	parseDate: (date: Date | string) => {
		const dt = new Date(date);

		return `${dt.getDate()}/${
			dt.getMonth() + 1
		}/${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}`;
	}
};

export default DateUtil;
