export interface UserState {
    users: any[];
    inputText: string;
    openAdd: boolean;
    openDelete: boolean;
    openUpdate: boolean;
    selectedDelete: number | null;
    selectedUpdate: number | null;
    inputSearch: string;
    isLoading: boolean;
}
