export type GlobalState = {
	auth: TAuth,
	user: TUser,
	storageless: TStorageless
} 

export type TAuth = {
	token?: string,
	signed?: boolean,
	loading?: boolean,
	onboard?: boolean
}

export type TUser = {
	profile?: ProfileProps,
	loading?: boolean
}

export type TStorageless = {
	activities?: Array<{}>,
	alert: TAlert,
	loading?: boolean
}

export type TSignInSucces = {
	token: string,
	profile: ProfileProps
}

export type TAlert = {
	visible?: boolean,
	color?: string,
	time?: number,
	message: string
}

export type TActionAuth = {
	type?: string,
	payload?: TAuth | TUser,
}

export type TActionUser = {
	type?: string,
	payload?: TUser
}

export type TActionStorageless = {
	type?: string,
	payload?: TStorageless,
	key?: string
}

//Props internas
type ProfileProps = {
	id?: string,
	name?: string,
	fullname?: string,
	email?: string,
	age?: number,
	phone?: string
}