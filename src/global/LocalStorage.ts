export const createLS = <Type>(key: string) => {
    const saveState = (state: Type) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem(key, serializedState);
        } catch (error: any) {
            console.warn(`
                Failed to save state to 
                Local Storage: ${error.message}
            `);
        }
    };

    const loadState = (): Type | undefined => {
        try {
            const serializedState = localStorage.getItem(key);
            if (null === serializedState) {
                return undefined;
            };
            return JSON.parse(serializedState);
        } catch (error: any) {
            console.warn(`
                Failed to load state from 
                Local Storage: ${error.message}`
            );
            return undefined;
        }
    };
    return { saveState, loadState };
};


