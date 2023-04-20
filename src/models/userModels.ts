export interface UserAddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
export interface UserCompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserModels {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddressModel;
  phone: string;
  website: string;
  company: UserCompanyModel;
}
