import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h18v18H0z" transform="translate(.333)" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.02083)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={48}
        height={48}
      />
    </Defs>
  </Svg>
)
export default SvgComponent
