import { FC, useState } from "react";
import Avatar from "react-avatar-edit";
import { EncodeBase64 } from "utils/encodeBase64";
import { AvatarEditWrapper } from "./styles";
import { ImageCropProps } from "./types";

export const ImageCrop: FC<ImageCropProps> = ({
  image,
  height = 200,
  width = 300,
  handleSavePhoto,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editingImage, setEditingImage] = useState<string>("");
  const [preview, setPreview] = useState<null | string>(null);
  const [prevPreview, setPrevPreview] = useState<null | string>(null);

  const onClose = () => setPreview(null);
  const onCrop = (preview: string) => setPreview(preview);
  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 10_485_760) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };
  const onSave = () => {
    if (preview) {
      handleSavePhoto(preview, editingImage);
      setPrevPreview(preview);
      setEditMode(false);
    }
  };

  const onFileLoad = (file: any) => {
    EncodeBase64(file).then((res) => {
      console.log("res", res);
      setEditingImage(res);
    });
  };

  return (
    <AvatarEditWrapper>
      {editMode ? (
        <>
          <Avatar
            src={image}
            width={width}
            height={height}
            onCrop={onCrop}
            onClose={onClose}
            label={"Choose Avatar"}
            onBeforeFileLoad={onBeforeFileLoad}
            onFileLoad={onFileLoad}
          />
          <div>
            <button onClick={onSave} type="button">
              save
            </button>
            <button onClick={() => setEditMode(false)} type="button">
              cancel
            </button>
          </div>
        </>
      ) : (
        <div>
          <img
            src={prevPreview || image}
            width={120}
            height={120}
            className="image_default_styles"
          />
          <div>
            <button onClick={() => setEditMode(true)} type="button">
              edit
            </button>
          </div>
        </div>
      )}
    </AvatarEditWrapper>
  );
};
