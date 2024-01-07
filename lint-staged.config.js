module.exports = {
  // Type check TypeScript files
  'frontend/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  'backend/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  // 'frontend/**/*.(ts|tsx|js)': (filenames) => [
  //   `yarn eslint --fix ${filenames.join(' ')}`,
  //   `yarn prettier --write ${filenames.join(' ')}`,
  // ],
  // 'backend/**/*.(ts|tsx|js)': (filenames) => [
  //   `yarn eslint --fix ${filenames.join(' ')}`,
  //   `yarn prettier --write ${filenames.join(' ')}`,
  // ],

  // // Format MarkDown and JSON
  // 'frontend/**/*.(md|json)': (filenames) =>
  //   `yarn prettier --write ${filenames.join(' ')}`,
  // 'backend/**/*.(md|json)': (filenames) =>
  //   `yarn prettier --write ${filenames.join(' ')}`,
}
