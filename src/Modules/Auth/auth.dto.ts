export interface isSignUpDTO {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	moibleNumber: string;
	DOB: string;
	providor?: 'system' | 'google';
	gender?: 'Male' | "Female";
}