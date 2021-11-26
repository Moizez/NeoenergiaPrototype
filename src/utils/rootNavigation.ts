import { createRef } from 'react';
import { TNavigation } from './typesNavigation';

export const navigationRef = createRef<TNavigation>();

export const navigate = (name: string, params?: any) => {
    navigationRef.current?.navigate(name, params);
}

export const replace = (name?: string, params?: any) => {
    navigationRef.current?.reset({
        index: 0,
        routes: [{ name, params }]
    });
}