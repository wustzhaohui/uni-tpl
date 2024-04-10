
const request = (url: string, method: any, data: any, option: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
            success: (res:any) => {
                resolve(res);
            },
            fail: (err:any) => {
                reject(err)
            },
			...option,
		});
	});
};
export default request;