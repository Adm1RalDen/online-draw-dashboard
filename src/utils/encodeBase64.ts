export const EncodeBase64 = (file: File): Promise<string> =>
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result as string);
    reader.onerror = (error) => rej(error);
  });

export const createBlobFile = async (
  str: string,
  name: string,
  type: string
) => {
  const res = await fetch(str);
  const blob = await res.blob();
  const file = new File([blob], name, { type });
  return file;
};
