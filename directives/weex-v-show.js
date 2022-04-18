function generateDeclaration(property, value, important) {
	return {
		type: 'declaration',
		property,
		value: value
	}
}

function clearImportant(value) {
	const newValue = String(value).replace(/ !important$/, '')
	return {
		value: newValue,
		important: value !== newValue
	}
}

function margin(declaration) {
	const {
		value,
		important
	} = clearImportant(declaration.value)
	const position = declaration.position
	const splitResult = value.split(/\s+/)
	const result = []
	switch (splitResult.length) {
		case 1:
			splitResult.push(splitResult[0], splitResult[0], splitResult[0])
			break
		case 2:
			splitResult.push(splitResult[0], splitResult[1])
			break
		case 3:
			splitResult.push(splitResult[1])
			break
	}
	result.push(
		generateDeclaration('marginTop', splitResult[0], important, position),
		generateDeclaration('marginRight', splitResult[1], important, position),
		generateDeclaration('marginBottom', splitResult[2], important, position),
		generateDeclaration('marginLeft', splitResult[3], important, position)
	)
	return result
}

const parserCollection = {
	margin
}

function expandShorthandProperty(declaration) {
	const parser = parserCollection[declaration.property]
	if (parser) {
		declaration = parser(declaration)
	}
	return [].concat(declaration)
}

const hiddenStyle = {
	boxSizing: 'border-box',
	marginTop: '0',
	marginRight: '0',
	marginBottom: '0',
	marginLeft: '0',
	width: '0',
	height: '0',
	overflow: 'hidden'
}

const defaultStyle = {
	boxSizing: '',
	marginTop: '',
	marginRight: '',
	marginBottom: '',
	marginLeft: '',
	width: '',
	height: '',
	overflow: ''
}

let oldSetStyle

function setStyle(key, value, silent) {
	expandShorthandProperty({
		property: key,
		value
	}).forEach(({
		property,
		value
	}) => {
		if (this.__hidden__ && property in hiddenStyle) {
			this.__cacheStyle__[property] = value
			return
		}
		oldSetStyle.call(this, property, value, silent)
	})
}

let oldSetStyles

function setStyles(batchedStyles, silent) {
	const style = {}
	for (const key in batchedStyles) {
		const value = batchedStyles[key]
		expandShorthandProperty({
			property: key,
			value
		}).forEach(({
			property,
			value
		}) => {
			if (this.__hidden__ && property in hiddenStyle) {
				this.__cacheStyle__[property] = value
				return
			}
			style[property] = value
		})
	}
	oldSetStyles.call(this, style, silent)
}

let oldToStyle

function toStyle() {
	let style = oldToStyle.call(this)
	if (this.__hidden__) {
		return Object.assign({}, style, hiddenStyle)
	} else {
		return Object.assign({}, defaultStyle, style)
	}
}

function update(el, {
	value
}) {
	if (!el.__initVShow__) {
		el.__initVShow__ = true
		el.__cacheStyle__ = {}
		oldSetStyle = el.setStyle
		el.setStyle = setStyle
		oldSetStyles = el.setStyles
		el.setStyles = setStyles
		oldToStyle = el.toStyle
		el.toStyle = toStyle
	}
	const hidden = !value
	if (el.__hidden__ === hidden) {
		return
	}
	el.__hidden__ = hidden
	if (!hidden) {
		oldSetStyles.call(el, el.__cacheStyle__)
		el.__cacheStyle__ = {}
	}
	el.setClassStyle(Object.assign({}, el.classStyle))
}
let instance;
// #ifdef VUE2
instance = {
	bind: update,
	update: update
};
// #endif
// #ifdef VUE3
instance = update;
// #endif
export default instance;
