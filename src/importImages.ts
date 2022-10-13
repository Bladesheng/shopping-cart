// Function for importing all images from given folder with webpack into dist folder
// Returns object with file names and paths to the files (in dist)
export default function importImages() {
  function importAll(r: __WebpackModuleApi.RequireContext) {
    return r.keys().map(r) as string[]; // returns paths to all the images
  }

  const imagesPaths = importAll(require.context("./styles/circles/", false, /\.(png|jpe?g|svg)$/));

  const images: { [colorName: string]: string } = {};

  for (const path of imagesPaths) {
    const nameWithExtension = path.split("/").pop(); // remove everything before file name
    const name = nameWithExtension.split(".").shift(); // remove file extension

    images[name] = path;
  }

  return images;
}
