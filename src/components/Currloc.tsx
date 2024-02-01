import { IconArrowRampRight, IconArrowRight } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";
function Currloc() {
	let location = useLocation();
	// let location_arr = location[0].split("/");

	// console.log(location_arr)
	return (
		<div className="curloc">
			<div className="strict_width">
				Home
				{/* {location_arr.map((item, index) => {
					if (index != 0) {
						if (index == location_arr.length - 1) {
							if (item == "") {
								return null;
							}
							return (
								<span className=" loc loc_last" key={index}>
									{" "}
									<IconArrowRight className="icon" />
									{item}
								</span>
							);
						}
						return (
							<span className="loc" key={index}>
								<IconArrowRight />
								{item}
							</span>
						);
					} */}
				{/* })} */}
			</div>
		</div>
	);
}

export default Currloc;
