export interface NavItem {
    label: string,
    url: string,
    selected: boolean,
    enabled: boolean,
    onClick: () => void
}