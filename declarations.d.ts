declare module 'mime/lite';
declare module '@emoji-mart/data';
declare module '@emoji-mart/react';
declare module 'emoji-mart';
declare module '@/components/ui/hooks/use-toast';
declare module 'react-day-picker';
declare module 'vaul';
declare module 'react-resizable-panels';

// Refined declarations for problematic modules
declare module 'react-player' {
    import * as React from 'react';
    export interface ReactPlayerProps { [key: string]: any; }
    const ReactPlayer: React.ComponentType<ReactPlayerProps>;
    export default ReactPlayer;
}
declare module 'react-player/lazy' {
    import * as React from 'react';
    import { ReactPlayerProps } from 'react-player';
    const ReactPlayer: React.ComponentType<ReactPlayerProps>;
    export default ReactPlayer;
}

// Refined Embla declaration
declare module 'embla-carousel-react' {
    import * as React from 'react';
    // Define basic shapes for Options and Plugin based on usage
    export type EmblaOptionsType = { axis?: 'x' | 'y'; [key: string]: any };
    export type EmblaPluginType = any; // Keep plugin type simple for now
    // Declare the hook signature with two optional arguments
    export default function useEmblaCarousel(
        options?: EmblaOptionsType,
        plugins?: EmblaPluginType[]
    ): [React.RefCallback<HTMLElement>, any]; // Return type based on usage
    // Export the type used by the component
    export type UseEmblaCarouselType = ReturnType<typeof useEmblaCarousel>;
}

declare module 'input-otp' {
    import * as React from 'react';
    export const OTPInput: any;
    export const OTPInputContext: React.Context<any>; // Use basic context type
}

// Radix UI Modules (basic declarations)
declare module '@radix-ui/react-alert-dialog';
declare module '@radix-ui/react-accordion';
declare module '@radix-ui/react-aspect-ratio';
declare module '@radix-ui/react-avatar';
declare module '@radix-ui/react-checkbox';
declare module '@radix-ui/react-collapsible';
declare module '@radix-ui/react-dropdown-menu';
declare module '@radix-ui/react-hover-card';
declare module '@radix-ui/react-menubar';
declare module '@radix-ui/react-progress';
declare module '@radix-ui/react-radio-group';
declare module '@radix-ui/react-scroll-area';
declare module '@radix-ui/react-select';
declare module '@radix-ui/react-separator';
declare module '@radix-ui/react-slider';
declare module '@radix-ui/react-tabs';
declare module '@radix-ui/react-toast';
declare module '@radix-ui/react-toggle-group';
declare module '@radix-ui/react-toggle'; 