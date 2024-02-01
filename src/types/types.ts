export interface ApiDrinkResponse {
  drinks: {
    idDrink: string;
    strDrink: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
  }[];
}

export interface Drink {
  id: string
  name: string
  glass: string
  ingredients: string[]
  measures: string[]
  steps: string[]
  imgUrl: string
}
