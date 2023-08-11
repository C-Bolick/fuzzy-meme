import { gql } from '@apollo/client';

export const GET_MENU_ITEMS = gql`
  query GetMenuItems {
    menuItems {
      id
      name
      price
      description
      filename
    }
  }
`;
