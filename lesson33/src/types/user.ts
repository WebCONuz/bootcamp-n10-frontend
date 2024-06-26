export type userDto = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
};

export interface userCard {
  data: userDto;
  title: {
    type: string;
    required: false;
  };
}
