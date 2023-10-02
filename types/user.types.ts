export interface User {
    _id: string
    age: number
    fullName: string
    providerData: ProviderData
}

export interface ProviderData {
    displayName: any
    email: string
    phoneNumber: any
    photoURL: any
    providerId: string
    uid: string
}