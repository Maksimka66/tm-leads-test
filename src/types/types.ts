import type { ReactNode } from 'react';

export type AboutFormType = {
    email: string;
};

export type AppLogoExtendedProps = {
    width: number;
    height: number;
};

export type OpenIconProps = {
    id: string;
    className: string;
};

export type SectionNavContentProps = {
    first: string;
    second: string;
};

export type ButtonProps = {
    children: ReactNode;
    type: 'submit' | 'reset' | 'button';
};

