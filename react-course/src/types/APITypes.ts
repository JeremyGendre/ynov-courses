export type User = {
    picture: { thumbnail: string },
    email: string,
    name: { last: string, first: string },
    gender: UserGender
};

export type UserGender = 'male'|'female';