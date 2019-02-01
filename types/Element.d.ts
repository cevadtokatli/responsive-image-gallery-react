import * as React from 'react';

interface ElementProps {
    category: string;
    index?: number;
    add?: (index:number, el:HTMLDivElement, category:string) => void;
    remove?: (index:number) => void;
}

export declare class Element extends React.Component<ElementProps, {}> {

}