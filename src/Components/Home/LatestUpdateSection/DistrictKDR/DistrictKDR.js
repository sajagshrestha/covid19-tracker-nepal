import React, { useState, useEffect } from "react";
import SelectDistrict from "../SelectDistrict/SelectDistrict";
import { DistrictKDRWrapper } from "../../Home.styles";
import DistrictCard from "../../Card/DistrictCard";
const DistrictKDR = ({ data }) => {
	const [district, setDistrict] = useState("");
	const [districtNewCases, setDistrictNewCases] = useState(0);
	const [defaultDistrictData, setDefaultDistrictData] = useState({
		Kathmandu: 0,
		Bhaktapur: 0,
		Lalitpur: 0,
	});
	useEffect(() => {
		if (district !== "") {
			let sum = 0;
			data.forEach((e) => {
				if (e.District.slice(4) === district.toUpperCase()) {
					sum += parseInt(e.Value, 10);
				}
			});
			setDistrictNewCases(sum);
		} else {
			let kathmanduSum = 0;
			let bhaktapurSum = 0;
			let lalitpurSum = 0;
			data.forEach((e) => {
				if (e.District.slice(4) === "KATHMANDU") {
					kathmanduSum += parseInt(e.Value, 10);
				}
			});
			data.forEach((e) => {
				if (e.District.slice(4) === "BHAKTAPUR") {
					bhaktapurSum += parseInt(e.Value, 10);
				}
			});
			data.forEach((e) => {
				if (e.District.slice(4) === "LALITPUR") {
					lalitpurSum += parseInt(e.Value, 10);
				}
			});

			setDefaultDistrictData({
				Kathmandu: kathmanduSum,
				Bhaktapur: bhaktapurSum,
				Lalitpur: lalitpurSum,
			});
		}
	}, [
		data,
		district,
		districtNewCases,
		defaultDistrictData.Kathmandu,
		defaultDistrictData.Bhaktapur,
		defaultDistrictData.Lalitpur,
	]);
	if (test.length === 0) {
		return (
			<DistrictKDRWrapper>
				<div className="title">
					<div className="main-title">By District</div>
					<SelectDistrict
						className="updated-at"
						setDistrict={setDistrict}
					/>
				</div>
				<div className="kdr-data-section-single">
					<h1>Data is being updated. Please check again later.</h1>
				</div>
			</DistrictKDRWrapper>
		);
	}
	return (
		<DistrictKDRWrapper>
			<div className="title">
				<div className="main-title">By District</div>
				<SelectDistrict
					className="updated-at"
					setDistrict={setDistrict}
				/>
			</div>
			{district === "" ? (
				<div className="kdr-data-section">
					<div className="kdr-data">
						<DistrictCard
							name="Bhaktapur"
							data={defaultDistrictData.Bhaktapur}
						/>
						<DistrictCard
							justify="center"
							name="Kathmandu"
							data={defaultDistrictData.Kathmandu}
						/>
						<DistrictCard
							justify="end"
							name="Lalitpur"
							data={defaultDistrictData.Lalitpur}
						/>
					</div>
				</div>
			) : (
				<div className="kdr-data-section-single">
					<DistrictCard
						type="singleDistrict"
						name={district}
						data={districtNewCases}
					/>
				</div>
			)}
		</DistrictKDRWrapper>
	);
};
export default DistrictKDR;
