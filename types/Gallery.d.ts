import * as React from 'react';
import ResponsiveImageGallery from 'responsive-image-gallery';

interface GalleryProps {
    bar: HTMLElement|string;
    active?: string;
    timing?: string;
    duration?: number;
    minWidth?: number;
    maxWidth?: number;
    height?: number;
    horizontalSpace?: number;
    verticalSpace?: number;
    overflow?: boolean;
    grid?: boolean;
}

export declare class Gallery extends React.Component<GalleryProps, {}> {
    gallery: ResponsiveImageGallery;
    
    add(index:number, el:HTMLDivElement, category:string): void;
    remove(index:number): void;
    get(): string;
    set(category:string, animate:boolean): void;
    getTiming(): string;
    setTiming(timing:string): void;
    getDuration(): number;
    setDuration(duration:number): void;
    destroy(): void;
}