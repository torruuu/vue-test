const obj = {
	name: "Test",
	age: 20,
	email: "john@example.com",
	birthday: "1990-01-01",
	password: "123456",
	address: {
		street: "123 Main St",
		city: "Anytown",
		state: "CA",
		zip: "12345"
	}
}

const { password, ...rest } = obj

const person = {
	name: "John",
	...obj,
}

const { name, ...rest2 } = obj
const person2 = {
	name: "Jane",
	...rest2,
}

console.log(person2)
