import { ITheme } from '@Theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
