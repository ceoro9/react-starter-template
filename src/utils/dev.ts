/* eslint-disable @typescript-eslint/no-explicit-any */
export const isHmrEnabled = (module: any): module is { hot: any } => {
	return process.env.NODE_ENV === 'development' && module.hot;
};
