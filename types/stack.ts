export type RootStackParamList = {
   Home: undefined
   Mapbox: undefined
   Landing: undefined // { userId: string }
   Login: undefined
   Register: undefined
   Feed: { sort: 'latest' | 'top' } | undefined
}
