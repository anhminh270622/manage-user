export type User = {
    id: number;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
    job: string;
    avatar: string;
    name: string
}

export type Users = Array<User>;

export type UserInput = {
    email: string;
    password: string;
}

export type UserUpdate = {
    name?: string;
    job?: string;
}
