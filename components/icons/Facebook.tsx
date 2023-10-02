import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    
    <Svg
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C65F1"
            d="M18.833 10c0-5.06-4.106-9.167-9.166-9.167C4.607.833.5 4.94.5 10c0 4.437 3.153 8.131 7.333 8.983V12.75H6V10h1.833V7.708c0-1.769 1.44-3.208 3.209-3.208h2.291v2.75H11.5a.92.92 0 0 0-.917.917V10h2.75v2.75h-2.75v6.371a9.165 9.165 0 0 0 8.25-9.12Z"
        />
    </Svg>
)

export default SvgComponent