import * as ImageManipulator from "expo-image-manipulator";

const NEEDS_CONVERSION = ["heic", "heif"];

const getExtension = (uri: string): string => {
  const match = uri.match(/\.([a-zA-Z0-9]+)$/);
  return match ? match[1].toLowerCase() : "";
};

export const convertImageToJpeg = async (uri: string): Promise<string> => {
  const ext = getExtension(uri);

  if (!NEEDS_CONVERSION.includes(ext)) {
    return uri;
  }

  const result = await ImageManipulator.manipulateAsync(
    uri,
    [],
    { compress: 0.9, format: ImageManipulator.SaveFormat.JPEG },
  );

  return result.uri;
};