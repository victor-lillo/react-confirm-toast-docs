export interface CompProps {
    asModal?: boolean,
    children: React.ReactNode,
    showCloseIcon?: boolean,
    customCancel?: string,
    customConfirm?: string,
    customFunction: Function,
    message?: string,
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right',
    theme?: 'light' | 'dark' | 'snow' | 'lilac'
}
