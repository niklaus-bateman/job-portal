import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faq from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
const Landing = () => {
	const plugin = React.useRef(Autoplay({ delay: 3000 }));
	return (
		<main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
			<section className="text-center">
				<h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
					Find Your Dream Job{" "}
					<span className="flex items-center gap-2 sm:gap-6">
						and get{" "}
						<img
							src="/logo.png"
							alt="gired-logo"
							className="h-14 sm:h-24 lg:h-32"
						/>{" "}
					</span>
				</h1>
				<p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
					Explore thousands of job openings or find the the perfect
					candidate
				</p>
			</section>
			<div className="flex align-center justify-center gap-6">
				<Link to="/jobs">
					<Button variant="blue" size="xl">
						Find Jobs
					</Button>
				</Link>
				<Link to="/post-job">
					<Button variant="destructive" size="xl">
						Post Job
					</Button>
				</Link>
			</div>
			{/* carousel */}
			<Carousel className="w-full p-10" plugins={[plugin.current]}>
				<CarouselContent className="flex gap-5 sm:gap-20 items-center">
					{companies.map(({ name, path, id }) => {
						return (
							<CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
								<img
									src={path}
									alt={name}
									className="h-9 sm:h-14 object-contain"
								/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
			{/* banner */}
			<img src="/banner.jpeg" alt="BANNER" className="w-full" />
			<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card>
					<CardHeader>
						<CardTitle className="font-bold">For Job Seekers</CardTitle>
					</CardHeader>
					<CardContent>
						Search and apply for jobs, track applications, and more.
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="font-bold">For Employers</CardTitle>
					</CardHeader>
					<CardContent>
						Post jobs, manage applications, and find the best candidates.
					</CardContent>
				</Card>
			</section>
			{/*accordian */}
			<section>
				<Accordion type="multiple" className="w-full">
					{faq.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</main>
	);
};

export default Landing;
