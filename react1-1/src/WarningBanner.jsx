export default function WarningBanner(props) {
  if (props.warning) {
    return null;
  } else {
    return "보인다";
  }
}
