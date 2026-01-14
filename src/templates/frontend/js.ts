/**
 * Generates a basic JavaScript file with an event listener.
 *
 * @returns {string} The raw JS code.
 */
export const jsTemplate = () => `console.log('Project loaded!');

document.getElementById('clickMe')?.addEventListener('click', () => {
    alert('Hello from MyGen CLI!');
});
`;