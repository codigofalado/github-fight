import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      active: string;
      activeDark: string;
      primaryText: string;
      secundaryText: string;
      secundaryActive: string;
      secundaryActiveDark: string;
      background: string;
      card: string;
    };
  }
}
