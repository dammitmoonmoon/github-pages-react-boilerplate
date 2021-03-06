import * as React from 'react';

export interface CommonProps<THEME_NAME extends string = never, ELEMENT extends HTMLElement = any>
    extends React.RefAttributes<ELEMENT> {
    children?: React.ReactNode;
    className?: string;
    themeName?: THEME_NAME;
}

export interface CommonInnerProps<THEME extends object = never, ELEMENT extends HTMLElement = any>
    extends React.RefAttributes<ELEMENT> {
    children?: React.ReactNode;
    className?: string;
    theme?: THEME;
}

export type OneOrMore<T> = T | T[];
