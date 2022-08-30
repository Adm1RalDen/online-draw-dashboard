export type ImageCropProps = {
  image: string;
  width: number;
  height: number;
  handleSavePhoto: (crop: string, originalImage: string) => void;
};
