import { gql } from "@apollo/client"

export const QUERY_MENU = gql`query Menu {
    menu {
      _id
      name
      time_offered
    }
  }`

