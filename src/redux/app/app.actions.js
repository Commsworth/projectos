export function navbarColoursAction(navbarColours="primary") {
    return {
        type: 'NAVBAR_COLOURS',
        payload: {navbarColours}
    };
}