function debouce(func, timeout=300) {
	let timer;
	return (...arg) => {
		clearTimeout(timer)
		timer = setTimeout(() => { func.apply(this, args)}, timeout)

	}
}

function saveInput() {
	console.log('Data is saving')
}

const processChange = debouce(()=> saveInput())
