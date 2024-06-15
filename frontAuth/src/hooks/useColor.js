export const getPhaseStyles = (phase) => {

    switch (phase) {
        case 'APPROVED':
            return { text: 'APPROVED', color: 'text-green-500' };
        case 'PENDING':
            return { text: 'PENDING', color: 'text-gray-500' };
        case 'DENIED':
            return { text: 'DENIED', color: 'text-red-500' };
        case 'FINISHED':
            return { text: 'FINISHED', color: 'text-gray-500' };
        default:
            return { text: 'FINISHED', color: 'text-gray-500' };
    }
    
}