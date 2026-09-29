// Preserve the original image dimensions, responsive sources and loading hints.
export default function ServiceImage({ image }) {
  return <img {...image} />;
}
