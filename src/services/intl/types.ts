export interface OuterProps {
    pendingNode?: React.ReactNode;
}

export type Dictionary = Nullable<{
    [k: string]: string; 
}>

export interface InnerProps {
    pending: boolean;
    dictionary: Dictionary;
}

export interface UseIntlConfig {
    pendingNode?: React.ReactNode;
}