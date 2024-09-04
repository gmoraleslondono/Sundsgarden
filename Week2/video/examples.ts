// unions start
// type PasswordFieldTypes = number | string;

// const password = (code: number | string) => {
//     console.log("Password: " +code);
// }

// password("hello");
// password(1234);

// unions end

// intersection start
// interface Person {
//   name: string;
//   age: number;
// }

// interface Customer {
//   customerNumber: number;
//   email: string;
// }

// type Client = Person & Customer;

// const ClientData = (client: Client): void => {
//   console.log("Name: " + client.name + " Email: " + client.email);
// };

// ClientData({
//   name: "John",
//   age: 30,
//   customerNumber: 123,
//   email: "email@email.com",
// });

// intersection end

// enums start
// unauthorized
// missing credentials error
// internal error

// enum LoginErrors {
//   Unauthorized,
//   MissingCredentials,
//   InternalError,
// }

// const PrintErrorMessage = (error: LoginErrors): void => {
//   if (error === LoginErrors.Unauthorized) {
//     console.log("You are unauthorized");
//   } else if (error === LoginErrors.MissingCredentials) {
//     console.log("You are missing some credentials");
//   }
// };

// PrintErrorMessage(LoginErrors.Unauthorized);
// enums end

// generics start
// const convertToArray = <T>(input: T): T => {
//     return input
// }

// const arr = [23, 44, 56, 78];

// const getIndexOfArrayItem = <T>(array: T[], arrayItem: T) => {
//   console.log(array.findIndex((item) => item === arrayItem));
// };

// getIndexOfArrayItem(arr, 78); // 3
// generics end
