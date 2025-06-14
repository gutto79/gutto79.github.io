// 動画ファイルの拡張子
const VIDEO_EXTENSIONS = [
  ".webm",
  ".mp4",
  ".mov",
  ".avi",
  ".mkv",
  ".flv",
  ".wmv",
];

// 画像ファイルの拡張子
const IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".svg",
  ".bmp",
];

/**
 * ファイルパスから動画ファイルかどうかを判定
 */
export const isVideoFile = (filePath: string): boolean => {
  const extension = filePath.toLowerCase().split(".").pop();
  return extension ? VIDEO_EXTENSIONS.includes(`.${extension}`) : false;
};

/**
 * ファイルパスから画像ファイルかどうかを判定
 */
export const isImageFile = (filePath: string): boolean => {
  const extension = filePath.toLowerCase().split(".").pop();
  return extension ? IMAGE_EXTENSIONS.includes(`.${extension}`) : false;
};

export const getMediaType = (
  filePath: string
): "video" | "image" | "unknown" => {
  if (isVideoFile(filePath)) return "video";
  if (isImageFile(filePath)) return "image";
  return "unknown";
};
