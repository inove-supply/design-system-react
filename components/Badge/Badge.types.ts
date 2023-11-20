export interface BadgeProps {
    title?: string;
    status?:
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'dark'
    | 'inactive'
    | 'yellow'
    | 'amber'
    | 'violet'
    | 'cyan';
    dot?: boolean;
    customClass?: string;
}