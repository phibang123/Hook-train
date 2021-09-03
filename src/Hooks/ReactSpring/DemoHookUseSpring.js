import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";

export default function DemoHookUseSpring(props) {
	const [flip, set] = useState(false);

	const propss = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		reverse: flip,
		delay: 200,
		config: config.molasses,
		onRest: () => set(!flip),
	});
	//Number
	const propsNumberChange = useSpring({
		number: 100,
		from: { number: 0 },
		config: { duration: 10000 },
	});
	//SCROLL

	const words = ["We", "came.", "We", "saw.", "We", "kicked", "its", "ass."];

    const propsScroll = useSpring({ sroll: 100, from: { sroll: 0 }, config: { duration: 10000 } })
	return (
		<div className="container text-center">
			<h1>Change Text</h1>
			<animated.h1 style={propss}>hello</animated.h1>
			<h1>Chang Number</h1>
			<animated.h3>{propsNumberChange.number}</animated.h3>
			<animated.p style={{ fontSize: propsNumberChange.number }}>
				Con cu
			</animated.p>
			<animated.div scrollTop={propsScroll.useSpring}>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
			</animated.div>
		</div>
	);
}
