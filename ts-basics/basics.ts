// Primitives:

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types:

let hobbies: string[];
hobbies = ['Cooking', 'Reading', 'Music'];

let person: {
    name: string,
    age: number
};

person = {
    name: 'Max',
    age: 32
};

// Generics:

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3];

