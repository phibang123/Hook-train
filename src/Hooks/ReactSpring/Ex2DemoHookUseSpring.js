import { animated, useSpring, useSprings } from "react-spring";

import React from "react";

export default function Ex2DemoHookUseSpring(props) {
	let { color, ...propUsePring } = useSpring({
		color: [131, 111, 255],
		from: { color: [238, 99, 99] },
		config: {
			delay: 0 /*sao thời gian delay nó sẻ chạy liền   */,
			duration: 2000 /*chạy trông bao lâu */,
		},
	});

	//tăng font chử tăng độ dài

	let propsAnime  = useSpring({
		from: {
			width: "0%",
			height: "0%",
			fontSize: "10px",
		},
		to: async (next, cancal) => {
			await next({ width: 1, height: "100%", fontSize: "50px" })
            await next({ width: 0, height: "50%", fontSize: "10px" })
            // return /*return thì nó sẻ dừng thằng phía sao ko làm nữa */
			await next({ width: 1, height: "100%", fontSize: "50px" })
		},
		config: {
			duration: 5000, /*thực hiện 5s cho từng thằng */
		},
	});
	return (
		<div>
			<animated.div
				style={{
					color: color.interpolate((r, g, b) => {
						return `rgb(${r},${g},${b})`;
					}) /*phương thức giá trị là mảng */,
				}}
			>
				hello Bằng
			</animated.div>

            <animated.span style={propsAnime} className="bg-dark text-white">
                <span>
                    Hello Bằng
                </span>
                <p>
                    Mày học chậm quá
                </p>
            </animated.span>
		</div>
	);
}
