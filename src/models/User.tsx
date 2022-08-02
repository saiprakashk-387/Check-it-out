export default interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isAuthenticated: boolean;
  accessToken: string;
}
