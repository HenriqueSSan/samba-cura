export const getServerLocale = (locale: string) => {
	if (['pt-BR', 'pt-br', 'pt'].includes(locale)) {
		return {
			app: 'pt-br'
		};
	} else if (['en', 'en-US', 'en-us'].includes(locale)) {
		return {
			app: 'en'
		};
	} else if (['es'].includes(locale)) {
		return {
			app: 'es'
		};
	} else {
		return {
			app: 'pt-br'
		};
	}
};
